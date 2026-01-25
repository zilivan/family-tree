// src/pages/FamilyViewPage.tsx
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Stack,
  Group,
  ScrollArea,
  ActionIcon,
  TextInput,
  Select,
  Button,
  Modal,
  Paper,
   Alert,
} from '@mantine/core';
import { IconArrowLeft, IconArrowRight, IconSearch, IconPlus } from '@tabler/icons-react';
import PersonCard from '../components/person/PersonCard';
import { PersonForm } from '../components/form/PersonForm';
import { useDebouncedValue } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import {
  useGetFamilyQuery,
  useSearchPersonsQuery,
} from '../api/personsApi';
import type { Person } from '../types/index'
import { useAuth } from "../contexts/AuthContext";



export default function FamilyViewPage() {

 const [searchParams, setSearchParams] = useSearchParams(); 
const branch = searchParams.get('branch') || 'base';
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 599px)');
 const { user } = useAuth();
  const personId = user?.personId;
const [error, setError] = useState<string>('');
  
  
//-----------console.log("brant",branch)
  // Защита от отсутствия personId
  if (!personId) {
    return (
      <Stack p="md" align="center">
        <div>  "Персона не  загружена"
          
          </div>

      </Stack>
    );
  }

  // Запросы
  const {  
     data: baseFamily,
    isLoading: isLoadingBase,
    error: errorBase ,
  
  } = useGetFamilyQuery({ personId, branch: 'base' });



  const {  
     data: editFamily,
    isLoading: isLoadingEdit,
    error: errorEdit ,
   
  } = useGetFamilyQuery(
    { personId, branch: 'edit' },
    { skip: branch !== 'edit' } 
  );

//--------------------console.log(baseFamily)
  // Состояние поиска и модалки

  const [searchQuery, setSearchQuery] = useState('');
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  
  const [debouncedSearch] = useDebouncedValue(searchQuery, 300);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//if (personId) {setPersonIdFormat(personId )}

  const {  data:searchResults = [] } = useSearchPersonsQuery(
    { query: debouncedSearch, branch },
    { skip: !debouncedSearch.trim() }
  );

  // Обработчики
  const handleSelectPerson = (id: string) => {
    setSearchParams({ personId: id, branch });
    setSearchQuery('');
  };



  const handleBranchChange = (value: string | null) => {
    if (value) {
      setSearchParams({ personId, branch: value });
    }
  
  };
 const openModalFormat = (value: string | null, personId:string | null) => {
    if (value ==="create") {
     setMode(value);
      setIsAddModalOpen(true);
      
    }
    if (value ==="edit") {
     setMode(value);
      setIsAddModalOpen(true);
      
    }
    };
  


  const handleAddSuccess = (errorSave:string) => {
    setIsAddModalOpen(false);
    setError(errorSave)
  };

  const handleNavigateTo = (targetPersonId: string) => {
    setSearchParams({ personId: targetPersonId, branch });
  };

  // Определяем детей для отображения

