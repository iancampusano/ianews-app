import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://wse2o9vay1.execute-api.us-east-1.amazonaws.com/dev/api/auth/login";

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(API_URL, { username, password });

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
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
