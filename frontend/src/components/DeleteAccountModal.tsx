import { useState } from "react";
import { Modal, Button, Checkbox, Text, Alert, Stack } from "@mantine/core";

interface DeleteAccountModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

function DeleteAccountModal({
  opened,
  onClose,
  onConfirm,
  loading,
}: DeleteAccountModalProps) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="🔒 Удаление аккаунта"
      size="lg"
      closeOnClickOutside={false}
    >
      <Stack gap="md">
        <Alert color="orange" title="Важно">
          <Text size="sm">При удалении аккаунта:</Text>
          <ul style={{ margin: "8px 0 0 16px" }}>
            <li>Ваш email и пароль будут удалены</li>
            <li>Доступ к древу будет потерян</li>
            <li>
              <strong>Данные о родственниках в древе сохранятся</strong> (это
              семейная история)
            </li>
          </ul>
        </Alert>

        <Checkbox
          label="Я понимаю, что мой аккаунт будет удален, а данные в древе сохранены"
          checked={confirmDelete}
          onChange={(e) => setConfirmDelete(e.currentTarget.checked)}
          required
        />

        <Button
          color="red"
          onClick={onConfirm}
          disabled={!confirmDelete || loading}
          loading={loading}
          fullWidth
        >
          Удалить мой аккаунт
        </Button>

        <Button variant="subtle" onClick={onClose} fullWidth>
          Отмена
        </Button>
      </Stack>
    </Modal>
  );
}
export default DeleteAccountModal;
