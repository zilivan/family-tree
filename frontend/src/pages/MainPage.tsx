import { useNavigate } from "react-router-dom";

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  SimpleGrid,
  Paper,
  ThemeIcon,
  Stack,
  Box,
} from "@mantine/core";
import {
  TreePine,
  UserPlus,
  Users,
  Link2,
  Share2,
  Heart,
  ArrowRight,
} from "lucide-react";
const steps = [
  {
    icon: UserPlus,
    title: "Создайте профиль",
    description:
      "Зарегистрируйтесь и добавьте информацию о себе. При регистрации ваши данные должны будут подтвердить администраторы. Для просмотра можно войти без регистрации (код узнайте у родственников)",
  },
  {
    icon: Users,
    title: "Добавьте родственников",
    description:
      "После прохождения регистрации вы сможете выбрать режим базы (редактируемая) и вносить изменения в карточки персон. Укажите родителей и супругов. При выборе родителей и супругов в поле поиска вводите инициалы и база предоставит список возможных вариантов, если вариантов нет значит не создана такая персоно в базе. Все изменеия проходят проверку через администраторов.(Сначала создайте персоны и подтвердите у админов, потом настройте связи: родители супруги, и подтвердите у админов.)",
  },
  {
    icon: Link2,
    title: "Загрузите ваши фото",
    description:
      "Загрузите  фотографий через поле добавить фото, выберите фото из Вашего архива (телефон,камера,галерея и т.д.) и фото сами загрузятся подтверждать ни чего не надо.В режиме редакции можно (скрыть/показать) фотографии из добавленных, нажав на иконку в верхнем правом углу. Скрытые фото затеняются. Фотографии не проходят подтверждения администратором, максимальный размер 10 шт.",
  },
  {
    icon: Share2,
    title: "Делитесь историей",
    description:
      "Пригласите родственников дополнить дерево. В программе есть чат в котором можно  задавать вопросы.",
  },
];
const TreeIllustration = () => (
  <svg
    viewBox="0 0 300 320"
    width="280"
    height="300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="150"
      cy="130"
      rx="120"
      ry="110"
      fill="hsl(142, 30%, 35%)"
      opacity="0.15"
    />
    <ellipse
      cx="150"
      cy="110"
      rx="95"
      ry="90"
      fill="hsl(142, 30%, 35%)"
      opacity="0.25"
    />
    <ellipse
      cx="150"
      cy="95"
      rx="65"
      ry="65"
      fill="hsl(142, 30%, 35%)"
      opacity="0.35"
    />
    <rect
      x="142"
      y="180"
      width="16"
      height="100"
      rx="8"
      fill="hsl(25, 50%, 40%)"
    />
    <ellipse
      cx="120"
      cy="290"
      rx="60"
      ry="12"
      fill="hsl(142, 30%, 35%)"
      opacity="0.1"
    />
    <circle cx="110" cy="120" r="8" fill="hsl(25, 50%, 55%)" opacity="0.6" />
    <circle cx="170" cy="90" r="6" fill="hsl(25, 50%, 55%)" opacity="0.5" />
    <circle cx="140" cy="70" r="5" fill="hsl(25, 50%, 55%)" opacity="0.4" />
    <circle cx="190" cy="130" r="7" fill="hsl(25, 50%, 55%)" opacity="0.5" />
    <line
      x1="150"
      y1="200"
      x2="120"
      y2="240"
      stroke="hsl(25, 50%, 40%)"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.4"
    />
    <line
      x1="150"
      y1="200"
      x2="180"
      y2="245"
      stroke="hsl(25, 50%, 40%)"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.4"
    />
    <text
      x="150"
      y="310"
      textAnchor="middle"
      fontSize="12"
      fill="hsl(25, 15%, 45%)"
      fontFamily="Nunito, sans-serif"
    >
      Ваша семья
    </text>
  </svg>
);
export default function MainPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Box style={{ minHeight: "100vh", background: "hsl(var(--background))" }}>
        {/* Header */}
        <Box
          component="header"
          py="md"
          px="lg"
          style={{
            borderBottom: "1px solid hsl(var(--border))",
            background: "hsl(var(--background) / 0.8)",
            backdropFilter: "blur(12px)",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <Container size="lg">
            <Group justify="space-between">
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
              <Button
                variant="subtle"
                color="green"
                radius="xl"
                rightSection={<ArrowRight size={16} />}
                onClick={handleLogin}
              >
                Войти
              </Button>
            </Group>
          </Container>
        </Box>
        {/* Hero */}
        <Box component="section" py={80}>
          <Container size="lg">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <Stack gap="lg" className="flex-1 text-center md:text-left">
                <Title
                  order={1}
                  fz={44}
                  fw={800}
                  lh={1.2}
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  Сохраните историю{" "}
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: "green.6", to: "green.4", deg: 135 }}
                  >
                    вашей семьи
                  </Text>
                </Title>
                <Text
                  fz="lg"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                  maw={480}
                >
                  Создайте красивое генеалогическое дерево, объедините поколения
                  и сохраните воспоминания для будущих поколений.
                </Text>
                <Group className="justify-center md:justify-start">
                  <Button
                    size="lg"
                    radius="xl"
                    color="green"
                    rightSection={<ArrowRight size={18} />}
                  >
                    Создать семейное дерево
                  </Button>
                </Group>
              </Stack>
              <div className="flex-shrink-0">
                <TreeIllustration />
              </div>
            </div>
          </Container>
        </Box>
        {/* Steps */}
        <Box
          component="section"
          py={60}
          style={{ background: "hsl(var(--card))" }}
        >
          <Container size="lg">
            <Stack align="center" gap="xs" mb={40}>
              <Text
                fz="sm"
                fw={600}
                tt="uppercase"
                style={{ color: "hsl(var(--accent))", letterSpacing: "0.05em" }}
              >
                Как это работает
              </Text>
              <Title
                order={2}
                fz={32}
                fw={700}
                ta="center"
                style={{ color: "hsl(var(--foreground))" }}
              >
                Четыре простых шага
              </Title>
            </Stack>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
              {steps.map((step, i) => (
                <Paper
                  key={i}
                  p="xl"
                  radius="lg"
                  shadow="sm"
                  style={{
                    background: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "default",
                  }}
                  className="hover:-translate-y-1 hover:shadow-md"
                >
                  <Stack align="center" gap="md" ta="center">
                    <ThemeIcon
                      size={56}
                      radius="xl"
                      variant="light"
                      color="green"
                    >
                      <step.icon size={26} />
                    </ThemeIcon>
                    <Text
                      fz="xs"
                      fw={700}
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      Шаг {i + 1}
                    </Text>
                    <Title
                      order={4}
                      fw={700}
                      style={{ color: "hsl(var(--foreground))" }}
                    >
                      {step.title}
                    </Title>
                    <Text
                      fz="sm"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    >
                      {step.description}
                    </Text>
                  </Stack>
                </Paper>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
        {/* CTA */}
        <Box component="section" py={80}>
          <Container size="sm">
            <Paper
              p={48}
              radius="xl"
              style={{
                background:
                  "linear-gradient(135deg, hsl(142, 30%, 35%), hsl(142, 30%, 28%))",
                textAlign: "center",
              }}
            >
              <Stack align="center" gap="md">
                <Heart size={36} color="hsl(40, 40%, 97%)" opacity={0.8} />
                <Title order={2} fz={28} fw={700} c="white">
                  Начните прямо сейчас
                </Title>
                <Text fz="md" c="white" opacity={0.85} maw={400}>
                  Объедините семью, сохраните историю и создайте наследие для
                  будущих поколений.
                </Text>
                <Button
                  size="lg"
                  radius="xl"
                  variant="white"
                  color="green"
                  mt="sm"
                  rightSection={<ArrowRight size={18} />}
                  onClick={handleLogin}
                >
                  Начать
                </Button>
              </Stack>
            </Paper>
          </Container>
        </Box>
        {/* Footer */}
        <Box
          component="footer"
          py="lg"
          style={{
            borderTop: "1px solid hsl(var(--border))",
          }}
        >
          <Container size="lg">
            <Group justify="center">
              <Text fz="sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                © {new Date().getFullYear()} Семейное дерево. Все права
                защищены.
              </Text>
            </Group>
          </Container>
        </Box>
      </Box>
    </>
  );
}
