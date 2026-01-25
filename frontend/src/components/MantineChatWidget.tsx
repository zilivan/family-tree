import React, { useState, useEffect, useRef } from "react";
import {
  Paper,
  TextInput,
  Button,
  Text,
  Stack,
  Group,
  Avatar,
  ActionIcon,
  Box,
  ScrollArea,
  Loader,
  Badge,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface Message {
  id: string;
  text: string;
  userName: string;
  isGuest: boolean;
  createdAt: string;
}

interface MantineChatWidgetProps {
  currentUser?: {
    id: string;
    name: string;
    isGuest: boolean;
  };
}

const generateGuestName = (): string => {
  const adjectives = ["Веселый", "Умный", "Быстрый", "Храбрый", "Мудрый"];
  const nouns = ["Гость", "Путник", "Странник", "Посетитель", "Друг"];
  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNum = Math.floor(Math.random() * 1000);
  return `${randomAdj}${randomNoun}${randomNum}`;
};

const getOrCreateGuestName = (): string => {
  const stored = localStorage.getItem("chat_guest_name");
  if (stored) return stored;
  const newName = generateGuestName();
  localStorage.setItem("chat_guest_name", newName);
  return newName;
};

export const MantineChatWidget: React.FC<MantineChatWidgetProps> = ({
  currentUser,
}) => {
  const [isOpen, { toggle }] = useDisclosure(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const user = currentUser || {
    id: "guest-" + getOrCreateGuestName(),
    name: getOrCreateGuestName(),
    isGuest: true,
  };
  const apiUrl = "http://localhost:3000";
  // Fetch messages from API
  const fetchMessages = async () => {
    if (!apiUrl) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiUrl}/messages`);
      if (!response.ok) throw new Error("Ошибка загрузки сообщений");
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка сети");
    } finally {
      setIsLoading(false);
    }
  };

  // Send message to API
  const sendMessage = async () => {
    if (!newMessage.trim() || !apiUrl) return;

    setIsSending(true);
    setError(null);

    try {
      const response = await fetch(`${apiUrl}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: newMessage.trim(),
          userName: user.name,
          isGuest: user.isGuest,
        }),
      });

      if (!response.ok) throw new Error("Ошибка отправки сообщения");

      const savedMessage = await response.json();
      setMessages((prev) => [...prev, savedMessage]);
      setNewMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка отправки");
    } finally {
      setIsSending(false);
    }
  };

  // Poll for new messages
  useEffect(() => {
    if (isOpen && apiUrl) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 3000);
      return () => clearInterval(interval);
    }
  }, [isOpen, apiUrl]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInitials = (name: string) => {
    return name.slice(0, 2).toUpperCase();
  };

  if (!isOpen) {
    return (
      <ActionIcon
        onClick={toggle}
        size={60}
        radius="xl"
        variant="filled"
        color="blue"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          zIndex: 1000,
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      </ActionIcon>
    );
  }

  return (
    <Paper
      shadow="xl"
      radius="lg"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 380,
        height: 520,
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        style={{
          background: "linear-gradient(135deg, #228be6, #15aabf)",
          padding: "16px",
          color: "white",
        }}
      >
        <Group justify="space-between">
          <Group gap="sm">
            <Text fw={600} size="lg">
              Чат
            </Text>
            <Badge size="sm" variant="light" color="white">
              {user.isGuest ? "Гость" : "Авторизован"}
            </Badge>
          </Group>
          <ActionIcon onClick={toggle} variant="subtle" color="white" size="lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </ActionIcon>
        </Group>
        <Text size="sm" opacity={0.9} mt={4}>
          {user.name}
        </Text>
      </Box>

      {/* Messages */}
      <ScrollArea
        style={{ flex: 1, padding: "12px" }}
        viewportRef={scrollAreaRef}
      >
        {!apiUrl ? (
          <Box ta="center" py="xl">
            <Text c="dimmed" size="sm">
              Укажите URL вашего API сервера
            </Text>
          </Box>
        ) : isLoading && messages.length === 0 ? (
          <Box ta="center" py="xl">
            <Loader size="sm" />
            <Text c="dimmed" size="sm" mt="sm">
              Загрузка сообщений...
            </Text>
          </Box>
        ) : error ? (
          <Box ta="center" py="xl">
            <Text c="red" size="sm">
              {error}
            </Text>
            <Button size="xs" variant="light" mt="sm" onClick={fetchMessages}>
              Повторить
            </Button>
          </Box>
        ) : messages.length === 0 ? (
          <Box ta="center" py="xl">
            <Text c="dimmed" size="sm">
              Нет сообщений. Начните общение!
            </Text>
          </Box>
        ) : (
          <Stack gap="md">
            {messages.map((message) => {
              const isOwn = message.userName === user.name;
              return (
                <Group
                  key={message.id}
                  align="flex-start"
                  justify={isOwn ? "flex-end" : "flex-start"}
                  gap="xs"
                >
                  {!isOwn && (
                    <Avatar
                      size="sm"
                      radius="xl"
                      color={message.isGuest ? "gray" : "blue"}
                    >
                      {getInitials(message.userName)}
                    </Avatar>
                  )}
                  <Box
                    style={{
                      maxWidth: "75%",
                      padding: "10px 14px",
                      borderRadius: isOwn
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                      background: isOwn
                        ? "linear-gradient(135deg, #228be6, #15aabf)"
                        : "#f1f3f5",
                      color: isOwn ? "white" : "inherit",
                    }}
                  >
                    {!isOwn && (
                      <Text size="xs" fw={600} mb={4} opacity={0.8}>
                        {message.userName}
                        {message.isGuest && (
                          <Text span size="xs" c="dimmed" ml={4}>
                            (гость)
                          </Text>
                        )}
                      </Text>
                    )}
                    <Text size="sm">{message.text}</Text>
                    <Text size="xs" ta="right" mt={4} opacity={0.7}>
                      {formatTime(message.createdAt)}
                    </Text>
                  </Box>
                  {isOwn && (
                    <Avatar size="sm" radius="xl" color="blue">
                      {getInitials(user.name)}
                    </Avatar>
                  )}
                </Group>
              );
            })}
          </Stack>
        )}
      </ScrollArea>

      {/* Input */}
      <Box
        style={{
          padding: "12px 16px",
          borderTop: "1px solid #e9ecef",
          background: "#f8f9fa",
        }}
      >
        <Group gap="sm">
          <TextInput
            flex={1}
            placeholder="Введите сообщение..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={!apiUrl || isSending}
            radius="xl"
            styles={{
              input: {
                border: "1px solid #dee2e6",
              },
            }}
          />
          <ActionIcon
            size={40}
            radius="xl"
            variant="filled"
            color="blue"
            onClick={sendMessage}
            disabled={!newMessage.trim() || !apiUrl || isSending}
            loading={isSending}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </ActionIcon>
        </Group>
      </Box>
    </Paper>
  );
};

export default MantineChatWidget;
