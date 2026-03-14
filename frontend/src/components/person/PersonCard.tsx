import { useState } from "react";
import {
  useApplyPersonChangesMutation,
  useRejectPersonChangesMutation,
} from "../../api/adminApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  useUpdatePersonLockMutation,
  useDeletePersonMutation,
} from "../../api/personsApi";
import { useAuth } from "../../contexts/useAuth";
import { ConfirmModal } from "../ConfirmModal";
import {
  Paper,
  Title,
  Text,
  Group,
  Stack,
  Divider,
  Button,
  Checkbox,
} from "@mantine/core";
import {
  IconChevronDown,
  IconChevronUp,
  IconChevronLeft,
} from "@tabler/icons-react";
import PhotoGallery from "../ui/PhotoGallery";

import {
  calculateZodiacSign,
  calculateChineseZodiac,
} from "../../utils/astrology";
import type { Person, Photo } from "../../types";

interface PersonCardProps {
  userId: string;
  person: Person;
  currentPersonPhoto?: Photo[];
  isSpouses?: boolean;
  isEditCard?: boolean;
  isMainEditCard?: boolean;
  refetchAll: () => void;
  onSuccess: (success: string) => void;
  setError: (errord: string) => void;
  handleNavigateUp?: () => void;
  openModalFormat: (volue: string, personId: string) => void;
  handleNavigateDown?: (childId: string) => void;
  onSpouseNavigate?: (direction: "prev" | "next") => void;
  spouseCount?: number;
  typePerson: "parent" | "child";
  isMobile: boolean;
  branch?: string;
}

