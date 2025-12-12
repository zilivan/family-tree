// src/pages/FamilyViewPage.tsx
import { useState } from "react";
import { Stack, Group, ScrollArea, ActionIcon } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import PersonCard from "../components/person/PersonCard";
import { mockFamilyNode } from "../mocks/familyData";

export default function FamilyViewPage() {
  const [family] = useState(mockFamilyNode);

  // Логика навигации — временно заглушки
  const handleNavigateUp = () => {
    alert("Переход к родителям");
    // TODO: вызов API для загрузки семьи с parentId
  };

  const handleNavigateDown = (childId: string) => {
    alert(`Переход к семье ребёнка ${childId}`);
    // TODO: вызов API для загрузки семьи по childId
  };

  const handleNavigatePartner = (direction: "left" | "right") => {
    alert(`Переключение партнёра: ${direction}`);
    // TODO: логика смены wife/husband при нескольких браках
  };

  console.log(family.otherPartnersWife);
  console.log(family.otherPartnersHusband);

  return (
    <Stack
      p="md"
      style={{
        minHeight: "100vh",
        alignItems: "center", // ← ВСЁ по центру по горизонтали
      }}
    >
      {/* Верхняя панель — заглушка */}
      <div
        style={{
          position: "sticky",
          top: 0,
          background: "white",
          zIndex: 10,
          padding: "8px 0",
        }}
      >
        <div>🔍 Поиск | 📂 Выбор базы | ➕ Добавить</div>
      </div>

      {/* Супруги */}
      <Group
        justify="center"
        gap="ms"
        style={{
          flexWrap: "nowrap",
          display: "flex",
          border: "2px, green, solid",
        }}
      >
        {family.otherPartnersHusband.length !== 0 && (
          <ActionIcon onClick={() => handleNavigatePartner("left")}>
            <IconArrowLeft />
          </ActionIcon>
        )}

        {family.husband && (
          <PersonCard
            person={family.husband}
            handleNavigateUp={handleNavigateUp}
            typePerson="parent"
          />
        )}

        {family.wife && (
          <PersonCard
            person={family.wife}
            handleNavigateUp={handleNavigateUp}
            typePerson="parent"
          />
        )}

        {family.otherPartnersWife.length !== 0 && (
          <ActionIcon onClick={() => handleNavigatePartner("right")}>
            <IconArrowRight />
          </ActionIcon>
        )}
        <></>
      </Group>

      {/* Дети */}
      <div style={{ marginTop: "1rem", width: "100%" }}>
        <ScrollArea style={{ height: 300 }}>
          <Stack gap="md" style={{ alignItems: "center" }}>
            {family.children.map((child) => (
              <div key={child.id} style={{ position: "relative" }}>
                <PersonCard
                  person={child}
                  typePerson="child"
                  handleNavigateDown={(childId) => handleNavigateDown(childId)}
                />
              </div>
            ))}
          </Stack>
        </ScrollArea>
      </div>
    </Stack>
  );
}
