import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  Text,
  Stack,
  Paper,
  List,
  ThemeIcon,
  Divider,
  Button,
} from "@mantine/core";
import {
  IconShield,
  IconLock,
  IconUser,
  IconAlertTriangle,
  IconMail,
} from "@tabler/icons-react";

export function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const handleOut = () => {
    navigate(-1);
  };

  return (
    <Container size="md" py="xl">
      <Paper shadow="sm" p="xl" radius="md">
        <Button variant="subtle" color="red" radius="xl" onClick={handleOut}>
          Вернуться
        </Button>
        <Stack gap="xl">
          {/* 🔹 Заголовок */}
          <div style={{ textAlign: "center" }}>
            <Title order={2} c="blue">
              <ThemeIcon size="lg" color="blue" variant="light" mr="md">
                <IconShield size={24} />
              </ThemeIcon>
              Политика конфиденциальности
            </Title>
          </div>

          <Divider />

          {/* 🔹 Введение */}
          <section>
            <Title order={2} size="h3" mb="md">
              <ThemeIcon color="blue" variant="light" mr="sm">
                <IconShield size={18} />
              </ThemeIcon>
              Введение
            </Title>
            <Text>
              Сервис «Family Tree» (далее — Сервис) серьёзно относится к защите
              персональных данных пользователей. Настоящая Политика
              конфиденциальности описывает принципы и практики обработки данных
              в рамках нашего закрытого генеалогического сообщества.
            </Text>
          </section>

          {/* 🔹 Раздел 1 */}
          <section>
            <Title order={2} size="h3" mb="md">
              <ThemeIcon color="green" variant="light" mr="sm">
                <IconUser size={18} />
              </ThemeIcon>
              1. Добровольность предоставления данных
            </Title>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="green" size={16} radius="xl">
                  <span style={{ fontSize: "10px" }}>✓</span>
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text size="sm">
                  <strong>1.1.</strong> Пользователь самостоятельно и
                  добровольно принимает решение о размещении персональных данных
                  (своих и своих родственников) в Сервисе.
                </Text>
              </List.Item>
              <List.Item>
                <Text size="sm">
                  <strong>1.2.</strong> Размещая данные о третьих лицах
                  (родственниках), Пользователь гарантирует, что имеет их
                  согласие на такую обработку или действует в их законных
                  интересах.
                </Text>
              </List.Item>
            </List>
          </section>

          {/* 🔹 Раздел 2 */}
          <section>
            <Title order={2} size="h3" mb="md">
              <ThemeIcon color="yellow" variant="light" mr="sm">
                <IconLock size={18} />
              </ThemeIcon>
              2. Закрытый характер сообщества
            </Title>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="yellow" size={16} radius="xl">
                  <span style={{ fontSize: "10px" }}>✓</span>
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text size="sm">
                  <strong>2.1.</strong> Сервис «Family Tree» является частным,
                  закрытым сообществом.
                </Text>
              </List.Item>
              <List.Item>
                <Text size="sm">
                  <strong>2.2.</strong> Данные не индексируются поисковыми
                  системами и не передаются третьим лицам для коммерческого
                  использования.
                </Text>
              </List.Item>
              <List.Item>
                <Text size="sm">
                  <strong>2.3.</strong> Доступ к информации имеют только
                  авторизованные пользователи, прошедшие модерацию.
                </Text>
              </List.Item>
            </List>
          </section>

          {/* 🔹 Раздел 3 */}
          <section>
            <Title order={2} size="h3" mb="md">
              <ThemeIcon color="blue" variant="light" mr="sm">
                <IconUser size={18} />
              </ThemeIcon>
              3. Обязательства Пользователя
            </Title>
            <Text size="sm" mb="sm">
              <strong>3.1.</strong> Пользователь обязуется:
            </Text>
            <List
              spacing="xs"
              icon={
                <ThemeIcon color="blue" size={16} radius="xl">
                  <span style={{ fontSize: "10px" }}>✓</span>
                </ThemeIcon>
              }
              styles={{ itemWrapper: { paddingLeft: 8 } }}
            >
              <List.Item>
                <Text size="sm">
                  Не передавать свои учётные данные (логин, пароль) третьим
                  лицам.
                </Text>
              </List.Item>
              <List.Item>
                <Text size="sm">
                  Не распространять скриншоты, выгрузки или ссылки на профили
                  родственников за пределами Сервиса без их согласия.
                </Text>
              </List.Item>
              <List.Item>
                <Text size="sm">
                  Немедленно сообщить администрации о компрометации аккаунта.
                </Text>
              </List.Item>
            </List>
          </section>

          {/* 🔹 Раздел 4 */}
          <section>
            <Title order={2} size="h3" mb="md">
              <ThemeIcon color="orange" variant="light" mr="sm">
                <IconAlertTriangle size={18} />
              </ThemeIcon>
              4. Ответственность
            </Title>
            <List
              spacing="sm"
              icon={
                <ThemeIcon color="orange" size={16} radius="xl">
                  <span style={{ fontSize: "10px" }}>✓</span>
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text size="sm">
                  <strong>4.1.</strong> Администрация не несёт ответственности
                  за действия Пользователей, нарушивших конфиденциальность.
                </Text>
              </List.Item>
              <List.Item>
                <Text size="sm">
                  <strong>4.2.</strong> При нарушении правил доступ к Сервису
                  может быть заблокирован без возврата средств (если применимо).
                </Text>
              </List.Item>
            </List>
          </section>

          <Divider />

          {/* 🔹 Удаление аккаунта */}
          <section>
            <Title order={2} size="h3" mb="md">
              <ThemeIcon color="red" variant="light" mr="sm">
                <IconLock size={18} />
              </ThemeIcon>
              5. Удаление аккаунта и данные
            </Title>
            <Text size="sm" mb="sm">
              <strong>5.1.</strong> При удалении учётной записи:
            </Text>
            <List
              spacing="xs"
              icon={
                <ThemeIcon color="red" size={16} radius="xl">
                  <span style={{ fontSize: "10px" }}>✓</span>
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text size="sm">
                  <strong>Удаляются:</strong> email, пароль, настройки аккаунта,
                  приватные заметки.
                </Text>
              </List.Item>
              <List.Item>
                <Text size="sm">
                  <strong>Сохраняются:</strong> данные о персонах и семейных
                  связях в древе (являются частью коллективной семейной
                  истории).
                </Text>
              </List.Item>
            </List>
            <Text size="xs" c="dimmed" mt="sm">
              Это необходимо для сохранения целостности генеалогического древа и
              прав других участников (родственников) на доступ к общей семейной
              информации.
            </Text>
          </section>

          <Divider />

          {/* 🔹 Контакты */}
          <section>
            <Title order={2} size="h3" mb="md">
              <ThemeIcon color="blue" variant="light" mr="sm">
                <IconMail size={18} />
              </ThemeIcon>
              6. Контакты
            </Title>
            <Text size="sm">
              По вопросам обработки персональных данных и конфиденциальности
              обращайтесь:
            </Text>
            <Text size="sm">zhdanokivan@xmail.ru</Text>
          </section>

          {/* 🔹 Принятие политики */}
          <Paper bg="blue.0" p="md" radius="md">
            <Text size="sm" c="blue.9">
              <strong>Важно:</strong> Используя Сервис, вы подтверждаете, что
              прочитали, поняли и принимаете условия настоящей Политики
              конфиденциальности.
            </Text>
          </Paper>
        </Stack>
      </Paper>
    </Container>
  );
}
