import { MantineProvider } from "../provider/MantineProvider";
import { MantineChatWidget } from "../components/MantineChatWidget";
import {
  Button,
  Box,
  Text,
  Stack,
  Paper,
  Group,
  Title,
  ThemeIcon,
} from "@mantine/core";
import { TreePine } from "lucide-react";
import { useAuth } from "../contexts/useAuth";
import { useNavigate } from "react-router-dom";
import FamilyViewPage from "./FamilyViewPage";
import AdminPanelPage from "./AdminPanelPage";

const Index = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/main");
  };

  const isSuperAdmin = user?.isSuperAdmin === true ? true : false;
  const isAnonymous = user?.id === "anonymous";
  const isBlocked = user?.isBlocked === true;
  const fullName = user?.fullName
    ? `${user.fullName.lastName} ${user.fullName.firstName} ${user.fullName.patronymic}`.trim()
    : "Пользователь";
  localStorage.setItem("chat_guest_name", fullName);
  const userId = user?.id ?? "";
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
                <Text size="sm" c="dimmed">
                  Привет, {fullName}!
                </Text>
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

        <MantineChatWidget />
        {(user?.isAdmin || isSuperAdmin) && (
          <AdminPanelPage isSuperAdmin={isSuperAdmin} userId={userId} />
        )}
        <FamilyViewPage
          isAnonymous={isAnonymous}
          isBlocked={isBlocked}
          userId={userId}
        />
      </div>
    </MantineProvider>
  );
};

export default Index;
