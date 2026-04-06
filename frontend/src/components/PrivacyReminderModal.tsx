import { useState } from "react";
import { Modal, Text, Button, Checkbox } from "@mantine/core";

interface Props {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function PrivacyReminderModal({
  opened,
  onClose,
  onConfirm,
}: Props) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="🔒 Конфиденциальность данных"
      closeOnClickOutside={false}
      withCloseButton={false}
    >
      <Text size="sm" mb="md">
        Вы вошли в закрытое семейное пространство. Пожалуйста, помните:
      </Text>

      <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
        <li style={{ marginBottom: 8 }}>
          Все данные (о вас и родственниках) добавляются{" "}
          <strong>на добровольной основе</strong>
        </li>
        <li style={{ marginBottom: 8 }}>
          Доступ к древу имеют <strong>только подтверждённые участники</strong>
        </li>
        <li>
          <strong>Запрещено</strong> передавать логин/пароль или скриншоты
          третьим лицам
        </li>
      </ul>

      <Checkbox
        label="Я прочитал и принимаю правила конфиденциальности"
        checked={confirmed}
        onChange={(e) => setConfirmed(e.currentTarget.checked)}
        mb="md"
      />

      <Button onClick={onConfirm} disabled={!confirmed} fullWidth>
        Понятно, войти в древо
      </Button>
      <Button variant="subtle" onClick={onClose} fullWidth>
        Отмена
      </Button>
    </Modal>
  );
}
