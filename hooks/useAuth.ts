import { useState } from "react";
import { loginUser } from "../lib/api";

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

  return { token, login, error };
};