const getChildren = (person: Person | null) => {
  if (!person) return [];
  return person.gender === 'male'
    ? person.childrenAsFather
    : person.gender === 'female'
      ? person.childrenAsMother
      : [...person.childrenAsFather, ...person.childrenAsMother];
};



 /* const getChildren = (person: typeof baseFamily?.currentPerson) => {
    if (!person) return [];
    return person.gender === 'male'
      ? person.childrenAsFather
      : person.gender === 'female'
        ? person.childrenAsMother
        : [...person.childrenAsFather, ...person.childrenAsMother];
  };*/

  // Загрузка
  if (isLoadingBase || (branch === 'edit' && isLoadingEdit)) {
    return <div>Загрузка...</div>;
  }

  if (errorBase) return <div>Ошибка загрузки основной базы</div>;
  if (branch === 'edit' && errorEdit) {
 const  value ="base"
  return (<>
  <div>Ошибка загрузки редактируемой базы</div>
 <Button onClick={() => {handleBranchChange ( value)}}>
            Вернутьса к  основной базе
          </Button>
</>
)}

  if (!baseFamily) return <div>Персона не найдена в основной базе</div>;

  // Текущие данные для отображения

  const currentFamily =  baseFamily ;
  const currentPerson = currentFamily.currentPerson;
  const currentEditFamily =  editFamily ;
  const currentEditPerson = currentEditFamily?.currentPerson;
  // Дети из текущей версии
  const children = getChildren(currentPerson);

  return (
    <Stack p="md" style={{ minHeight: '100vh', alignItems: 'center' }}>
      {/* Верхняя панель */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          background: 'white',
          zIndex: 10,
          padding: '8px 0',
          width: '100%',
          maxWidth: 800,
        }}
      >
        {error && (
                          <Alert
                            color="red"
                            mb="md"
                            onClose={() => setError('')}
                            withCloseButton
                          >
                            {error}
                          </Alert>
                        )}
        <Group justify="center" mb="lg">
          <TextInput
            placeholder="Поиск по имени или фамилии"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            rightSection={<IconSearch size={16} />}
          />
          <Select
            label=""
            data={[
              { value: 'base', label: 'Основная база' },
              { value: 'edit', label: 'Редактируемая база' },
            ]}
            value={branch}
            onChange={handleBranchChange}
            styles={{ input: { textAlign: 'center' } }}
          />
       { branch === "edit"  &&   <Button leftSection={<IconPlus size={16} />} onClick={() => {openModalFormat("create",null)
       }
          }>
            Добавить
          </Button>}
        {/*  <Button leftSection={<IconPlus size={16} />} onClick={() => {
            setMode('edit');
            setIsAddModalOpen(true)}
          }>
           Редактировать
          </Button>*/}
        </Group>

        {/* Выпадающий список поиска */}
        {searchQuery && (
          <div style={{ 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            right: 0, 
            background: 'white',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            zIndex: 20,
            maxHeight: 200,
            overflowY: 'auto',
          }}>
            {searchResults.length > 0 ? (
              searchResults.map((person) => (
                <div
                  key={person.id}
                  onClick={() => handleSelectPerson(person.id)}
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #eee',
                  }}
                >
                  {person.lastName} {person.firstName} {person.patronymic || ''}
                </div>
              ))
            ) : (
              <div style={{ padding: '8px 12px', color: '#666' }}>
                Нет результатов
              </div>
            )}
          </div>
        )}
      </div>

      <ScrollArea style={{ height: 'calc(100vh - 120px)', width: '100%' }}>
        {/* РОДИТЕЛИ (из текущей версии) */}
         <PersonCard
                person={currentPerson}
                typePerson="parent"
                isMobile={isMobile}
                openModalFormat={(value) => openModalFormat(value,personId)}
                handleNavigateUp={() => handleNavigateTo(currentPerson.father!.id)}
                 branch={branch} 
              />
       { (branch === "edit" && currentEditPerson )  && (
              <PersonCard
                person={currentEditPerson}
                typePerson="parent"
                isMobile={isMobile}
                openModalFormat={(value) => openModalFormat(value,personId)}
                handleNavigateUp={() => handleNavigateTo(currentEditPerson.father!.id)}
                 branch={branch} 
              />
       )
       }

        {/* СУПРУГИ */}
        <Paper
          radius="md"
          p="xs"
          withBorder
          style={{
            backgroundColor: branch === 'edit' ? 'rgba(255, 255, 220, 0.7)' : 'white',
            marginBottom: '1rem',
          }}
        >
          <Group
            justify="center"
            style={{
              flexWrap: 'nowrap',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: isMobile ? '1.5rem' : '0.5rem',
            }}
          >
            {currentFamily.husband && (
              <PersonCard
                person={currentFamily.husband}
                handleNavigateUp={() => handleNavigateTo(currentFamily.husband!.id)}
                typePerson="parent"
                isMobile={isMobile}
                openModalFormat={(value) => openModalFormat(value,personId)}
                 branch={branch} 
              />
            )}
            {currentFamily.wife && (
              <PersonCard
                person={currentFamily.wife}
                handleNavigateUp={() => handleNavigateTo(currentFamily.wife!.id)}
                typePerson="parent"
                isMobile={isMobile}
                openModalFormat={(value) => openModalFormat(value,personId)}
                 branch={branch} 
              />
            )}
          </Group>
        </Paper>

        {/* ДЕТИ */}
        <div style={{ width: '100%' }}>
          <Stack gap="md" style={{ alignItems: 'center' }}>
            {children.map((child) => (
              <Paper
                key={child.id}
                radius="md"
                p="xs"
                withBorder
                style={{
                  backgroundColor: branch === 'edit' ? 'rgba(255, 255, 220, 0.7)' : 'white',
                  width: '100%',
                  maxWidth: 300,
                }}
              >
                <PersonCard
                  person={child}
                  typePerson="child"
                  isMobile={isMobile}
                  openModalFormat={(value) => openModalFormat(value,personId)}
                  handleNavigateDown={() => handleNavigateTo(child.id)}
                   branch={branch} 
                />
              </Paper>
            ))}
          </Stack>
        </div>
      </ScrollArea>

      {/* Модалка добавления */}
      <Modal
        opened={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Добавить персону"
        size="lg"
      >
        <PersonForm 
        onSuccess= { (errorSave) => handleAddSuccess(errorSave)}
        onCancel={()=>{}} 
        personId= {personId ? personId :''}
branch= {"edit"}
 mode={ mode} 
        />
      </Modal>
    </Stack>
  );
}