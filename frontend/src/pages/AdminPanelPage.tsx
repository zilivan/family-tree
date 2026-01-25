// src/pages/AdminPanelPage.tsx
import { useState } from 'react';
import {
  Container,
  Title,
  Paper,
  Group,
  Text,
  Button,
  Badge,
  Alert,
  Tabs,
  Stack,
} from '@mantine/core';
import {
  IconCheck,
  IconAlertCircle,
  IconUser,
  IconEdit,
  IconUsers,
} from '@tabler/icons-react';
import {
  useGetPendingPersonsQuery,
  useConfirmPersonMutation,
  useGetUsersQuery,
  useGetEditPersonsQuery,
  useApplyPersonChangesMutation,
  useRejectPersonChangesMutation,
} from '../api/adminApi';

export default function AdminPanelPage() {

 /*   useEffect(() => {
   

  }, [useApplyPersonChangesMutation ,useRejectPersonChangesMutation,useConfirmPersonMutation ]);
*/

  const { 
    data: pendingPersons = [], 
    isLoading: isLoadingPending, 
    refetch: refetchPending 
  } = useGetPendingPersonsQuery();
  
  const { 
    data: users = [], 
    isLoading: isLoadingUsers,
     refetch:refetchUsers
  } = useGetUsersQuery();

const { 
   data:editPersons = [], 
  isLoading: isLoadingEdit,
   refetch:refetchEdit
} = useGetEditPersonsQuery();


  const [confirmPerson, { isLoading: isConfirming }] = useConfirmPersonMutation();
  const [activeTab, setActiveTab] = useState<string | null>('pending');

 const [applyChanges] = useApplyPersonChangesMutation();
 const [rejectChanges] = useRejectPersonChangesMutation();
const refetchAll = () => {
  refetchPending();
  refetchUsers();
  refetchEdit();
};


  const handleConfirm = async (personId: string) => {
    
    try {
      await confirmPerson(personId).unwrap();
     refetchAll(); 
    } catch (error) {
      console.error('Ошибка подтверждения:', error);
    }
  };



const handleApply = async (personId: string) => {
  

    try {
   const data = await applyChanges(personId).unwrap(); // ← .unwrap() выбросит ошибку при 4xx/5xx
    // Успех: можно показать уведомление
   
  console.log("Оk применения:",data);
  refetchAll();
  } catch (error: any) {
    // Ошибка: получаем сообщение от бэкенда
    //const errorMessage = error?.data?.error || 'Не удалось применить изменения';
  
    console.error('Ошибка применения:', error);
  }

}; 


const handleReject = async (personId: string) => {
 
   try {
    await rejectChanges(personId).unwrap();
    console.log("Оk удалено:");
    refetchAll();
    
  } catch (error: any) {

    //const errorMessage = error?.data?.error || 'Не удалось отклонить изменения';
   
    console.error('Ошибка отклонения:', error);
  }

  }



  return (
    <Container size="lg" py="xl">
      <Title order={2} mb="lg">Админ-панель</Title>

      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
  <Tabs.Tab value="pending" leftSection={<IconAlertCircle size={16} />}>
    Заявки ({pendingPersons.length})
  </Tabs.Tab>
  <Tabs.Tab value="edit" leftSection={<IconEdit size={16} />}>
    Редактируемые ({editPersons.length})
  </Tabs.Tab>
  <Tabs.Tab value="users" leftSection={<IconUsers size={16} />}>
    Пользователи ({users.length})
  </Tabs.Tab>
</Tabs.List>




        <Tabs.Panel value="pending" pt="xs">
          {isLoadingPending ? (
            <Text>Загрузка заявок...</Text>
          ) : pendingPersons.length === 0 ? (
            <Alert color="green" title="Нет заявок">
              Все заявки обработаны!
            </Alert>
          ) : (
            <Stack>
              {pendingPersons.map((person) => (
                <Paper key={person.id} withBorder p="md">
                  <Group justify="space-between">
                    <div>
                      <Text fw={600}>
                        {person.lastName} {person.firstName} {person.patronymic || ''}
                      </Text>
                      <Text size="sm" c="dimmed">
                        Дата рождения: {new Date(person.birthDate).toLocaleDateString('ru-RU')}
                      </Text>
                      <Text size="sm" c="dimmed">
                        Email: {person.pendingRegistration?.email || 'Не указан'}
                      </Text>
                      <Badge color="yellow" mt="xs">
                        {person.status}
                      </Badge>
                    </div>
                    <Group>
                     <Button
                leftSection={<IconCheck size={16} />}
                color="red"
                onClick={() => handleReject(person.id)}
              >
                Отклонить
              </Button>
                    <Button
                      leftSection={<IconCheck size={16} />}
                      onClick={() => handleConfirm(person.id)}
                      loading={isConfirming}
                    >
                      Подтвердить
                    </Button>
                    </Group>
                  </Group>
                </Paper>
              ))}
            </Stack>
          )}
        </Tabs.Panel>

<Tabs.Panel value="edit" pt="xs">
  {isLoadingEdit ? (
    <Text>Загрузка...</Text>
  ) : editPersons.length === 0 ? (
    <Alert color="green">Нет редактируемых персон</Alert>
  ) : (
    <Stack>
      {editPersons.map((person) => (
        <Paper key={person.id} withBorder p="md">
          <Group justify="space-between">
            <div>
              <Text fw={600}>
                {person.lastName} {person.firstName} {person.patronymic || ''}
              </Text>
              <Text size="sm" c="dimmed">
                Создал: {person.creator?.email || 'Неизвестно'}
              </Text>
              <Badge color="yellow" mt="xs">{person.modeStatus}</Badge>
            </div>
            <Group>
              <Button
                size="ms"
                color="red"
                onClick={() => handleReject(person.id)}
              >
                Отклонить
              </Button>
              <Button
                size="ms"
                color="green"
                onClick={() => handleApply(person.id)}
              >
                Применить
              </Button>
            </Group>
          </Group>
        </Paper>
      ))}
    </Stack>
  )}
</Tabs.Panel>

        <Tabs.Panel value="users" pt="xs">
          {isLoadingUsers ? (
            <Text>Загрузка пользователей...</Text>
          ) : users.length === 0 ? (
            <Text>Нет зарегистрированных пользователей</Text>
          ) : (
            <Stack>
              {users.map((user) => (
                <Paper key={user.id} withBorder p="md">
                  <Group>
                    <IconUser />
                    <div>
                      <Text>
                        {user.person?.lastName} {user.person?.firstName}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {user.email} • {user.isAdmin ? 'Админ' : 'Пользователь'}
                        {user.isVerified ? ' • Подтверждён' : ' • Не подтверждён'}
                      </Text>
                    </div>
                  </Group>
                </Paper>
              ))}
            </Stack>
          )}
        </Tabs.Panel>






      </Tabs>
    </Container>
  );
}