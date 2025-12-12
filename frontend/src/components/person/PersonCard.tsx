// src/components/person/PersonCard.tsx
import {
  Paper,
  Title,
  Text,
  Group,
  Stack,
  Divider,
  Button,
} from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import PhotoGallery from "../ui/PhotoGallery";
import {
  calculateZodiacSign,
  calculateChineseZodiac,
  calculateNumerology,
} from "../../utils/astrology";
import type { Person } from "../../types";

interface PersonCardProps {
  person: Person;
  currentUserId?: string | null; // ID авторизованного пользователя
  handleNavigateUp?: () => void;
  handleNavigateDown?: (childId: string) => void;
  typePerson: string;
}

export default function PersonCard({
  person,
  currentUserId,
  typePerson,
  handleNavigateUp,
  handleNavigateDown,
}: PersonCardProps) {
  const fullName = `${person.firstName} ${person.lastName}`.trim();

  const birthDate = person.birthDate ? new Date(person.birthDate) : null;
  const deathDate = person.deathDate ? new Date(person.deathDate) : null;

  const canEdit = currentUserId && person.userId === currentUserId;

  let zodiac = "";
  let chineseZodiac = "";
  let numerology = "";
  let childId = " ";

  if (birthDate) {
    zodiac = calculateZodiacSign(birthDate);
    chineseZodiac = calculateChineseZodiac(birthDate);
    numerology = calculateNumerology(birthDate).toString();
  }
  if (typePerson === "child") {
    childId = person.id;
  }
  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      style={{
        maxWidth: 320,
        width: "100%",
        border: "1px,solid, red",
        marginLeft: "auto",
        marginRight: "auto",
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
              <Button fullWidth radius="md" onClick={handleNavigateUp}>
                {" "}
                <IconChevronUp width={100} />
              </Button>
            )}

            <Title order={4}>{fullName || "Без имени"}</Title>
            <Text size="sm" c="dimmed">
              {birthDate?.toLocaleDateString("ru-RU")}
              {deathDate && ` — ${deathDate.toLocaleDateString("ru-RU")}`}
            </Text>
            {person.phone && <Text size="sm">📱 {person.phone}</Text>}
          </div>

          <PhotoGallery
            photoUrls={person.photoUrls.map((p) => p.url)}
            photoIds={person.photoUrls.map((p) => p.id)}
            personId={person.id}
            //editable={canEdit}
            // onPhotoAdd и onPhotoRemove можно добавить позже через пропсы
          />
        </Group>

        {birthDate && (
          <>
            <Divider />
            <Group gap="xs" wrap="nowrap">
              <Text size="sm">
                <b>Знак:</b> {zodiac}
              </Text>
              <Text size="sm">
                <b>Год:</b> {chineseZodiac}
              </Text>
              <Text size="sm">
                <b>Число:</b> {numerology}
              </Text>
              {typePerson === "child" && (
                <Button
                  fullWidth
                  radius="md"
                  onClick={() => handleNavigateDown?.(childId)}
                >
                  {" "}
                  <IconChevronDown width={100} />
                </Button>
              )}
            </Group>
          </>
        )}
      </Stack>
    </Paper>
  );
}
