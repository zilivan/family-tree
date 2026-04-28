// frontend/src/utils/photoUrl.ts
let SERVER_URL = import.meta.env.VITE_API_BASE_URL;
if (import.meta.env.MODE === "development") {
  SERVER_URL = "http://localhost:3000";
}
export const getPhotoUrl = (relativePath: string): string => {
  return `${SERVER_URL}/uploads/photos/${relativePath}`;
};

// Утилита для аватара по умолчанию
export const getDefaultAvatar = (): string => {
  return "/placeholder-person.svg";
};
