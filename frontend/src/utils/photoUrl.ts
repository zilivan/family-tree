// frontend/src/utils/photoUrl.ts
const SERVER_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const getPhotoUrl = (relativePath: string): string => {
  // relativePath = "photos/a1b2c3.jpg"
  return `${SERVER_URL}/uploads/photos/${relativePath}`;
};

// Утилита для аватара по умолчанию
export const getDefaultAvatar = (): string => {
  return "/placeholder-person.svg";
};
