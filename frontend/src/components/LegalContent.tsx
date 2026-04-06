import { Checkbox, Text, Group, List } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface LegalContentProps {
  checked: boolean;
  onChanged: (check: boolean) => void;
}

export function LegalContent({ checked, onChanged }: LegalContentProps) {
  const navigate = useNavigate();

  return (
    <Checkbox
      checked={checked}
      onChange={(e) => onChanged(e.currentTarget.checked)}
      label={
        <Group justify="center">
          <Text size="sm" c="dimmed" mb="xs">
            Я подтверждаю, что:
          </Text>
          <List
            size="sm"
            spacing="xs"
            icon={
              <Text span c="dimmed" size="sm">
                •
              </Text>
            }
          >
            <List.Item>
              Предоставляю данные о себе и родственниках{" "}
              <strong>добровольно</strong> и несу ответственность за их
              достоверность
            </List.Item>
            <List.Item>
              Осознаю, что это <strong>закрытое сообщество</strong>, доступное
              только авторизованным участникам
            </List.Item>
            <List.Item>
              Обязуюсь <strong>не передавать доступ</strong> третьим лицам и не
              распространять данные за пределы платформы
            </List.Item>
          </List>

          <Text
            size="xs"
            c="blue"
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              display: "block",
              marginTop: "8px",
              marginLeft: "-30px",
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate("/privacy");
            }}
          >
            Подробнее в Политике конфиденциальности
          </Text>
        </Group>
      }
      required
    />
  );
}
