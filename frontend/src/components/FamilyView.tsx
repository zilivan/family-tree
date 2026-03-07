import { useState } from "react";
import { Button, Modal } from "@mantine/core";
import { FamilyTreeMap } from "./FamilyTreeMap";
import { useGetFamilyTreeDataQuery } from "../api/personsApi";

interface FamilyViewProps {
  onChange: (personId: string) => void;
}

export function FamilyView({ onChange }: FamilyViewProps) {
  const [isTreeOpen, setIsTreeOpen] = useState(false);

  const { data, isLoading, error } = useGetFamilyTreeDataQuery(undefined, {
    skip: !isTreeOpen,
  });

  const handleCloseTree = () => {
    setIsTreeOpen(false);
  };

  return (
    <>
      {/* Основной интерфейс */}
      <Button onClick={() => setIsTreeOpen(true)} variant="outline">
        🌳 Визуализация семейного дерева
      </Button>

      {/* Модальное окно с картой */}
      <Modal
        opened={isTreeOpen}
        onClose={() => setIsTreeOpen(false)}
        fullScreen
        title="Семейное дерево"
      >
        {isLoading ? (
          <div>Загрузка данных...</div>
        ) : error ? (
          <div>Ошибка загрузки</div>
        ) : data ? (
          <FamilyTreeMap
            persons={data.persons}
            marriages={data.marriages}
            onClose={handleCloseTree}
            onPersonClick={(personId) => onChange(personId)}
          />
        ) : null}
      </Modal>
    </>
  );
}
