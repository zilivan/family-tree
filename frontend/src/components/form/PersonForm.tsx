// src/components/person/PersonForm.tsx
import { useState, useEffect } from 'react';
import { useForm } from '@mantine/form';
//import { useNavigate } from 'react-router-dom';
import {
  TextInput,
  Select,
  Button,
  Group,
  Stack,
  Title,
  Divider,

} from '@mantine/core';
import  PhotoGallery from '../ui/PhotoGallery';
import { PersonSearchSelect } from './PersonSearchSelect';
import { SpouseSelector } from './SpouseSelector';
import { useGetPersonQuery,useCreatePersonMutation ,useUploadPersonMutation } from '../../api/personsApi';
import type { CreatePersonInput} from '../../api/personsApi';

//import type { Person } from '../../types/index';
interface Spouse {
  id: string;
  fullName: string;
}

interface PersonFormProps {
  mode: 'create' | 'edit'|'register';
  personId?: string; // только для edit
  branch: string;
  onSuccess: (errorSave:string) => void;
  onRegisters?:(payload: CreatePersonInput) => void;
  onCancel: () => void;
}

export function PersonForm({
  mode ="edit",
  personId,
  branch,
  onSuccess,
  onRegisters,
  onCancel,
}: PersonFormProps) {

  
  let isEdit = false;
let nameButton: string;

switch (mode) {
  case 'edit':
    isEdit = true;
    nameButton = 'Сохранить';
    break;
  case 'create':
    nameButton = 'Создать';
    break;
  case 'register':
    nameButton = 'Получить код подтверждения';
    break;
  default:
    nameButton = 'Сохранить'; 
}
//const [isAddModalOpen, setIsAddModalOpen] = useState(false);
 const [createPerson] = useCreatePersonMutation();
const [uploadPerson] = useUploadPersonMutation();
  // Для редактирования — загружаем данные
  const {   data: existingPerson } = useGetPersonQuery(
    { id: personId!, branch:'base' },
    { skip: !isEdit || !personId }
  );

 const GENDER_OPTIONS = ['male', 'female', null,undefined ] as const;

 //const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      patronymic: '',
      birthDate: '',
      deathDate: '',
      gender:  "male" as  "male" |"female" | null | undefined ,
      phone: '',
     fatherId: null as string | null,
    motherId: null as string | null,
      photos: [] as string[],
      spouseIds: [] as string[],
    
    },
  });


//const GENDER_OPTIONS = ['male', 'female', null ] as const;
type Gender = typeof GENDER_OPTIONS[number];


  // Заполняем форму при редактировании
  useEffect(() => {
    if (isEdit && existingPerson) {
      form.setValues({
        firstName: existingPerson.firstName,
        lastName: existingPerson.lastName,
        patronymic: existingPerson.patronymic || '',
        birthDate: existingPerson.birthDate ? new Date(existingPerson.birthDate).toISOString().split('T')[0] : '',
        deathDate: existingPerson.deathDate ? new Date(existingPerson.deathDate).toISOString().split('T')[0] : '',
        gender: existingPerson.gender || "male" ,
        phone: existingPerson.phone || '',
       fatherId: existingPerson.fatherId,
       motherId :existingPerson.motherId,
         spouseIds: existingPerson.spouseIds,
        photos: existingPerson.photos.map(p => p.url),
      });
    }
  }, [isEdit, existingPerson]);

  const handleSubmit = async (values: typeof form.values) => {

 let errorSave :string  ='';

    try {
     
      
const safeGender = values.gender && GENDER_OPTIONS.includes(values.gender as any  )
      ? (values.gender as Gender) :  null
     

    const payload: CreatePersonInput = {
       
      ...values ,
    gender:safeGender,

    }

    

      if (mode ==="edit") {
          

        // Обновление
       
    personId = personId ?? '';

   await uploadPerson({
        id: personId,
        data: payload 
               }).unwrap();
              }

       if (mode ==="create") 
        {
        // Создание
        await createPerson(payload).unwrap();
      }
   // Регистрация
if (mode ==="register" && onRegisters !== undefined) {
  
       onRegisters(payload);
}

    } catch (error) {

     
      console.error('Ошибка сохранения:', error);

     errorSave = 'Ошибка сохранения';
    }
    finally{

console.log("save",values)
   onSuccess(errorSave);
    
    }
  };


  return (
    <Stack>
      
      <Title order={3}>{isEdit ? 'Редактировать персону' : 'Добавить персону'}</Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {/* Основные данные */}
          <Group grow>
            <TextInput label="Фамилия" {...form.getInputProps('lastName')} required />
            <TextInput label="Имя" {...form.getInputProps('firstName')} required />
            <TextInput label="Отчество" {...form.getInputProps('patronymic')} required />
          </Group>

          <Group grow>
            <TextInput
              label="Дата рождения"
              type="date"
              {...form.getInputProps('birthDate')}
            />
            <TextInput
              label="Дата смерти"
              type="date"
              {...form.getInputProps('deathDate')}
            />
          </Group>

          <Select
            label="Пол"
            data={[
              { value: "male", label: 'Мужской' },
              { value: "female", label: 'Женский' },
             
            ]}
            {...form.getInputProps('gender')}
          />

          <TextInput label="Телефон" {...form.getInputProps('phone')} />

          <Divider my="sm" label="Семейные связи" />

          {/* Родители */}
          <PersonSearchSelect
  label="Отец"
  value={form.values.fatherId}
  onChange={(val) => form.setFieldValue('fatherId', val)}
  branch={branch}
  excludeIds={isEdit ? [personId!] : []}
  selectGender={'male'} 
/>

<PersonSearchSelect
  label="Мать"
  value={form.values.motherId}
  onChange={(val) => form.setFieldValue('motherId', val)}
  branch={branch}
  excludeIds={isEdit ? [personId!] : []}
  selectGender={'female'}
/>

 <SpouseSelector
      value={form.values.spouseIds}
      onChange={(val) => form.setFieldValue('spouseIds', val)}
      branch={branch}
      excludeIds={isEdit ? [personId!] : []}
      gender = {form.values.gender }

    />
 
          <Divider my="sm" label="Фотографии" />

          {/* Фото */}
          <PhotoGallery
            photoUrls={form.values.photos}
            editable={true}
            onPhotoAdd={(url) => {
              form.setFieldValue('photoUrls', [...form.values.photos, url]);
            }}
            onPhotoRemove={(index) => {
              const updated = [...form.values.photos];
              updated.splice(index, 1);
              form.setFieldValue('photoUrls', updated);
            }}
          />

          <Group justify="flex-end" mt="md">
            <Button variant="default" onClick={onCancel}>
              Отмена
            </Button>
            <Button type="submit">
              {nameButton}
            </Button>
          </Group>
        </Stack>
      </form>
    </Stack>
  );
}