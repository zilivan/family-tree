import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!; // Только для бэкенда!

export const supabase = createClient(supabaseUrl, supabaseKey);

const BUCKET_NAME = "photos";

/**
 * Загрузка фото в Supabase Storage
 */
export const uploadPhotoToSupabase = async (
  fileBuffer: Buffer,
  originalName: string,
): Promise<string> => {
  // Генерируем уникальное имя файла
  const fileExtension = originalName.split(".").pop() || "jpg";
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 10)}.${fileExtension}`;
  const filePath = `photos/${fileName}`;

  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, fileBuffer, {
      contentType: "image/jpeg",
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Ошибка загрузки в Supabase:", error);
    throw new Error(`Не удалось загрузить фото: ${error.message}`);
  }

  // Получаем публичный URL
  const {
    data: { publicUrl },
  } = supabase.storage.from(BUCKET_NAME).getPublicUrl(filePath);

  return publicUrl;
};

export const deletePhotoFromSupabase = async (
  photoUrl: string,
): Promise<void> => {
  try {
    // Извлекаем путь из публичного URL Supabase
    // Пример URL: https://xxx.supabase.co/storage/v1/object/public/photos/path/to/file.jpg
    const url = new URL(photoUrl);
    const pathParts = url.pathname.split("/storage/v1/object/public/photos/");

    if (pathParts.length < 2) {
      throw new Error("Некорректный URL фото");
    }

    const filePath = pathParts[1];

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([filePath]);

    if (error) {
      console.error("Ошибка удаления из Supabase:", error);
      throw error;
    }
  } catch (error) {
    console.error("Ошибка удаления фото:", error);
    // Не выбрасываем ошибку, чтобы не блокировать удаление из БД
  }
};
