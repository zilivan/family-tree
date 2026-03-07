export const getApiBaseUrl = (): string => {
  // 1. Приоритет: переменная из .env (для продакшена)
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }

  // 2. Fallback: определяем по домену
  const host = window.location.hostname;

  // Если фронтенд запущен на Render
  if (host.includes("onrender.com")) {
    return "https://family-tree-api.onrender.com";
  }

  // Если фронтенд на Vercel/Netlify
  if (host.includes("vercel.app") || host.includes("netlify.app")) {
    return "https://family-tree-api.onrender.com";
  }

  // Локальная разработка
  if (host === "localhost" || host === "127.0.0.1") {
    return "http://localhost:3000";
  }

  // Дефолтный адрес
  return "https://family-tree-api.onrender.com";
};

export const API_BASE_URL = getApiBaseUrl();
