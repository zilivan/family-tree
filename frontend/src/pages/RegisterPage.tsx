import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button, Title, Group, Alert } from '@mantine/core';
import { useRequestCodeMutation } from '../api/authApi';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState(''); // отчество (опционально)
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [requestCode, { isLoading }] = useRequestCodeMutation();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email) {
      setError('Имя, фамилия и email обязательны');
      return;
    }

   /* try {
      // Передаём ФИО + email на бэкенд
     

      setSuccess(true);
      setError(null);
    } catch (err: any) {
      setError(err.data?.error || 'Ошибка при отправке кода');
    }*/
  };

  if (success) {
    return (
      <div style={{ maxWidth: 400, margin: '2rem auto', padding: '0 1rem' }}>
        <Title order={2} mb="md">Код отправлен</Title>
        <p>Мы отправили код подтверждения на <strong>{email}</strong></p>
        <Button fullWidth mt="md" onClick={() => navigate('/login')}>
          Перейти к входу
        </Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '0 1rem' }}>
      <Title order={2} mb="md">Регистрация</Title>

      {error && <Alert color="red" mb="md">{error}</Alert>}

      <TextInput
        label="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        mb="sm"
      />
      <TextInput
        label="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        mb="sm"
      />
      <TextInput
        label="Отчество (необязательно)"
        value={patronymic}
        onChange={(e) => setPatronymic(e.target.value)}
        mb="sm"
      />
      <TextInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb="md"
      />

      <Button fullWidth onClick={handleSubmit} loading={isLoading}>
        Получить код подтверждения
      </Button>
    </div>
  )};
