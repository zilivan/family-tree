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
       <ScrollArea style={{ height: 1000 }}> 
      <div >
    
      <Group
        justify="center"
       
        style={{
          flexWrap: "nowrap",
          display: "flex",
        }}
      >
        {family.otherPartnersHusband.length !== 0 && (
          <ActionIcon style={{ backgroundColor: 'rgba(235, 223, 223, 1)',
          color :'rgba(90, 85, 85, 1)' , height: "200px", border: "1px solid rgba(201, 186, 186, 1) "}} onClick={() => handleNavigatePartner("left")}>
            <IconArrowLeft  />
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
          <ActionIcon  style={{ backgroundColor: 'rgba(235, 223, 223, 1)',
          color :'rgba(90, 85, 85, 1)' ,border: "1px solid rgba(201, 186, 186, 1) " }} onClick={() => handleNavigatePartner("right")}>
            <IconArrowRight />
          </ActionIcon>
        )}
        
        <></>
      </Group>
  </div>
      {/* Дети */}
      <div style={{ marginTop: "1rem", width: "100%" }}>
      { /* <ScrollArea style={{ height: 300 }}>*/}
          <Stack gap="md" style={{ alignItems: "center" }}>
            {family.children.map((child) => (
              <div
                key={child.id}
                style={{ position: "relative", marginTop: "10px" }}
              >
                <PersonCard
                  person={child}
                  typePerson="child"
                  handleNavigateDown={(childId) => handleNavigateDown(childId)}
                />
              </div>
            ))}
          </Stack>

      
    
      </div>
      </ScrollArea >
      
    </Stack>
  );
}
