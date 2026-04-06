import { Modal } from "@mantine/core";

export default function PhotoModal({
  fullscreenPhoto,
  onClose,
  backColor,
}: {
  fullscreenPhoto: string | null;
  onClose: () => void;
  backColor: string;
}) {
  return (
    <Modal
      opened={!!fullscreenPhoto}
      onClose={onClose}
      withCloseButton={false}
      size="100%" // ← ключевой пропс
      styles={{
        // Убираем отступы
        body: { padding: 0 },
        // Растягиваем модалку на весь экран
        content: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `rgba(${backColor},0.75)`,
          border: "none",
          zIndex: 10000, // ← высокий z-index
        },
        // Убираем тень и фон модалки
        root: { zIndex: 10000 },
      }}
    >
      {fullscreenPhoto && (
        <img
          src={fullscreenPhoto}
          alt="Полный экран"
          style={{
            maxWidth: "95vw",
            maxHeight: "95vh",
            objectFit: "contain",
            cursor: "zoom-out",
          }}
          onClick={onClose}
        />
      )}
    </Modal>
  );
}
