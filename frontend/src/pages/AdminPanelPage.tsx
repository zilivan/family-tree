import { useState } from "react";

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
  useDeleteCodeMutation,
  useGetStatusCodeQuery,
  useGenerateCodeMutation,
} from "../api/adminApi";
import type { Error } from "../types/index";

interface AdminPanelPageProps {
  isSuperAdmin: boolean;
  userId: string;
  autoLogout: () => void;
}

export default function AdminPanelPage({
  isSuperAdmin,
  userId,
  autoLogout,
}: AdminPanelPageProps) {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [Days, setDays] = useState<number>(1);

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

  const { data: codeStatus, refetch: refetchCodeStatus } =
    useGetStatusCodeQuery();

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
  const [generateCode] = useGenerateCodeMutation();
  const [deleteCode] = useDeleteCodeMutation();

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
  const handleGenerateCode = async (days: number) => {
    try {
      await generateCode(days).unwrap();

      setSuccess("Код сгенерирован");
    } catch {
      setError("Ошибка генерации кода");
    }
    refetchCodeStatus();
  };

  const handleClearCode = async () => {
    try {
      await deleteCode(undefined).unwrap();

      setSuccess("Код сброшен");
    } catch {
      setError("Ошибка сброса кода");
    }
    refetchCodeStatus();
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
  const handleDeleteUser = async (userIdDelete: string) => {
    setConfirmDelete({
      isOpen: true,
      userId: userIdDelete,
      loading: false,
    });
  };

  const handleConfirmDelete = async () => {
    if (!confirmDelete.userId) return;

    setConfirmDelete((prev) => ({ ...prev, loading: true }));

    try {
      const result = await deleteUser(confirmDelete.userId).unwrap();

      if (result.success === true) {
        if (confirmDelete.userId === userId) {
          autoLogout();
          return;
        }
        setSuccess("Оk пользователь удален");
      }
    } catch (err: unknown) {
      let errorMessage = "Не удалось удалить пользователя";
      const error = err as Error;
      if (error.data) {
        errorMessage = error.data.error;
      }

      setError(errorMessage);
    } finally {
      setConfirmDelete({ isOpen: false, userId: null, loading: false });
    }
  };
  const countDays = () => {
    if (Days < 3) {
      setDays((prev) => prev + 1);
    } else {
      setDays(1);
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
            <Tabs.Tab value="code" leftSection={<IconAlertCircle size={16} />}>
              Код входа
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
            ) : users.length === 0 ? (
              <Text>Нет зарегистрированных пользователей</Text>
            ) : (
              <Stack>
                {users.map((user) => (
                  <Paper key={user.id} withBorder p="md">
                    <Group>
                      <IconUser />
                      <div>
                        {user.fullName ? (
                          <Text fw={400}>
                            {user.fullName.lastName} {user.fullName.firstName}{" "}
                            {user.fullName.patronymic || ""}
                          </Text>
                        ) : (
                          <Text fw={400}>Персона удалена</Text>
                        )}

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
          <Tabs.Panel value="code" pt="xs">
            <Stack>
              <Group justify="space-between">
                <div>
                  <Text fw={600}>Текущий код</Text>
                  <Text size="sm" c="dimmed">
                    {codeStatus?.code ?? "код не задан"}
                  </Text>
                  <Text size="sm" c="dimmed">
                    действует{" "}
                    {codeStatus?.timeLeft?.toLocaleString() ?? "нет кода"}
                  </Text>
                </div>
                <Group>
                  <Button
                    leftSection={<IconCheck size={16} />}
                    color="yellow"
                    onClick={countDays}
                  >
                    дни {Days}
                  </Button>
                  <Button
                    leftSection={<IconCheck size={16} />}
                    onClick={() => {
                      handleGenerateCode(Days);
                    }}
                  >
                    Новый
                  </Button>
                  <Button
                    leftSection={<IconCheck size={16} />}
                    color="red"
                    onClick={handleClearCode}
                  >
                    Сбросить
                  </Button>
                </Group>
              </Group>
            </Stack>
          </Tabs.Panel>
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
