import { useState } from "react";
import { loginUser } from "../lib/api"; // ✅ Verifica que la importación sea correcta

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    setError(null);
    try {
      const response = await loginUser(username, password);
      if (response.token) {
        setToken(response.token);
        localStorage.setItem("token", response.token);
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (err) {
      setError("Error en autenticación");
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return { token, login, logout, error };
};
