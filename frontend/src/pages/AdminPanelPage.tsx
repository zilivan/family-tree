import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmModal } from "../components/ConfirmModal";
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
  Tooltip,
  ActionIcon,
} from "@mantine/core";
import {
  IconCheck,
  IconAlertCircle,
  IconUser,
  IconEdit,
  IconUsers,
  IconLock,
  IconShield,
  IconTrash,
} from "@tabler/icons-react";
import {
  useGetPendingPersonsQuery,
  useConfirmPersonMutation,
  useGetUsersQuery,
  useGetEditPersonsQuery,
  useApplyPersonChangesMutation,
  useRejectPersonChangesMutation,
  useToggleUserBlockMutation,
  useToggleUserAdminMutation,
  useDeleteUserMutation,
} from "../api/adminApi";

interface AdminPanelPageProps {
  isSuperAdmin: boolean;
  userId: string;
}

export default function AdminPanelPage({
  isSuperAdmin,
  userId,
}: AdminPanelPageProps) {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState<{
    isOpen: boolean;
    userId: string | null;
    loading: boolean;
  }>({
    isOpen: false,
    userId: null,
    loading: false,
  });
  const {
    data: pendingPersons = [],
    isLoading: isLoadingPending,
    refetch: refetchPending,
  } = useGetPendingPersonsQuery();

  const {
    data: users = [],
    isLoading: isLoadingUsers,
    refetch: refetchUsers,
  } = useGetUsersQuery();

  const {
    data: editPersons = [],
    isLoading: isLoadingEdit,
    refetch: refetchEdit,
  } = useGetEditPersonsQuery();
  const handleRefetchAll = () => {
    refetchPending();
    refetchUsers();
    refetchEdit();
  };
  const [confirmPerson, { isLoading: isConfirming }] =
    useConfirmPersonMutation();
  const [activeTab, setActiveTab] = useState<string | null>("pending");

  const [applyChanges] = useApplyPersonChangesMutation();
  const [rejectChanges] = useRejectPersonChangesMutation();

  const [toggleBlock] = useToggleUserBlockMutation();
  const [toggleAdmin] = useToggleUserAdminMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleConfirm = async (personId: string) => {
    try {
      await confirmPerson(personId).unwrap();
    } catch {
      setError("Ошибка подтверждения");
    }
  };

  const handleApply = async (personId: string) => {
    try {
      await applyChanges(personId).unwrap();

      setSuccess("Ок");
    } catch {
      setError("Ошибка применения");
    }
  };

  const handleReject = async (personId: string) => {
    try {
      await rejectChanges(personId).unwrap();
      setSuccess("Оk удалено");
    } catch {
      setError("Ошибка отклонения");
    }
  };
  const handleToggleBlock = async (userId: string, isBlocked: boolean) => {
    try {
      await toggleBlock({ userId, isBlocked }).unwrap();
    } catch {
      setError("Ошибка блокировки");
    }
  };

  const handleToggleAdmin = async (userId: string, isAdmin: boolean) => {
    try {
      await toggleAdmin({ userId, isAdmin }).unwrap();
    } catch {
      setError("Ошибка прав администратора");
    }
  };
  const handleDeleteUser = async (userId: string) => {
    setConfirmDelete({
      isOpen: true,
      userId,
      loading: false,
    });
  };

  const handleConfirmDelete = async () => {
    if (!confirmDelete.userId) return;

    setConfirmDelete((prev) => ({ ...prev, loading: true }));

    try {
      await deleteUser(confirmDelete.userId).unwrap();
      setSuccess("Оk пользователь удален");
    } catch {
      setError("Ошибка удаления");
    } finally {
      setConfirmDelete({ isOpen: false, userId: null, loading: false });
    }
    if (confirmDelete.userId === userId) {
      navigate("/");
    }
  };


  return (
    <>
      <Container size="lg" py="xl">
        <Group justify="space-between">
          <Title order={2} mb="lg">
            Админ-панель
          </Title>
          <Button size="ms" color="green" onClick={() => handleRefetchAll()}>
            Обновить данные
          </Button>
        </Group>

        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab
              value="pending"
              leftSection={<IconAlertCircle size={16} />}
            >
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
                           {person.lastName} {person.firstName}{" "}
                          {person.patronymic || ""}
                        </Text>
                        <Text size="sm" c="dimmed">
                          Дата рождения:{" "}
                          {new Date(person.birthDate).toLocaleDateString(
                            "ru-RU",
                          )}
                        </Text>
                        <Text size="sm" c="dimmed">
                          Email:{" "}
                          {person.pendingRegistration?.email || "Не указан"}
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
                          {person.lastName} {person.firstName}{" "}
                          {person.patronymic || ""}
                        </Text>
                        <Text size="sm" c="dimmed">
                          Создал: {person.creator?.email || "Неизвестно"}
                        </Text>
                        <Badge color="yellow" mt="xs">
                          {person.modeStatus}
                        </Badge>
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
            ) : users.length >= 0 ? (
              <Text>Нет зарегистрированных пользователей</Text>
            ) : (
              <Stack>
                {users.map((user) => (
                  <Paper key={user.id} withBorder p="md">
                    <Group>
                      <IconUser />
                      <div>
                        <Text fw={400}>
                         {user.fullName.lastName} {user.fullName.firstName}{" "}
                          {user.fullName.patronymic || ""}
                        </Text>
                        <Text size="sm" c="dimmed">
                          {user.email} {user.isAdmin && "• Админ"}
                          {user.isSuperAdmin
                            ? " • Супер админ"
                            : "• Пользователь"}
                          {user.isVerified
                            ? " • Подтверждён"
                            : " • Не подтверждён"}
                          {user.isBlocked && " • Заблокирован"}
                        </Text>
                      </div>
                    </Group>
                    {/* Панель управления (только для суперадмина) */}
                    {isSuperAdmin && (
                      <Group gap="xl" mt="xl">
                        {/* Блокировка */}
                        <Tooltip
                          label={
                            user.isBlocked ? "Разблокировать" : "Заблокировать"
                          }
                        >
                          <ActionIcon
                            color={user.isBlocked ? "green" : "red"}
                            onClick={() =>
                              handleToggleBlock(user.id, !user.isBlocked)
                            }
                          >
                            <IconLock size={16} />
                          </ActionIcon>
                        </Tooltip>

                        {/* Права администратора */}
                        <Tooltip
                          label={
                            user.isAdmin
                              ? "Убрать права админа"
                              : "Сделать админом"
                          }
                        >
                          <ActionIcon
                            color={user.isAdmin ? "yellow" : "gray"}
                            onClick={() =>
                              handleToggleAdmin(user.id, !user.isAdmin)
                            }
                          >
                            <IconShield size={16} />
                          </ActionIcon>
                        </Tooltip>

                        {/* Удаление */}
                        <Tooltip label="Удалить пользователя">
                          <ActionIcon
                            color="red"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <IconTrash size={16} />
                          </ActionIcon>
                        </Tooltip>
                      </Group>
                    )}
                  </Paper>
                ))}
              </Stack>
            )}
          </Tabs.Panel>
          {success && (
            <Alert
              color="green"
              mb="md"
              onClose={() => setSuccess("")}
              withCloseButton
            >
              {success}
            </Alert>
          )}
          {error && (
            <Alert
              color="red"
              mb="md"
              onClose={() => setError("")}
              withCloseButton
            >
              {error}
            </Alert>
          )}
        </Tabs>
      </Container>
      <ConfirmModal
        opened={confirmDelete.isOpen}
        onClose={() =>
          setConfirmDelete({ isOpen: false, userId: null, loading: false })
        }
        onConfirm={handleConfirmDelete}
        title="Удаление пользователя"
        message="Вы уверены, что хотите удалить пользователя? Это действие нельзя отменить!"
        confirmLabel="Удалить"
        cancelLabel="Отмена"
        loading={confirmDelete.loading}
      />
    </>
  );
}
