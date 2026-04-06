// src/components/AddPersonForm.tsx
import { useState } from "react";
import { useForm } from "@mantine/form";
import { Button, TextInput, Select, Group, Text } from "@mantine/core";
import { useCreatePersonMutation } from "../../api/personsApi";

interface AddPersonFormProps {
  onSuccess: (personId: string) => void;
}

export function AddPersonForm({ onSuccess }: AddPersonFormProps) {
  const [createPerson] = useCreatePersonMutation();
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      patronymic: "",
      gender: "male" as const,
    },
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const result = await createPerson(values).unwrap();
      onSuccess(result.id);
      setErrorMessage(null);
    } catch (err: unknown) {
      let message = "Неизвестная ошибка";
      // Проверяем, что это ошибка RTK Query
      if (err && typeof err === "object" && "status" in err) {
        const error = err as {
          status: number;
          data: { error?: string; message?: string };
        };
        // Есть ответ от сервера
        if (error.data) {
          message = error.data.error || error.data.message || "Ошибка сервера";
        }
        // Ошибка сети
        else {
          message = "Нет подключения к серверу";
        }
      }
      setErrorMessage(message);
    }
  };

  return (
    <>
      {errorMessage && (
        <Text mb="sm" c="red">
          {errorMessage}
        </Text>
      )}
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Имя" {...form.getInputProps("firstName")} mb="sm" />
        <TextInput
          label="Фамилия"
          {...form.getInputProps("lastName")}
          mb="sm"
        />
        <TextInput
          label="Отчество"
          {...form.getInputProps("patronymic")}
          mb="sm"
        />
        <Select
          label="Пол"
          data={[
            { value: "male", label: "Мужской" },
            { value: "female", label: "Женский" },
          ]}
          {...form.getInputProps("gender")}
          mb="sm"
        />
        <Group justify="flex-end">
          <Button type="submit">Создать</Button>
        </Group>
      </form>
    </>
  );
}
