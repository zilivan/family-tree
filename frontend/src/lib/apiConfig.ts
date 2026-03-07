export const getApiBaseUrl = (): string => {
  // Приоритет: переменная из .env
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }

  // Fallback по домену
  const host = window.location.hostname;

  if (host.includes("onrender.com")) {
    return "https://family-tree-api.onrender.com";
  }

  if (host === "localhost" || host === "127.0.0.1") {
    return "http://localhost:3000";
  }

  return "https://family-tree-api.onrender.com";
};

export const API_BASE_URL = getApiBaseUrl();
