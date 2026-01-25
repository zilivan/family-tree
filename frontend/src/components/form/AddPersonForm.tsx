// src/components/AddPersonForm.tsx
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { Button, TextInput, Select, Group,Text } from '@mantine/core';
import { useCreatePersonMutation } from '../../api/personsApi';

interface AddPersonFormProps {
  onSuccess: (personId: string) => void;
}

export function AddPersonForm({ onSuccess }: AddPersonFormProps) {
  const [createPerson] = useCreatePersonMutation();
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      patronymic: '',
      gender: 'male' as const,
    },
  });
const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const result = await createPerson(values).unwrap();
      onSuccess(result.id);
      setErrorMessage(null);
    } catch (err:any){

  let message = 'Неизвестная ошибка';

  // Ошибка от бэкенда (HTTP 4xx/5xx)
  if (err.data?.error) {
    message = err.data.error;
  } else if (err.data?.message) {
    message = err.data.message;
  } 
  // Ошибка сети
  else if (err.message) {
    message = 'Нет подключения к серверу';
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
       
      <TextInput label="Имя" {...form.getInputProps('firstName')} mb="sm" />
      <TextInput label="Фамилия" {...form.getInputProps('lastName')} mb="sm" />
      <TextInput label="Отчество" {...form.getInputProps('patronymic')} mb="sm" />
      <Select
        label="Пол"
        data={[
          { value: 'male', label: 'Мужской' },
          { value: 'female', label: 'Женский' },
        ]}
        {...form.getInputProps('gender')}
        mb="sm"
      />
      <Group justify="flex-end">
        <Button type="submit">Создать</Button>
      </Group>
    </form>
    </>
  );
}