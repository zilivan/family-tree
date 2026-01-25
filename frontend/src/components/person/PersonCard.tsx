// src/components/person/PersonCard.tsx


import { useApplyPersonChangesMutation } from "../../api/adminApi";
import  {useAuth} from "../../contexts/AuthContext"

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
} from "../../utils/astrology";
import type { Person } from "../../types";

interface PersonCardProps {
  person: Person;
  currentUserId?: string | null; // ID авторизованного пользователя
  handleNavigateUp?: () => void;
  openModalFormat:(volue: string,personId:string) => void;
  handleNavigateDown?: (childId: string) => void;
  typePerson: 'parent' | 'child';
  isMobile:Boolean;
   branch?: string;
}

export default function PersonCard({
  person,
  // currentUserId,
  typePerson,
  isMobile,
  handleNavigateUp,
   openModalFormat,
  handleNavigateDown,
  branch,
}: PersonCardProps) {
 const { user } = useAuth();
  const [applyChanges, { isLoading }] = useApplyPersonChangesMutation();

  function calculateAge(birthDate: Date, deathDate?: Date): number {
    const today = deathDate ? new Date(deathDate) : new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  }
  function getAgeLabel(age: number): string {
    if (age % 100 >= 11 && age % 100 <= 14) {
      return "лет";
    }
    switch (age % 10) {
      case 1:
        return "год";
      case 2:
      case 3:
      case 4:
        return "года";
      default:
        return "лет";
    }
  }


  const fullName = `${person.firstName} ${person.patronymic}`.trim();

  const birthDate = person.birthDate ? new Date(person.birthDate) : undefined; // убедитесь, что это Date
  const deathDate = person.deathDate ? new Date(person.deathDate) : undefined;
  const age = birthDate ? calculateAge(birthDate, deathDate) : null;
  const borderColor = deathDate ? "0,0,0" : "0,255,255";

  //const canEdit = currentUserId && person.userId === currentUserId;

  let zodiac = "";
  let chineseZodiac = "";

  let childId = " ";

  if (birthDate) {
    zodiac = calculateZodiacSign(birthDate);
    chineseZodiac = calculateChineseZodiac(birthDate);
  }
  if (typePerson === "child") {
    childId = person.id;
  }
  const openModal = ()=>  { openModalFormat("edit",person.id) 


  }
const handleApplyChanges = async () => {
    if (window.confirm('Применить изменения в основную базу?')) {
      try {
        await applyChanges(person.id).unwrap();
        // Опционально: обновить дерево
      } catch (error) {
        console.error('Ошибка:', error);
      }
    }
  };

  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      style={{
        maxWidth: 320,
        maiWidth: 120,
        width: "100%",
        height:(typePerson === "parent" && !isMobile) ? '700px' : '100%',
        border: "2px,solid, rgba(235, 223, 223, 1)",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgb(250, 250, 250)",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",

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
              <Button
                style={{
                  backgroundColor: "rgba(235, 223, 223, 1)",
                  color: "rgba(90, 85, 85, 1)",
                  border: "1px solid rgba(201, 186, 186, 1) ",
                }}
                fullWidth
                radius="md"
                onClick={handleNavigateUp}
              >
                {" "}
                <IconChevronUp width={100} />
              </Button>
            )}



            <Title order={2}>{person.lastName || "Без фамилии"}</Title>

           {person.parentLastName &&  <Title order={3}>{`(${person.parentLastName})`}</Title>}

            <Title order={3}>{fullName || "Без имени"}</Title>
          </div>

          <PhotoGallery
            photoUrls={person.photos.map((p) => p.url)}
            photoIds={person.photos.map((p) => p.id)}
            personId={person.id}
            borderColor={borderColor}
            //editable={canEdit}
            // onPhotoAdd и onPhotoRemove можно добавить позже через пропсы
        
          />
        </Group>



        <Text size="lg" c="dimmed">
          {birthDate && `${birthDate.toLocaleDateString("ru-RU")}`}
          {deathDate && ` — ${deathDate.toLocaleDateString("ru-RU")}`}

       
        </Text>
 <Text size="md">
   {age && ` (${age} ${getAgeLabel(age)})`}
 </Text>



        {person.phone && <Text size="lg">📱 {person.phone}</Text>}

        {birthDate && (
          <>
            <Divider />
            <Stack align="center" gap="xs">
              <Text size="lg">
                <b>Знак:</b> {zodiac}
              </Text>

              <Text size="lg">
                <b>Год:</b> {chineseZodiac}
              </Text>
               </Stack>
</>)}
  



              {typePerson === "child" && (
                <Button
                  style={{
                    backgroundColor: "rgba(235, 223, 223, 1)",
                    color: "rgba(90, 85, 85, 1)",
                    border: "1px solid rgba(201, 186, 186, 1) ",
                  }}
                  fullWidth
                  radius="lg"
                  onClick={() => handleNavigateDown?.(childId)}
                >
                  {" "}
                  <IconChevronDown width={100} />
                </Button>
              )}


 {user?.isAdmin && branch === 'edit' && (
        <Button
          size="xs"
          variant="light"
          color="green"
          onClick={handleApplyChanges}
          loading={isLoading}
          mt="sm"
        >
          Применить
        </Button>
      )}
      { branch === 'edit' && (
        <Button
          size="xs"
          variant="light"
          color="red"
          onClick={openModal}
          mt="sm"
        >
         Редактировать
        </Button>
      )}
 




           
         
       
      </Stack>
    </Paper>
  );
}
