import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Title, Alert, Group } from "@mantine/core";
import { PersonForm } from "../components/form/PersonForm";
import type { CreatePersonInput } from "../api/personsApi";
import { API_BASE_URL } from "../lib/apiConfig";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  const handleSubmit = async (payload: CreatePersonInput) => {
    const { firstName, lastName, patronymic } = payload;
    if (!firstName || !lastName || !patronymic || !email) {
      setError("Имя, фамилия, отчество и email обязательны");

      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, email }),
      });
      const data: { message?: string; status: string; error?: string } =
        await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Неверные данные");
      }

      if (["PENDING", "CONFIRMED"].includes(data.status)) {
        setSuccess(data.status);
      }
    } catch (err: unknown) {
      let message = "Неизвестная ошибка";

      if (err && typeof err === "object") {
        const error = err as {
          status: number;
          data: { error?: string; message?: string };
        };
        if (error.data) {
          message = error.data.message || "Ошибка сервера";
        } else {
          message = "Ошибка при отправке данных";
        }
      }

      setError(message);
    }
  };
  if (error) {
    return (
      <div style={{ maxWidth: 400, margin: "2rem auto", padding: "0 1rem" }}>
        <Title order={2} mb="md">
          Ошибка заполнения данных
        </Title>
        <Button fullWidth mt="md" onClick={() => navigate("/login")}>
          Повторить регистрацию
        </Button>
      </div>
    );
  }
  if (success === "CONFIRMED") {
    return (
      <div style={{ maxWidth: 400, margin: "2rem auto", padding: "0 1rem" }}>
        <Title order={2} mb="md">
          Запрос принят
        </Title>

        <p>
          Мы отправили код подтверждения на почту: <strong>{email}</strong>
        </p>
        <Button fullWidth mt="md" onClick={() => navigate("/login")}>
          Перейти к входу
        </Button>
      </div>
    );
  }
  if (success === "PENDING") {
    return (
      <div style={{ maxWidth: 400, margin: "2rem auto", padding: "0 1rem" }}>
        <Title order={2} mb="md">
          Запрос отправлен
        </Title>
        <p>Мы отправили запрос на подтверждение администратору</p>
        <p>
          После подтверждения код будет отправлен на почту:{" "}
          <strong>{email}</strong>
        </p>
        <Button fullWidth mt="md" onClick={() => navigate("/login")}>
          Перейти к входу
        </Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: "0 1rem" }}>
      <Group justify="space-between" align="center">
        <Title order={2} mb="md">
          Регистрация
        </Title>
        <Button variant="subtle" color="red" size="xs" onClick={handleLogout}>
          Выйти
        </Button>
      </Group>
      {success && (
        <Alert color="green" mb="md">
          {success}
        </Alert>
      )}
      {error && (
        <Alert color="red" mb="md">
          {error}
        </Alert>
      )}

      <TextInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb="md"
        required
      />
      <PersonForm
        onSuccess={(success) => setSuccess(success)}
        setError={(error) => setError(error)}
        onRegisters={(payload) => {
          handleSubmit(payload);
        }}
        onCancel={handleLogout}
        branch={"edit"}
        mode={"register"}
      />
    </div>
  );
}
