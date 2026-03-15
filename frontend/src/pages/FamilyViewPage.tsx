// src/pages/FamilyViewPage.tsx
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Stack,
  Group,
  ScrollArea,
  Select,
  Button,
  Modal,
  Paper,
  Alert,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import PersonCard from "../components/person/PersonCard";
import { PersonSearchSelect } from "../components/form/PersonSearchSelect";
import { PersonForm } from "../components/form/PersonForm";
import { FamilyView } from "../components/FamilyView";

import { useMediaQuery } from "@mantine/hooks";
import { useGetFamilyQuery } from "../api/personsApi";
import type { Person } from "../types/index";

interface FamilyViewPageProps {
  isAnonymous: boolean;
  isBlocked: boolean;
  userId: string;
}

export default function FamilyViewPage({
  isAnonymous = false,
  isBlocked = false,
  userId,
}: FamilyViewPageProps) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const branch = searchParams.get("branch") || "base";
  const isMobile = useMediaQuery("(max-width: 599px)");

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const personId = searchParams.get("personId") || userId;

  let isSpouses = false;

  const [searchQuery, setSearchQuery] = useState("");
  const [mode, setMode] = useState<"create" | "edit">("create");

  const handleSelectPerson = (id: string | null) => {
    if (id === null) {
      return;
    }
    setSearchParams({ personId: id });
    setSearchQuery("");
  };
  console.log("personId :", personId);
  console.log("userId :", userId);

  const {
    data: baseFamily,
    isLoading: isLoadingBase,
    error: errorBase,
    refetch: refetchBaseFamily,
  } = useGetFamilyQuery(
    { personId: personId ?? "", branch: "base" },
    { skip: !personId },
  );

  const spousenId =
    searchParams.get("spousenId") || baseFamily?.spouses[0]?.id || null;
  const currentSpoused =
    baseFamily?.spouses?.find((s) => s.id === spousenId) ?? null;
  const currentSpouseIndex =
    baseFamily?.spouses?.findIndex((s) => s.id === spousenId) ?? -1;

  const {
    data: editFamily,
    isLoading: isLoadingEdit,
    error: errorEdit,
    refetch: refetchEditFamily,
  } = useGetFamilyQuery(
    { personId: personId ?? "", branch: "edit" },
    { skip: branch !== "edit" || !personId },
  );

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const refetchAll = (deletePersonId?: string) => {
    if (deletePersonId === userId) {
      console.log("самоудаление юзера")
      setSearchParams({ personId: "" });
      navigate("/login");
    } else if (deletePersonId === personId) {
       console.log("удаление персоны редактируемой")
      setSearchParams({ personId: userId });
    }
     console.log("удаление персоны простой")
    refetchEditFamily();
    refetchBaseFamily();
  };

  if (!personId) {
    return (
      <Stack p="md" align="center">
        <div> "Персона не загружена"</div>
        <PersonSearchSelect
          value={searchQuery}
          onChange={(val) => handleSelectPerson(val)}
          branch={branch}
          excludeIds={[personId!]}
          selectGender={"all"}
          showSearchIcon={true}
          showplaceholder={"Поиск по имени или фамилии"}
        />
        <FamilyView onChange={(personId) => handleSelectPerson(personId)} />
      </Stack>
    );
  }

  const handleBranchChange = (value: string | null) => {
    if (isAnonymous) return setError("Только просмотр, пройдите регистрацию");
    if (isBlocked)
      return setError(
        "Только просмотр вы заблокированны обратитесь к администратору",
      );
    if (value) {
      setSearchParams({ personId, branch: value });
    }
  };
  const openModalFormat = (value: string | null, personId: string | null) => {
    if (value === "create") {
      setMode(value);
      setIsAddModalOpen(true);
    }
    if (value === "edit" && personId !== null) {
      setMode(value);
      setIsAddModalOpen(true);
      setCurrentUserId(personId);
    }
  };

  const handleAddSuccess = (success: string) => {
    setIsAddModalOpen(false);
    setSuccess(success);
  };

  const handleNavigateTo = (
    targetPersonId: string | null | undefined,
    targetSpousenId: string | null | undefined,
  ) => {
    if (!targetPersonId) return setError("Нет данных о персоне!");

    const params: Record<string, string> = { personId: targetPersonId, branch };
    if (targetSpousenId) {
      params.spousenId = targetSpousenId;
    }
    setSearchParams(params);
  };

  const handleNavigatePartner = (direction: "prev" | "next") => {
    if (!baseFamily?.spouses || baseFamily.spouses.length <= 1) return;
    if (currentSpouseIndex === -1) return;

    const spouses = baseFamily.spouses;
    const newIndex =
      direction === "prev"
        ? (currentSpouseIndex - 1 + spouses.length) % spouses.length
        : (currentSpouseIndex + 1) % spouses.length;

    setSearchParams({ personId, branch, spousenId: spouses[newIndex].id });
  };

  const getCommonChildren = (
    person: Person | null,
    personSpousened: Person | null,
  ): Person[] => {
    if (!person) return [];

    // Защита от undefined
    const safeChildrenAsFather = person.childrenAsFather || [];
    const safeChildrenAsMother = person.childrenAsMother || [];

    const personChildren =
      person.gender === "male"
        ? safeChildrenAsFather
        : person.gender === "female"
          ? safeChildrenAsMother
          : [...safeChildrenAsFather, ...safeChildrenAsMother];

    if (!personSpousened) return personChildren;

    // Защита для супруга
    const spouseChildren =
      personSpousened.gender === "male"
        ? personSpousened.childrenAsFather || []
        : personSpousened.gender === "female"
          ? personSpousened.childrenAsMother || []
          : [
              ...(personSpousened.childrenAsFather || []),
              ...(personSpousened.childrenAsMother || []),
            ];

    const spouseChildIds = new Set(spouseChildren.map((child) => child.id));

    return personChildren.filter(
      (child) => child.id && spouseChildIds.has(child.id),
    );
  };

  // Загрузка
  if (isLoadingBase || (branch === "edit" && isLoadingEdit)) {
    return <div>Загрузка...</div>;
  }

  if (errorBase) return <div>Ошибка загрузки основной базы</div>;

  if (branch === "edit" && errorEdit) {
    const value = "base";
    return (
      <>
        <div>Ошибка загрузки редактируемой базы</div>
        <Button
          onClick={() => {
            handleBranchChange(value);
          }}
        >
          Вернутьса к основной базе
        </Button>
      </>
    );
  }

  if (!baseFamily) return <div>Персона не найдена в основной базе</div>;

  // Текущие данные для отображения

  const currentFamily = baseFamily;
  const currentPerson = currentFamily.currentPerson;
  const currentEditFamily = editFamily;
  const currentEditPerson = currentEditFamily?.currentPerson;

  const allSpouses = [
    ...(currentFamily.spouses.map((m) => m) || []), // партнеры
  ] as Person[];

  if (allSpouses.length > 1) {
    isSpouses = true;
  }

  // Дети из текущей версии
  const children = getCommonChildren(currentPerson, currentSpoused);

  return (
    <Stack p="md" style={{ minHeight: "100vh", alignItems: "center" }}>
      {/* Верхняя панель */}
      <div
        style={{
          position: "sticky",
          top: 0,
          background: "white",
          zIndex: 10,
          padding: "8px 0",
          width: "100%",
          maxWidth: 800,
        }}
      >
        {success && (
          <Alert
            color="green"
            mb="md"
            onClose={() => setSuccess("")}
            withCloseButton
          >
            {success}
          </Alert>
        )}

        {error && (
          <Alert
            color="red"
            mb="md"
            onClose={() => setError("")}
            withCloseButton
          >
            {error}
          </Alert>
        )}

        <Group justify="center" mb="lg">
          <PersonSearchSelect
            value={searchQuery}
            onChange={(val) => handleSelectPerson(val)}
            branch={branch}
            excludeIds={[personId!]}
            selectGender={"all"}
            showSearchIcon={true}
            showplaceholder={"Поиск по имени или фамилии"}
          />
          <FamilyView onChange={(personId) => handleSelectPerson(personId)} />

          <Select
            label=""
            data={[
              { value: "base", label: "Основная база" },
              { value: "edit", label: "Редактируемая база" },
            ]}
            value={branch}
            onChange={handleBranchChange}
            styles={{ input: { textAlign: "center" } }}
          />
          {branch === "edit" && (
            <Button
              leftSection={<IconPlus size={16} />}
              onClick={() => {
                openModalFormat("create", null);
              }}
            >
              Добавить
            </Button>
          )}
        </Group>
      </div>

      <ScrollArea style={{ height: "calc(100vh - 20px)", width: "100%" }}>
        {/* РОДИТЕЛИ (из текущей версии) */}

        {/* ПЕРСОНА */}
        <Paper
          radius="md"
          p="xs"
          withBorder
          style={{
            backgroundColor:
              branch === "edit" ? "rgba(255, 255, 220, 0.7)" : "white",
            marginBottom: "1rem",
          }}
        >
          <Group
            justify="center"
            style={{
              flexWrap: "nowrap",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
              gap: isMobile ? "1.5rem" : "0.5rem",
            }}
          >
            <PersonCard
              person={currentPerson}
              refetchAll={(personId) => refetchAll(personId)}
              onSuccess={(success) => setSuccess(success)}
              setError={(error) => setError(error)}
              typePerson="parent"
              isMainEditCard={true}
              isMobile={isMobile}
              openModalFormat={(value, personId) =>
                openModalFormat(value, personId)
              }
              handleNavigateUp={() =>
                handleNavigateTo(
                  currentPerson.father?.id,
                  currentPerson.mother?.id,
                )
              }
              onSpouseNavigate={(direction) => handleNavigatePartner(direction)}
              spouseCount={allSpouses.length}
              branch={branch}
              isSpouses={isSpouses}
            />
            {/* ПЕРСОНА   В РЕДАКТОРЕ */}
            {branch === "edit" && currentEditPerson && (
              <PersonCard
                person={currentEditPerson}
                currentPersonPhoto={currentPerson.photos}
                refetchAll={(personId) => refetchAll(personId)}
                onSuccess={(success) => setSuccess(success)}
                setError={(error) => setError(error)}
                isEditCard={true}
                typePerson="parent"
                isMobile={isMobile}
                openModalFormat={(value, personId) =>
                  openModalFormat(value, personId)
                }
                handleNavigateUp={() =>
                  handleNavigateTo(
                    currentEditPerson.father?.id,
                    currentEditPerson.mother?.id,
                  )
                }
                onSpouseNavigate={(direction) =>
                  handleNavigatePartner(direction)
                }
                spouseCount={allSpouses.length}
                branch={branch}
                isSpouses={isSpouses}
              />
            )}

            {/* СУПРУГИ */}
            {currentSpoused && (
              <PersonCard
                person={currentSpoused}
                onSuccess={(success) => setSuccess(success)}
                setError={(error) => setError(error)}
                refetchAll={(personId) => refetchAll(personId)}
                handleNavigateUp={() =>
                  handleNavigateTo(
                    currentSpoused.fatherId,
                    currentSpoused.motherId,
                  )
                }
                typePerson="parent"
                isMobile={isMobile}
                openModalFormat={(value, personId) =>
                  openModalFormat(value, personId)
                }
                branch={branch}
              />
            )}
          </Group>
        </Paper>

        {/* ДЕТИ */}
        <div style={{ width: "100%" }}>
          <Stack gap="md" style={{ alignItems: "center" }}>
            {children.map((child) => (
              <Paper
                key={child.id}
                radius="md"
                p="xs"
                withBorder
                style={{
                  backgroundColor:
                    branch === "edit" ? "rgba(255, 255, 220, 0.7)" : "white",
                  width: "100%",
                  maxWidth: 300,
                }}
              >
                <PersonCard
                  person={child}
                  onSuccess={(success) => setSuccess(success)}
                  setError={(error) => setError(error)}
                  refetchAll={(personId) => refetchAll(personId)}
                  typePerson="child"
                  isMobile={isMobile}
                  openModalFormat={(value, personId) =>
                    openModalFormat(value, personId)
                  }
                  handleNavigateDown={() => handleNavigateTo(child.id, null)}
                  branch={branch}
                />
              </Paper>
            ))}
          </Stack>
        </div>
      </ScrollArea>

      {/* Модалка добавления */}
      <Modal
        opened={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Добавить персону"
        size="lg"
      >
        <PersonForm
          onSuccess={(success) => handleAddSuccess(success)}
          setError={(error) => setError(error)}
          onCancel={() => setIsAddModalOpen(false)}
          personId={currentUserId}
          branch={"edit"}
          mode={mode}
        />
      </Modal>
    </Stack>
  );
}
