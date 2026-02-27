import { Title, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/main");
  };

  return (
    <div>
      <Title>Страница ненайдена</Title>
      <Text>Ошибка перехода</Text>
      <Button variant="subtle" color="green" size="xs" onClick={handleBack}>
        Выйти
      </Button>
    </div>
  );
}
