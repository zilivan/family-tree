import { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Image } from "@mantine/core";
import PhotoModal from "../PhotoModal";

import styles from "./PhotoGallery.module.css";

interface PhotoGalleryProps {
  photoUrls: string[];
  photoIds?: string[]; // ← нужно для удаления по ID
  editable?: boolean;
  personId?: string;
  borderColor?: string;
  onPhotoAdd?: (file: File) => void;
  onPhotoRemove?: (index: number) => void;
}

export default function PhotoGallery({
  photoUrls,
 // photoIds=[],
  editable = false,
  borderColor = "201, 186, 186",
  //personId,
  onPhotoAdd,
 // onPhotoRemove,
}: PhotoGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    // Отключаем drag, если нажатие на элемент с классом 'embla__slide__img'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenPhoto, setFullscreenPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasPhotos = photoUrls.length > 0;

  const handleDoubleClick = (url: string) => {
    setFullscreenPhoto(url);
  };

 /* const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onPhotoRemove || photoUrls.length <= 1) return;

    const photoId = photoIds[currentIndex];
    onPhotoRemove(photoId);
  };*/

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
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // инициализация

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  /* useEffect(() => {
    if (photoUrls.length > 0) {
      setCurrentIndex(0);
    }
  }, [photoUrls.length]);*/

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
          color: "rgb(#999)",
          fontSize: "12px",
        }}
      >
        Нет фото
      </div>
    );
  }

  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        <div
          ref={emblaRef}
          style={{
            overflow: "hidden",
            borderRadius: "15px",

            border: `5px solid rgba(${borderColor} , 0.4 `,

            boxShadow: `0px 0px 20px rgba(${borderColor},  0.8)`,
          }}
        >
          <div style={{ display: "flex" }}>
            {photoUrls.map((url, index) => (
              <div
                key={index}
                style={{
                  flex: "0 0 100%",
                  position: "relative",
                  minWidth: "0",
                }}
              >
                <Image
                  src={url}
                  fallbackSrc="/assets/placeholder-person.jpg" // ← лежит в /public/
                  alt={`нет фото`}
          
                  fit="cover"
                  onClick={() => handleDoubleClick(url)}
                  style={{ cursor: "zoom-in", width: "100%", height: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Точечная индикация */}
        {photoUrls.length > 1 && (
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
            {photoUrls.map((_, index) => (
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

      <PhotoModal
        fullscreenPhoto={fullscreenPhoto}
        onClose={() => setFullscreenPhoto(null)}
        backColor={borderColor}
      />
    </>
  );
}