export default function PersonCard({
  userId,
  person,
  currentPersonPhoto,
  isSpouses = false,
  isEditCard = false,
  isMainEditCard = false,
  typePerson,
  isMobile,
  refetchAll,
  onSuccess,
  setError,
  handleNavigateUp,
  openModalFormat,
  handleNavigateDown,
  onSpouseNavigate,
  spouseCount,
  branch,
}: PersonCardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState<{
    isOpen: boolean;
    personId: string | null;
    loading: boolean;
  }>({
    isOpen: false,
    personId: null,
    loading: false,
  });
  const [ setSearchParams] = useSearchParams();
  const [applyChanges, { isLoading }] = useApplyPersonChangesMutation();
  const [rejectChanges] = useRejectPersonChangesMutation();
  const [updatePersonLock] = useUpdatePersonLockMutation();
  const [deletePerson] = useDeletePersonMutation();
  const photos = currentPersonPhoto ? currentPersonPhoto : person.photos;

  function calculateAge(birthDate: Date, deathDate?: Date): number {
    const today = deathDate ? new Date(deathDate) : new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  }
  function getAgeLabel(age: number): string {
    if (age % 100 >= 11 && age % 100 <= 14) {
      return "лет";
    }
    switch (age % 10) {
      case 1:
        return "год";
      case 2:
      case 3:
      case 4:
        return "года";
      default:
        return "лет";
    }
  }
  // Размер высоты поля семейной пары
  const heightCard = user?.isSuperAdmin
    ? "100%"
    : user?.isAdmin
      ? "100%"
      : "100%";

  function getFullName(person: Person): string {
    const lastName = person?.lastName ? person.lastName : "";
    const firstName = person?.firstName ? person.firstName : "";
    const patronymic = person?.patronymic ? person.patronymic : "";

    return lastName && firstName && patronymic === ""
      ? "нет данных"
      : `${lastName} ${firstName} ${patronymic}`.trim();
  }

  const fullName = `${person.firstName} ${person.patronymic}`.trim();

  const birthDate = person.birthDate ? new Date(person.birthDate) : undefined; // убедитесь, что это Date
  const deathDate = person.deathDate ? new Date(person.deathDate) : undefined;
  const age = birthDate ? calculateAge(birthDate, deathDate) : null;
  const borderColor = deathDate ? "0,0,0" : "0,255,255";

  const mother = getFullName(person.mother!);
  const father = getFullName(person.father!);
  const gender = person.gender === "female" ? "женский" : "мужской";
  let parentLastName: string | undefined = undefined;

  if (person.gender === "female") {
    if (person?.lastName !== person.father?.lastName) {
      parentLastName = person.father?.lastName && person.father.lastName;
    }
  }

  let zodiac = "";
  let chineseZodiac = "";

  let childId = " ";

  if (birthDate) {
    zodiac = calculateZodiacSign(birthDate);
    chineseZodiac = calculateChineseZodiac(birthDate);
  }
  if (typePerson === "child") {
    childId = person.id;
  }

  const openModal = () => {
    openModalFormat("edit", person.id);
  };

  const handleRejectChange = async () => {
    try {
      await rejectChanges(person.id).unwrap();
      onSuccess("Оk  удалено");
    } catch {
      setError("Ошибка удаления или персона уже удалена");
    } finally {
      refetchAll();
    }
  };

  const handleApplyChanges = async () => {
    try {
      await applyChanges(person.id).unwrap();
      onSuccess("Оk");
    } catch {
      setError("Ошибка сохранения или персона уже сохранена");
    } finally {
      refetchAll();
    }
  };
  const handleToggleLock = async (newLockedState: boolean) => {
    if (!person?.id) return;

    try {
      // Предполагается, что у вас есть мутация для обновления isLocked
      await updatePersonLock({
        personId: person.id,
        isLocked: newLockedState,
      }).unwrap();
    } catch {
      setError("Ошибка обновления блокировки");
    } finally {
      refetchAll();
    }
  };
  const handleDeletePerson = async (personId: string, personUserId: string) => {
    setConfirmDelete({
      isOpen: true,
      personId,
      loading: false,
    });
    setSearchParams(userId);
    if (personUserId === userId) {
      navigate("/");
    }
  };

  const handleConfirmDelete = async () => {
    if (!confirmDelete.personId) return;

    setConfirmDelete((prev) => ({ ...prev, loading: true }));

    try {
      await deletePerson(confirmDelete.personId).unwrap();

      onSuccess("Персона успешно удалена");
    } catch {
      setError("Не удалось удалить персону");
    } finally {
      refetchAll();
      setConfirmDelete({ isOpen: false, personId: null, loading: false });
    }
  };

  return (
    <>
      <Paper
        withBorder
        p="md"
        radius="md"
        style={{
          maxWidth: 320,
          maiWidth: 120,
          width: "100%",
          height: typePerson === "parent" && !isMobile ? heightCard : "100%",
          border: "2px,solid, rgba(235, 223, 223, 1)",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "rgb(250, 250, 250)",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <Stack
          gap="xs"
          style={{
            alignItems: "center",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <Group justify="center" align="flex-start">
            <div>
              {typePerson === "parent" && (
                <Button
                  style={{
                    backgroundColor: "rgba(235, 223, 223, 1)",
                    color: "rgba(90, 85, 85, 1)",
                    border: "1px solid rgba(201, 186, 186, 1) ",
                  }}
                  fullWidth
                  radius="md"
                  onClick={handleNavigateUp}
                >
                  <IconChevronUp width={50} />
                  родители
                  <IconChevronUp width={50} />
                </Button>
              )}

              <Title order={2}>{person.lastName || "Без фамилии"}</Title>

              {parentLastName && (
                <Title order={3}>{`(${parentLastName})`}</Title>
              )}

              <Title order={3}>{fullName || "Без имени"}</Title>
            </div>

            <PhotoGallery
              photoObjects={photos}
              borderColor={borderColor}

              // onPhotoAdd и onPhotoRemove можно добавить позже через пропсы
            />
          </Group>

          <Text size="lg" c="dimmed">
            {birthDate && `${birthDate.toLocaleDateString("ru-RU")}`}
            {deathDate && ` — ${deathDate.toLocaleDateString("ru-RU")}`}
          </Text>
          <Text size="md">{age && ` (${age} ${getAgeLabel(age)})`}</Text>

          {person.phone && <Text size="lg">📱 {person.phone}</Text>}

          {birthDate && (
            <>
              <Divider />
              <Stack align="center" gap="xs">
                <Text size="lg">
                  <b>Знак:</b> {zodiac}
                </Text>

                <Text size="lg">
                  <b>Год:</b> {chineseZodiac}
                </Text>
              </Stack>
            </>
          )}

          {typePerson === "parent" && isSpouses && (
            <Button
              style={{
                backgroundColor: "rgba(235, 223, 223, 1)",
                color: "rgba(90, 85, 85, 1)",
                border: "1px solid rgba(201, 186, 186, 1) ",
              }}
              fullWidth
              radius="md"
              onClick={() => onSpouseNavigate?.("next")}
            >
              {" "}
              <IconChevronLeft width={80} />
              <Text size="cm" ta="center">
                {spouseCount} брака
              </Text>
            </Button>
          )}

          {typePerson === "child" && (
            <Button
              style={{
                backgroundColor: "rgba(235, 223, 223, 1)",
                color: "rgba(90, 85, 85, 1)",
                border: "1px solid rgba(201, 186, 186, 1) ",
              }}
              fullWidth
              radius="lg"
              onClick={() => handleNavigateDown?.(childId)}
            >
              <IconChevronDown width={50} />
              дети
              <IconChevronDown width={50} />
            </Button>
          )}

          {user?.isAdmin && isEditCard && branch === "edit" && (
            <>
              <div>
                <Text fw={500} mb="xs">
                  Дополнительные данные
                </Text>
                <Stack gap="xs">
                  <Paper withBorder p="xs" radius="md">
                    <Group justify="space-between">
                      <Text>{`Пол: ${gender}`}</Text>
                      <Text>{`Мать: ${mother}`}</Text>
                      <Text>{`Отец: ${father}`}</Text>
                    </Group>
                  </Paper>
                </Stack>
              </div>

              <Button
                size="xs"
                variant="light"
                color="green"
                onClick={handleApplyChanges}
                loading={isLoading}
                mt="sm"
              >
                Применить
              </Button>
              <Button
                size="xs"
                variant="light"
                color="red"
                onClick={handleRejectChange}
                loading={isLoading}
                mt="sm"
              >
                Отклонить
              </Button>
            </>
          )}

          {user?.isAdmin && isMainEditCard && branch === "edit" && (
            <div>
              <Text fw={500} mb="xs">
                Дополнительные данные
              </Text>
              <Stack gap="xs">
                <Paper withBorder p="xs" radius="md">
                  <Group justify="space-between">
                    <Text>{`Пол: ${gender}`}</Text>
                    <Text>{`Мать: ${mother}`}</Text>
                    <Text>{`Отец: ${father}`}</Text>
                  </Group>
                </Paper>
              </Stack>
            </div>
          )}

          {!person?.isLocked && !isEditCard && branch === "edit" && (
            <Button
              size="xs"
              variant="light"
              color="red"
              onClick={openModal}
              mt="sm"
            >
              Редактировать
            </Button>
          )}

          {person?.isLocked && !isEditCard && branch === "edit" && (
            <Text>Заблокировано</Text>
          )}

          {user?.isSuperAdmin && !isEditCard && branch === "edit" && (
            <>
              <Button
                size="xs"
                variant="light"
                color="red"
                onClick={() =>
                  handleDeletePerson(person.id, person.userId ?? "")
                }
                mt="sm"
              >
                Удалить персону
              </Button>

              <Group gap="xs" mt="sm">
                <Checkbox
                  label={person?.isLocked ? "Разблокировать" : "Заблокировать"}
                  checked={!!person?.isLocked}
                  onChange={(event) => {
                    const newLockedState = event.currentTarget.checked;
                    handleToggleLock(newLockedState);
                  }}
                  disabled={!person}
                />
              </Group>
            </>
          )}
        </Stack>
      </Paper>
      <ConfirmModal
        opened={confirmDelete.isOpen}
        onClose={() =>
          setConfirmDelete({ isOpen: false, personId: null, loading: false })
        }
        onConfirm={handleConfirmDelete}
        title="Удаление персоны"
        message="Вы уверены, что хотите удалить эту персону? Это действие нельзя отменить!"
        confirmLabel="Удалить"
        cancelLabel="Отмена"
        loading={confirmDelete.loading}
      />
    </>
  );
}
