import { MantineProvider } from "../provider/MantineProvider";
import { ChatWidget } from "../components/ChatWidget";
import { useState } from "react";
import DeleteAccountModal from "../components/DeleteAccountModal";
import {
  Button,
  Alert,
  Box,
  Text,
  Stack,
  Paper,
  Group,
  Title,
  ThemeIcon,
} from "@mantine/core";
import { useDeleteAccountMutation } from "../api/personsApi";
import { TreePine } from "lucide-react";
import { useAuth } from "../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import FamilyViewPage from "./FamilyViewPage";
import AdminPanelPage from "./AdminPanelPage";
import type { Error } from "../types/index";

const Index = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/main");
  };
  const [deleteAccount] = useDeleteAccountMutation();
  const [error, setError] = useState<string>("");
  const isSuperAdmin = user?.isSuperAdmin === true ? true : false;
  const isAnonymous = user?.id === "anonymous";
  const isBlocked = user?.isBlocked === true;
  const fullName = user?.fullName
    ? `${user.fullName.lastName} ${user.fullName.firstName} ${user.fullName.patronymic}`.trim()
    : "Пользователь";
  localStorage.setItem("chat_guest_name", fullName);
  const userPersonId = user?.personId ?? "";
  const userId = user?.id ?? "";

  const [confirmDelete, setConfirmDelete] = useState<{
    isOpen: boolean;
    userId: string | null;
    loading: boolean;
  }>({
    isOpen: false,
    userId: null,
    loading: false,
  });

  const handleDeleteUser = async () => {
    setConfirmDelete({
      isOpen: true,
      userId: userId,
      loading: false,
    });
  };
  const handleConfirmDelete = async () => {
    if (!confirmDelete.userId) return;

    setConfirmDelete((prev) => ({ ...prev, loading: true }));

    try {
      const result = await deleteAccount(confirmDelete.userId).unwrap();
      if (result.success === true) {
        handleLogout();
        return;
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
  return (
    <MantineProvider>
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Paper shadow="md" p="xl" radius="lg" className="w-full max-w-md">
          <Stack gap="lg">
            <Group justify="space-between" align="center">
              <Box>
                <Group gap="xs">
                  <ThemeIcon
                    size={40}
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: "green.6", to: "green.4", deg: 135 }}
                  >
                    <TreePine size={22} />
                  </ThemeIcon>
                  <Title order={3} style={{ color: "hsl(var(--foreground))" }}>
                    Семейное дерево
                  </Title>
                </Group>
                <Group gap="xs">
                  <Text size="sm" c="dimmed">
                    Привет, {fullName}!
                  </Text>
                </Group>
                {!isAnonymous && (
                  <Button
                    variant="subtle"
                    color="red"
                    size="xs"
                    onClick={handleDeleteUser}
                  >
                    Удалить аккаунт
                  </Button>
                )}
              </Box>
              <Button
                variant="subtle"
                color="red"
                size="xs"
                onClick={handleLogout}
              >
                Выйти
              </Button>
            </Group>
          </Stack>
        </Paper>
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
        <ChatWidget />
        {(user?.isAdmin || isSuperAdmin) && (
          <AdminPanelPage
            isSuperAdmin={isSuperAdmin}
            userId={userId}
            autoLogout={handleLogout}
          />
        )}
        <FamilyViewPage
          isAnonymous={isAnonymous}
          isBlocked={isBlocked}
          userPersonId={userPersonId}
        />
      </div>
      <DeleteAccountModal
        opened={confirmDelete.isOpen}
        onClose={() =>
          setConfirmDelete({ isOpen: false, userId: null, loading: false })
        }
        onConfirm={handleConfirmDelete}
        loading={confirmDelete.loading}
      />
    </MantineProvider>
  );
};

export default Index;
