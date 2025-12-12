import { Title, Text } from "@mantine/core";

export default function LoginPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <Title order={2}>Вход в систему</Title>
      <Text>Здесь будет форма входа по email с кодом подтверждения.</Text>
    </div>
  );
}
