import { useState, useEffect, useCallback, useRef } from "react";
import { Image, ActionIcon, Modal } from "@mantine/core";
import {
  IconTrash,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import styles from "./PhotoGallery.module.css";

interface PhotoGalleryProps {
  photoUrls: string[];
  photoIds: string[]; // ← нужно для удаления по ID
  editable?: boolean;
  personId: string;
  onPhotoAdd?: (file: File) => Promise<void>;
  onPhotoRemove?: (photoId: string) => Promise<void>;
}

export default function PhotoGallery({
  photoUrls,
  photoIds,
  editable = false,
  personId,
  onPhotoAdd,
  onPhotoRemove,
}: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenPhoto, setFullscreenPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasPhotos = photoUrls.length > 0;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photoUrls.length);
  }, [photoUrls.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photoUrls.length) % photoUrls.length);
  }, [photoUrls.length]);

  const handleDoubleClick = (url: string) => {
    setFullscreenPhoto(url);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onPhotoRemove || photoUrls.length <= 1) return;

    const photoId = photoIds[currentIndex];
    onPhotoRemove(photoId);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onPhotoAdd) {
      onPhotoAdd(file);
      e.target.value = ""; // сброс для повторного выбора того же файла
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (photoUrls.length > 0) {
      setCurrentIndex(0);
    }
  }, [photoUrls.length]);

  if (!hasPhotos) {
    return (
      <div
        style={{
          width: 120,
          height: 120,
          background: "#f0f0f0",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
          fontSize: "12px",
        }}
      >
        Нет фото
      </div>
    );
  }

  const currentPhoto = photoUrls[currentIndex];

  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        <Image
          src={currentPhoto}
          fallbackSrc="/placeholder-person.jpg" // ← лежит в /public/
          alt={`Фото ${currentIndex + 1} из ${photoUrls.length}`}
          width={120}
          height={120}
          fit="cover"
          radius="sm"
          onDoubleClick={() => handleDoubleClick(currentPhoto)}
          style={{ cursor: "zoom-in" }}
        />

        {editable && photoUrls.length > 1 && (
          <ActionIcon
            color="red"
            size="xs"
            style={{
              position: "absolute",
              top: 4,
              right: 4,
              zIndex: 10,
            }}
            onClick={handleRemove}
          >
            <IconTrash size={12} />
          </ActionIcon>
        )}

        {photoUrls.length > 1 && (
          <>
            <ActionIcon
              variant="transparent"
              color="gray"
              size="sm"
              onClick={prev}
              style={{
                position: "absolute",
                left: 4,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <IconChevronLeft size={16} />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              color="gray"
              size="sm"
              onClick={next}
              style={{
                position: "absolute",
                right: 4,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <IconChevronRight size={16} />
            </ActionIcon>
          </>
        )}

        {editable && photoUrls.length < 5 && (
          <>
            <label
              htmlFor="person-photo-upload"
              className={styles.visuallyHidden}
            >
              Загрузить фото персоны
            </label>
            <input
              id="person-photo-upload"
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className={styles.hiddenFileInput}
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={triggerFileInput}
              style={{
                marginTop: "8px",
                fontSize: "12px",
                color: "#1c7ed6",
                background: "none",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              + Добавить фото
            </button>
          </>
        )}

        {editable && photoUrls.length >= 5 && (
          <div
            style={{
              marginTop: "4px",
              fontSize: "11px",
              color: "#999",
              textAlign: "center",
            }}
          >
            Максимум 5 фото
          </div>
        )}
      </div>

      <Modal
        opened={!!fullscreenPhoto}
        onClose={() => setFullscreenPhoto(null)}
        withCloseButton={false}
        fullScreen
      >
        {fullscreenPhoto && (
          <img
            src={fullscreenPhoto}
            alt="Полный экран"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              cursor: "zoom-out",
            }}
            onClick={() => setFullscreenPhoto(null)}
          />
        )}
      </Modal>
    </>
  );
}
