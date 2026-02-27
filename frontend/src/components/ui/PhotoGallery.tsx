// src/components/PhotoGallery.tsx
import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Image } from "@mantine/core";
import PhotoModal from "../PhotoModal";
import styles from "./PhotoGallery.module.css";
import type { Photo } from "../../types/index";

interface PhotoGalleryProps {
  editable?: boolean; // ← управляет возможностью редактирования
  borderColor?: string;
  photoObjects?: Photo[]; // ← добавьте ID фото
  onPhotoRemove?: (photoId: string) => void;
  onPhotoAdd?: (file: File) => void;
  onPhotoRestore?: (photoId: string) => void;
}

export default function PhotoGallery({
  editable = false,
  borderColor = "201, 186, 186",
  photoObjects = [],
  onPhotoAdd,
  onPhotoRemove,
  onPhotoRestore,
}: PhotoGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fullscreenPhoto, setFullscreenPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasPhotos = photoObjects.length > 0;

  const handleDoubleClick = (url: string) => {
    setFullscreenPhoto(url);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onPhotoAdd) {
      onPhotoAdd(file);
      e.target.value = ""; // сброс для повторного выбора
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = (index: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPhotoRemove && photoObjects[index]) {
      onPhotoRemove(photoObjects[index].id);
    }
  };
  const handleRestore = (index: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPhotoRestore && photoObjects[index]) {
      onPhotoRestore(photoObjects[index].id);
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        {!hasPhotos ? (
          <div
            style={{
              width: 120,
              height: 120,
              background: "#f0f0f0",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgb(#999)",
              fontSize: "12px",
            }}
          >
            Нет фото
          </div>
        ) : (
          <div
            ref={emblaRef}
            style={{
              overflow: "hidden",
              borderRadius: "15px",
              border: `5px solid rgba(${borderColor}, 0.4)`,
              boxShadow: `0px 0px 20px rgba(${borderColor}, 0.8)`,
            }}
          >
            <div style={{ display: "flex" }}>
              {/* Масив фото */}

              {photoObjects.map((photo, index) => (
                <div
                  key={photo.id}
                  style={{
                    flex: "0 0 100%",
                    position: "relative",
                    minWidth: "0",
                  }}
                >
                  <Image
                    src={photo.url}
                    fallbackSrc="public/assets/placeholder-person.svg"
                    alt="Фото персоны"
                    fit="cover"
                    onClick={() => handleDoubleClick(photo.url)}
                    style={{
                      cursor: "zoom-in",
                      width: "100%",
                      height: "100%",
                      opacity: photo.isDeleted ? 0.5 : 1,
                      filter: photo.isDeleted ? "grayscale(100%)" : "none",
                    }}
                  />
                  {/* Кнопка удаления ТОЛЬКО если editable */}
                  {editable && onPhotoRemove && !photo.isDeleted && (
                    <button
                      type="button"
                      onClick={handleRemove(index)}
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.8)",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                      }}
                      aria-label="Удалить фото"
                    >
                      <span style={{ color: "#ff6b6b", fontSize: "20px" }}>
                        Х
                      </span>
                    </button>
                  )}
                  {/* Кнопка восстановления для удалённых фото */}
                  {editable && onPhotoRestore && photo.isDeleted && (
                    <button
                      type="button"
                      onClick={handleRestore(index)}
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.8)",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                      }}
                      aria-label="Восстановить фото"
                    >
                      <span
                        style={{
                          color: "#4caf50",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        ↻
                      </span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Индикаторы */}
        {photoObjects.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 6,
              zIndex: 20,
            }}
          >
            {photoObjects.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor:
                    index === selectedIndex ? "#fff" : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  padding: 0,
                }}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Кнопка добавления ТОЛЬКО если editable */}
        {editable && onPhotoAdd && photoObjects.length < 5 && (
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

        {editable && photoObjects.length >= 10 && (
          <div
            style={{
              marginTop: "4px",
              fontSize: "11px",
              color: "#999",
              textAlign: "center",
            }}
          >
            Максимум 10 фото
          </div>
        )}
      </div>

      <PhotoModal
        fullscreenPhoto={fullscreenPhoto}
        onClose={() => setFullscreenPhoto(null)}
        backColor={borderColor}
      />
    </>
  );
}
