// src/components/SpouseSelector.tsx
import { useState } from 'react';
import { 
  Button, 
  Group, 
  Stack, 
  Paper, 
  Text,
  ActionIcon,
  Modal 
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { PersonSearchSelect } from './PersonSearchSelect';
import { useGetPersonsFullNameQuery } from '../../api/personsApi';

interface SpouseSelectorProps {
  value: string[];           // текущие ID супругов
  onChange: (ids: string[]) => void; // обновление списка
  branch: string;
  excludeIds?: string[];     // исключить текущую персону из поиска
  gender?: 'male' | 'female'| undefined |null; // пол текущей персоны (для фильтрации)
}



export function SpouseSelector({
  value,
  onChange,
  branch,
  excludeIds = [],
  gender
}: SpouseSelectorProps) {
  const [opened, setOpened] = useState(false);
  const [selectedSpouse, setSelectedSpouse] = useState<string | null>(null);

  
  // Получение ФИО для отображения
const {  data = []  } = useGetPersonsFullNameQuery(
    {  ids: value, branch},
  );



  // Добавление супруга
  const handleAdd = () => {
    if (selectedSpouse && !value.includes(selectedSpouse)) {
      onChange([...value, selectedSpouse]);
    }
    setSelectedSpouse(null);
    setOpened(false);
  };

  // Удаление супруга
  const handleRemove = (spouseId: string) => {
    onChange(value.filter(id => id !== spouseId));
  };

  



  

  return (
    <div>
      <Text fw={500} mb="xs">Супруги</Text>
      
      {/* Список выбранных */}
      {data.length > 0 ? (
        <Stack gap="xs">
          {data.map((spouseId) => (
            <Paper key={spouseId.id} withBorder p="xs" radius="md">
              <Group justify="space-between">
                <Text>{`${spouseId.lastName} ${spouseId.firstName} ${spouseId.patronymic || ''}`.trim()}</Text>
                <ActionIcon 
                  color="red" 
                  variant="subtle"
                  onClick={() => handleRemove(spouseId.id)}
                >
                  <IconX size={16} />
                </ActionIcon>
              </Group>
            </Paper>
          ))}
        </Stack>
      ) : (
        <Text c="dimmed" size="sm">Нет выбранных супругов</Text>
      )}

      {/* Кнопка добавления */}
      <Button 
        mt="sm" 
        variant="outline" 
        onClick={() => setOpened(true)}
      >
        + Добавить супруга
      </Button>

      {/* Модалка */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Выберите супруга"
        size="lg"
      >
        <Stack>
          <PersonSearchSelect
            label={gender === 'male' ? 'Жена' : 'Муж'}
            value={selectedSpouse}
            onChange={setSelectedSpouse}
            branch={branch}
            excludeIds={excludeIds}
      
             selectGender={gender === 'male' ? 'female' : 'male'}
          />
          
          <Group justify="flex-end">
            <Button variant="default" onClick={() => setOpened(false)}>
              Отмена
            </Button>
            <Button 
              disabled={!selectedSpouse}
              onClick={handleAdd}
            >
              Добавить
            </Button>
          </Group>
        </Stack>
      </Modal>
    </div>
  );
}