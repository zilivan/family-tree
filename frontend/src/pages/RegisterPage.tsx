import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Title, Alert,Group } from "@mantine/core";
import { useRequestCodeMutation } from "../api/authApi";
import { PersonForm } from '../components/form/PersonForm';
import type { CreatePersonInput} from '../api/personsApi';


export default function RegisterPage() {
  
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [requestCode, { isLoading }] = useRequestCodeMutation();
  const navigate = useNavigate();
const getApiUrl = () => {
    return localStorage.getItem("chat-api-url") || "http://localhost:3000";
  };


  const handleSubmit = async (payload:CreatePersonInput) => {
    
   const { firstName, lastName, patronymic } = payload;
    if (!firstName || !lastName || !patronymic || !email) {
      setError("Имя, фамилия, отчество и email обязательны");
     
      return;
    }
    
     try {
      const response = await fetch(`${getApiUrl()}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...payload,email} ),
      });
const data = await response.json();


      if (!response.ok) {
        throw new Error(data.error || 'Неверный код');
      }
     
  

      setSuccess(true);
      setError(null);
    } catch (err: any) {
      setError(err.data?.error || 'Ошибка при отправке кода');
    }
  };

  if (success) {
    return (
      <div style={{ maxWidth: 400, margin: "2rem auto", padding: "0 1rem" }}>
        <Title order={2} mb="md">
         Запрос отправлен
        </Title>
        <p>
          Мы отправили запрос на подтверждение администратору 
        </p>
        <p>
          После подтверждения код будет отправлен на почту: <strong>{email}</strong>
        </p>
        <Button fullWidth mt="md" onClick={() => navigate("/login")}>
          Перейти к входу
        </Button>
      </div>
    );
  }
  const handleLogout = () => {
   
    navigate("/");
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: "0 1rem" }}>
      <Group justify="space-between" align="center">
      <Title order={2} mb="md">
        Регистрация
      </Title>
       <Button
                      variant="subtle"
                      color="red"
                      size="xs"
                      onClick={handleLogout}
                    >
                      Выйти
                    </Button>
                    </Group>

      {error && (
        <Alert color="red" mb="md">
          {error}
        </Alert>
      )}

 <TextInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb="md"
         required
      />
 <PersonForm 
 onSuccess={()=>{}}
onRegisters= {(payload) =>{handleSubmit(payload) }}
onCancel={()=>{}} 
branch= {"edit"}
 mode={"register"}  
  />

    </div>
  );
}
