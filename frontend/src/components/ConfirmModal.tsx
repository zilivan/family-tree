import { Modal, Button, Group, Text, Stack } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

interface ConfirmModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  loading?: boolean;
}

export function ConfirmModal({
  opened,
  onClose,
  onConfirm,
  title = "Подтверждение действия",
  message,
  confirmLabel = "Подтвердить",
  cancelLabel = "Отмена",
  loading = false,
}: ConfirmModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Group gap="xs">
          <IconAlertCircle color="red" />
          <Text fw={600}>{title}</Text>
        </Group>
      }
      centered
    >
      <Stack>
        <Text size="sm">{message}</Text>

        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button color="red" onClick={onConfirm} loading={loading}>
            {confirmLabel}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
