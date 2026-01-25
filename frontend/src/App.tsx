// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import PersonPage from "./pages/PersonPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
//import AdminRoute from './components/AdminRoute';
//import AdminPanelPage from './pages/AdminPanelPage';


export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Index />
            </ProtectedRoute>
          }
               />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/person/:id" element={<PersonPage />} />
  
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

/*
 <Route path="/login" element={<LoginPage />} />
       <Route element={<ProtectedRoute />}>
      <Route path="/register" element={<RegisterPage />} />
       <Route path="/tree" element={<FamilyViewPage />} />
      <Route path="/" element={<Index />} />
      <Route path="/person/:id" element={<PersonPage />} />
       </Route>
*/
