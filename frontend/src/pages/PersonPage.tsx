import { useParams } from "react-router-dom";
import { Title, Text } from "@mantine/core";

export default function PersonPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ padding: "2rem" }}>
      <Title order={2}>Карточка персоны</Title>
      <Text>ID персоны: {id || "не указан"}</Text>
      <Text>Здесь будет ФИО, фото, дата рождения, знаки и т.д.</Text>
    </div>
  );
}
