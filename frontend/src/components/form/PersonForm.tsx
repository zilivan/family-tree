import { useEffect } from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Select,
  Button,
  Group,
  Stack,
  Title,
  Divider,
  Alert,
  Text,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import PhotoGallery from "../ui/PhotoGallery";
import { PersonSearchSelect } from "./PersonSearchSelect";
import { SpouseSelector } from "./SpouseSelector";
import {
  useGetPersonQuery,
  useCreatePersonMutation,
  useUploadPersonMutation,
  useUploadPhotoMutation,
  useDeletePhotoMutation,
  useRestorePhotoMutation,
} from "../../api/personsApi";

import type { CreatePersonInput } from "../../api/personsApi";

interface PersonFormProps {
  mode: "create" | "edit" | "register";
  personId?: string;
  branch: string;
  onSuccess: (success: string) => void;
  setError: (errord: string) => void;
  onRegisters?: (payload: CreatePersonInput) => void;
  onCancel: () => void;
}

export function PersonForm({
  mode = "edit",
  personId,
  branch,
  onSuccess,
  setError,
  onRegisters,
  onCancel,
}: PersonFormProps) {
  let isEdit = false;
  let isCreate = false;
  let nameButton: string;

  switch (mode) {
    case "edit":
      isEdit = true;
      nameButton = "Сохранить";
      break;
    case "create":
      nameButton = "Создать";
      isCreate = true;
      break;
    case "register":
      nameButton = "Получить код подтверждения";
      break;
    default:
      nameButton = "Сохранить";
  }
  //const [isDirty, setIsDirty] = useState(false);
  const { data: existingPerson, refetch } = useGetPersonQuery(
    { id: personId!, branch: "base" },
    { skip: !isEdit || !personId },
  );

  const [createPerson] = useCreatePersonMutation();
  const [uploadPerson] = useUploadPersonMutation();
  const [uploadPhoto] = useUploadPhotoMutation();
  const [deletePhoto] = useDeletePhotoMutation();
  const [restorePhoto] = useRestorePhotoMutation();

  const photoObjects =
    existingPerson?.photos.map((p) => ({
      id: p.id,
      url: p.url,
      isDeleted: p.isDeleted,
    })) || [];

  let fatherFullName: string | undefined = undefined;
  let motherFullName: string | undefined = undefined;

  if (isEdit && existingPerson && existingPerson !== null) {
    if (
      existingPerson?.father?.lastName ||
      existingPerson?.father?.firstName ||
      existingPerson?.father?.patronymic
    ) {
      fatherFullName = `${existingPerson?.father?.lastName} ${existingPerson?.father?.firstName} ${existingPerson?.father?.patronymic} `;
    }
    if (
      existingPerson?.mother?.lastName ||
      existingPerson?.mother?.firstName ||
      existingPerson?.mother?.patronymic
    ) {
      motherFullName = `${existingPerson?.mother?.lastName} ${existingPerson?.mother?.firstName} ${existingPerson?.mother?.patronymic} `;
    }
  }

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      patronymic: "",
      birthDate: "",
      deathDate: "",
      gender: "male" as string | null,
      phone: "",
      fatherId: null as string | null,
      motherId: null as string | null,

      spouseIds: [] as string[],
    },
  });

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isEdit && existingPerson) {
      const initialEditValues = {
        firstName: existingPerson.firstName,
        lastName: existingPerson.lastName,
        patronymic: existingPerson.patronymic || "",
        birthDate: existingPerson.birthDate
          ? new Date(existingPerson.birthDate).toISOString().split("T")[0]
          : "",
        deathDate: existingPerson.deathDate
          ? new Date(existingPerson.deathDate).toISOString().split("T")[0]
          : "",
        gender: existingPerson.gender || "male",
        phone: existingPerson.phone || "",
        fatherId: existingPerson.fatherId,
        motherId: existingPerson.motherId,
        spouseIds: existingPerson.spouseIds || [],
        photos: existingPerson.photos.map((p) => p.url),
      };

      form.setInitialValues(initialEditValues);
      form.setValues(initialEditValues);
    }
  }, [isEdit, existingPerson]);

  const isDirty = form.isDirty();

  const handlePhotoRemove = async (photoId: string) => {
    if (!personId) return;

    try {
      await deletePhoto({ personId, photoId }).unwrap();
      await refetch();
    } catch (error) {
      console.error("Ошибка удаления фото:", error);
    }
  };

  const handlePhotoRestore = async (photoId: string) => {
    if (!personId) return;
    try {
      await restorePhoto({ personId, photoId }).unwrap();
      await refetch(); // обновить данные персоны
    } catch (error) {
      console.error("Ошибка восстановления фото:", error);
    }
  };

  const handlePhotoUpload = async (file: File): Promise<void> => {
    if (!personId) {
      throw new Error("Person ID is required for photo upload");
    }

    const id = personId;
    const formData = new FormData();
    formData.append("photo", file);

    try {
      await uploadPhoto({
        id,
        formData,
      }).unwrap();

      await refetch();
    } catch (error) {
      console.error("Ошибка загрузки фото:", error);
      throw new Error("Не удалось загрузить фото");
    }
  };

  // Заполняем форму при редактировании

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const payload: CreatePersonInput = {
        ...values,
      };

      if (mode === "edit") {
        // Обновление

        personId = personId ?? "";

        await uploadPerson({
          id: personId,
          data: payload,
        }).unwrap();
      }

      if (mode === "create") {
        // Создание
        await createPerson(payload).unwrap();
      }
      // Регистрация
      if (mode === "register" && onRegisters !== undefined) {
        onRegisters(payload);
      }
    } catch (error) {
      console.error("Ошибка сохранения:", error);
      setError("Ошибка сохранения");
    } finally {
      onSuccess("Персона отправлена на подтверждение администраторам");
    }
  };

  return (
    <Stack>
      <Title order={3}>
        {isEdit ? "Редактировать персону" : "Добавить персону"}
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {isCreate && (
            <Alert icon={<IconInfoCircle />} color="blue" title="Важно" mb="xs">
              <Text size="xs">
                Вы добавляете информацию о человеке. Убедитесь, что вы делаете
                это с его согласия. Эти данные будут видны только участникам
                вашего семейного древа.
              </Text>
            </Alert>
          )}
          {/* Основные данные */}
          <Group grow>
            <TextInput
              label="Фамилия"
              {...form.getInputProps("lastName")}
              required
            />
            <TextInput
              label="Имя"
              {...form.getInputProps("firstName")}
              required
            />
            <TextInput
              label="Отчество"
              {...form.getInputProps("patronymic")}
              required
            />
          </Group>

          <Group grow>
            <TextInput
              label="Дата рождения"
              type="date"
              {...form.getInputProps("birthDate")}
            />
            <TextInput
              label="Дата смерти"
              type="date"
              {...form.getInputProps("deathDate")}
            />
          </Group>

          <Select
            label="Пол"
            data={[
              { value: "male", label: "Мужской" },
              { value: "female", label: "Женский" },
            ]}
            {...form.getInputProps("gender")}
          />

          <TextInput label="Телефон" {...form.getInputProps("phone")} />

          <Divider my="sm" label="Семейные связи" />

          {/* Родители */}

          <PersonSearchSelect
            label="Отец"
            value={form.values.fatherId}
            onChange={(val) => form.setFieldValue("fatherId", val)}
            branch={branch}
            excludeIds={isEdit ? [personId!] : []}
            selectGender={"male"}
            showplaceholder={fatherFullName}
          />

          <PersonSearchSelect
            label="Мать"
            value={form.values.motherId}
            onChange={(val) => form.setFieldValue("motherId", val)}
            branch={branch}
            excludeIds={isEdit ? [personId!] : []}
            selectGender={"female"}
            showplaceholder={motherFullName}
          />

          <SpouseSelector
            value={form.values.spouseIds}
            onChange={(val) => form.setFieldValue("spouseIds", val)}
            branch={branch}
            excludeIds={isEdit ? [personId!] : []}
            gender={form.values.gender}
          />

          <Divider my="sm" label="Фотографии" />

          {/* Фото */}

          {mode === "edit" && (
            <PhotoGallery
              photoObjects={photoObjects}
              editable={true}
              onPhotoAdd={(data) => {
                handlePhotoUpload(data);
              }}
              onPhotoRemove={handlePhotoRemove}
              onPhotoRestore={handlePhotoRestore}
            />
          )}

          <Group justify="flex-start" mt="md">
            <Button variant="default" onClick={onCancel}>
              Отмена
            </Button>
            <Button type="submit" disabled={!isDirty}>
              {nameButton}
            </Button>
          </Group>
        </Stack>
      </form>
    </Stack>
  );
}
