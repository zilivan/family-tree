// src/pages/LoginPage.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Alert,
  Stack,
  Paper,
  Tabs,
  Container,
} from "@mantine/core";
import { useAuth } from "../contexts/useAuth";
import { MantineProvider } from "../provider/MantineProvider";
import {
  useVerifyCodeMutation,
  useRequestCodeMutation,
  useAnonymCodeMutation,
} from "../api/authApi";

type AuthStep = "email-code" | "email" | "register" | "anonymous" | "admin";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [anonymousCode, setAnonymousCode] = useState("");
  // const [adminCode, setAdminCode] = useState("");
  const [step, setStep] = useState<AuthStep>("email-code");
  const [codeSent, setCodeSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pendingPersonId, setPendingPersonId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const [verifyCode] = useVerifyCodeMutation();
  const [requestCode] = useRequestCodeMutation();
  const [anonymCode] = useAnonymCodeMutation();
  // const [sendAdminCode] = useSendAdminCodeMutation();

  function getMassegError(err: unknown): string {
    let message = "Неизвестная ошибка";

    if (err && typeof err === "object" && "status" in err) {
      const error = err as {
        status: number;
        data: { error?: string; message?: string };
      };
      if (error.data) {
        message = error.data.error || error.data.message || "Ошибка сервера";
      } else {
        message = "Ошибка при отправке кода";
      }
    }
    return message;
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleRequestCode = async () => {
    if (!email) {
      setError("Пожалуйста, введите email");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await requestCode({ email }).unwrap();
      if (response) {
        setPendingPersonId(response.personId);
        setCodeSent(true);
      } else {
        throw new Error("Неверный код");
      }
    } catch (err) {
      setError(getMassegError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!code) {
      setError("Пожалуйста, введите код");

      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await verifyCode({ email, code }).unwrap();

      if (response) {
        login(response.token, response.user);

        if (pendingPersonId) {
          navigate(`/?personId=${pendingPersonId}`);
        } else {
          navigate("/");
        }
      } else {
        throw new Error("Неверный код");
      }
    } catch (err) {
      setError(getMassegError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    navigate("/register");
  };

  const handleAnonymousLogin = async () => {
    if (!anonymousCode) {
      setError("Пожалуйста, введите код");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await anonymCode({ code: anonymousCode }).unwrap();

      if (response) {
        login(response.token, response.user);
        navigate("/");
      } else {
        throw new Error("Неверный код");
      }
    } catch (err) {
      setError(getMassegError(err));
    } finally {
      setIsLoading(false);
    }
  };
  /*
  const handleAdminLogin = async () => {
    if (!adminCode) {
      setError("Пожалуйста, введите код");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await sendAdminCode({ code: adminCode }).unwrap();

      if (response) {
        login(response.token, response.user);
        navigate("/admin");
      } else {
        throw new Error("Неверный код");
      }
    } catch (err) {
      setError(getMassegError(err));
    } finally {
      setIsLoading(false);
    }
  };
*/
  const handleLogout = () => {
    navigate("/main");
  };

  const resetForm = () => {
    setError(null);
    setCodeSent(false);
    setCode("");
  };

  return (
    <MantineProvider>
      <Container size="xs" py="xl">
        <Paper shadow="md" p="xl" radius="md" withBorder>
          <Button
            variant="subtle"
            color="red"
            radius="xl"
            onClick={handleLogout}
          >
            Выйти
          </Button>

          <Title order={2} ta="center" mb="lg">
            Вход
          </Title>

          {error && (
            <Alert
              color="red"
              mb="md"
              onClose={() => setError(null)}
              withCloseButton
            >
              {error}
            </Alert>
          )}

          <Tabs
            value={step}
            onChange={(value) => {
              setStep(value as AuthStep);
              resetForm();
            }}
          >
            <Tabs.List grow mb="md">
              <Tabs.Tab value="email-code">По email и код</Tabs.Tab>
              <Tabs.Tab value="email">Востановить код по email</Tabs.Tab>
              <Tabs.Tab value="register">Регистрация</Tabs.Tab>
              <Tabs.Tab value="anonymous">Без регистрации</Tabs.Tab>
              {/*}  <Tabs.Tab value="admin">Администратор</Tabs.Tab>*/}
            </Tabs.List>
            {/*  Email + Code */}
            <Tabs.Panel value="email-code">
              <Stack>
                <>
                  <TextInput
                    label="Email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <PasswordInput
                    label="Код подтверждения"
                    placeholder="123456"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />

                  <Button
                    fullWidth
                    onClick={handleVerifyCode}
                    loading={isLoading}
                  >
                    Войти
                  </Button>
                </>
              </Stack>
            </Tabs.Panel>

            {/* Send Code with Email  */}
            <Tabs.Panel value="email">
              <Stack>
                {!codeSent ? (
                  <>
                    <TextInput
                      label="Email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button
                      fullWidth
                      onClick={handleRequestCode}
                      loading={isLoading}
                    >
                      Получить код
                    </Button>
                  </>
                ) : (
                  <>
                    <Text size="sm" c="dimmed">
                      Код отправлен на {email}
                    </Text>
                    <PasswordInput
                      label="Код подтверждения"
                      placeholder="123456"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      required
                    />
                    <Button
                      fullWidth
                      onClick={handleVerifyCode}
                      loading={isLoading}
                    >
                      Войти
                    </Button>
                    <Button
                      variant="subtle"
                      fullWidth
                      onClick={() => setCodeSent(false)}
                    >
                      Изменить email
                    </Button>
                  </>
                )}
              </Stack>
            </Tabs.Panel>

            {/* Registration */}
            <Tabs.Panel value="register">
              <Stack>
                <Text size="sm" c="dimmed" mb="xs">
                  При регистрации вводите достоверные данные
                </Text>
                <Button fullWidth onClick={handleRegister} loading={isLoading}>
                  Начать регистрацию
                </Button>
              </Stack>
            </Tabs.Panel>

            {/* Anonymous Login with Code */}
            <Tabs.Panel value="anonymous">
              <Stack>
                <Text size="sm" c="dimmed" mb="xs">
                  Введите код для анонимного входа
                </Text>
                <PasswordInput
                  label="Код доступа"
                  placeholder="Введите код"
                  value={anonymousCode}
                  onChange={(e) => setAnonymousCode(e.target.value)}
                  required
                />
                <Button
                  fullWidth
                  onClick={handleAnonymousLogin}
                  loading={isLoading}
                >
                  Войти анонимно
                </Button>
              </Stack>
            </Tabs.Panel>
            {/* Admin Login with Code */}
            {/*   <Tabs.Panel value="admin">
              <Stack>
                <Text size="sm" c="dimmed" mb="xs">
                  Введите код для входа администратора
                </Text>
                <PasswordInput
                  label="Код доступа"
                  placeholder="Введите код"
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                  required
                />
                <Button
                  fullWidth
                  onClick={handleAdminLogin}
                  loading={isLoading}
                >
                  Войти как администратор
                </Button>
              </Stack>
            </Tabs.Panel> */}
          </Tabs>
        </Paper>
      </Container>
    </MantineProvider>
  );
}
