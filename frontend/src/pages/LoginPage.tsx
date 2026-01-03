// src/pages/LoginPage.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@mantine/core';
import { useAuth } from '../contexts/AuthContext';
import { MantineProvider } from '../provider/MantineProvider';



type AuthStep =  'email-code'  |'email' | 'register' | 'anonymous';

interface ApiResponse {
  token: string;
  user: {
    id: string;
    email?: string;
    name: string;
    isAnonymous: boolean;
  };
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [anonymousCode, setAnonymousCode] = useState('');
  const [step, setStep] = useState<AuthStep>('email-code');
  const [codeSent, setCodeSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Get API URL from localStorage or use default
  const getApiUrl = () => {
    return localStorage.getItem('chat-api-url') || 'http://localhost:3000';
  };




  const handleRequestCode = async () => {
    if (!email) {
      setError('Пожалуйста, введите email');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${getApiUrl()}/auth/request-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error = 'Ошибка при отправке кода');
      }

      setCodeSent(true);
    } catch (err: any) {
      setError(err.message || 'Ошибка при отправке кода');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!code) {
      setError('Пожалуйста, введите код');

      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${getApiUrl()}/auth/verify-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Неверный код');
      }

      const result: ApiResponse = await response.json();
      login(result.token, result.user);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Неверный код');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!email || !name) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${getApiUrl()}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Ошибка при регистрации');
      }

      const result: ApiResponse = await response.json();
      login(result.token, result.user);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Ошибка при регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnonymousLogin = async () => {
    
    if (!anonymousCode) {
      setError('Пожалуйста, введите код');
      return;
    }

    setIsLoading(true);
    setError(null);

    if ( anonymousCode === "1111") {
      
      navigate('/tree');

    } else { setError('Неверный код');



    }

     setIsLoading(false);

    /*try {








      const response = await fetch(`${getApiUrl()}/auth/anonymous`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: anonymousCode }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Неверный код');
      }

      const result: ApiResponse = await response.json();
      login(result.token, result.user);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Неверный код');
    } finally {
      setIsLoading(false);
    }*/
  };

  const resetForm = () => {
    setError(null);
    setCodeSent(false);
    setCode('');
  };

 
  return (
    <MantineProvider>
      <Container size="xs" py="xl">
      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Title order={2} ta="center" mb="lg">
          Вход в чат
        </Title>

        {error && (
          <Alert color="red" mb="md" onClose={() => setError(null)} withCloseButton>
            {error}
          </Alert>
        )}

        <Tabs value={step} onChange={(value) => { setStep(value as AuthStep); resetForm(); }}>
          <Tabs.List grow mb="md">
            <Tabs.Tab value="email-code">По email и код</Tabs.Tab>
            <Tabs.Tab value="email">По email</Tabs.Tab>
            <Tabs.Tab value="register">Регистрация</Tabs.Tab>
            <Tabs.Tab value="anonymous">Аноним</Tabs.Tab>
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
              <TextInput
                label="Имя"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextInput
                label="Email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                fullWidth
                onClick={handleRegister}
                loading={isLoading}
              >
                Зарегистрироваться
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
        </Tabs>
      </Paper>
    </Container>
    </MantineProvider>
  );
}
