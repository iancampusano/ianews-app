import { useState, useEffect } from "react";
import { loginUser } from "../lib/api";

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await loginUser(username, password);

      if (response.token) {
        setToken(response.token);
        localStorage.setItem("token", response.token);
      } else {
        setError("Credenciales inválidas");
      }
    } catch (err) {
      setError("Error en autenticación");
    }
  };

  return { token, login, error };
};

export default useAuth;
