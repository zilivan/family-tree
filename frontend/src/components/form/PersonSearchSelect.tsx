import { useState, useMemo } from "react";
import { Select } from "@mantine/core";
import { IconSearch, IconChevronDown } from "@tabler/icons-react";
import { useDebouncedValue } from "@mantine/hooks";
import { useSearchPersonsQuery } from "../../api/personsApi";

interface PersonSearchSelectProps {
  label?: string;
  value: string | null;
  onChange: (value: string | null) => void;
  branch: string;
  excludeIds?: string[];
  selectGender: string | null;
  showSearchIcon?: boolean;
  showplaceholder?: string;
}

export function PersonSearchSelect({
  label,
  value,
  onChange,
  branch,
  excludeIds = [],
  selectGender,
  showSearchIcon = false,
  showplaceholder = "Начните вводить ФИО...",
}: PersonSearchSelectProps) {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, 300);

  const { data = [] } = useSearchPersonsQuery(
    { query: debouncedSearch, branch, selectGender },
    { skip: !debouncedSearch.trim() },
  );

  // Фильтруем результаты поиска
  const filteredPersons = useMemo(
    () => data.filter((p) => !excludeIds.includes(p.id)),
    [data, excludeIds],
  );

  // Создаём данные для Select
  const selectData = useMemo(
    () =>
      filteredPersons.map((person) => ({
        value: person.id,
        label:
          `${person.lastName} ${person.firstName} ${person.patronymic || ""}  ${person.birthDate ? new Date(person.birthDate).getFullYear() + "г.р." : ""}  `.trim(),
      })),
    [filteredPersons],
  );
  const handleChange = (value: string | null) => {
    // Если значение пустое или undefined — передаём null
    onChange(value || null);
  };

  return (
    <Select
      label={label}
      placeholder={showplaceholder}
      searchable
      clearable
      data={selectData}
      value={value}
      onChange={handleChange}
      onSearchChange={setSearch}
      maxDropdownHeight={200}
      rightSection={
        showSearchIcon ? <IconSearch size={16} /> : <IconChevronDown />
      }
    />
  );
}
