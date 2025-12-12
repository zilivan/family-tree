// src/App.tsx
import { Routes, Route } from "react-router-dom";
import FamilyViewPage from "./pages/FamilyViewPage";
import PersonPage from "./pages/PersonPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<FamilyViewPage />} />
      <Route path="/person/:id" element={<PersonPage />} />
    </Routes>
  );
}
