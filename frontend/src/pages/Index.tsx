import { MantineProvider } from "../provider/MantineProvider";
import { MantineChatWidget } from "../components/MantineChatWidget";
import { Button, Box, Text, Stack, Paper, Group } from "@mantine/core";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import FamilyViewPage from "./FamilyViewPage";
import AdminPanelPage from "./AdminPanelPage";

const Index = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };



  return (
    <MantineProvider>
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Paper shadow="md" p="xl" radius="lg" className="w-full max-w-md">
          <Stack gap="lg">
            <Group justify="space-between" align="center">
              <Box>
                <Text size="xl" fw={700}>
                  Мини-чат
                </Text>
                <Text size="sm" c="dimmed">
                  Привет, {user?.name || "Пользователь"}!
          
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
        {user?.isAdmin && <AdminPanelPage />}
        <FamilyViewPage />

      </div>
    </MantineProvider>
  );
};

export default Index;
