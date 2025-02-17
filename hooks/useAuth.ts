"use client"; // Asegurar que sea un componente del cliente

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://7hnh1g8jhc.execute-api.us-east-1.amazonaws.com/dev/api/auth/login";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      console.log("🔄 Iniciando sesión...");
      const response = await axiosInstance.post("", { username, password });

      if (response.status === 200 && response.data.token) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        console.log("✅ Autenticación exitosa", response.data.token);
      } else {
        throw new Error("No se recibió un token válido.");
      }
    } catch (err: any) {
      if (err.response) {
        console.error("❌ Error en la respuesta del servidor:", err.response.status, err.response.data);
        setError(`Error del servidor: ${err.response.status}`);
      } else if (err.request) {
        console.error("❌ No se recibió respuesta del servidor.");
        setError("No se pudo conectar con el servidor.");
      } else {
        console.error("❌ Error desconocido:", err.message);
        setError("Ocurrió un error inesperado.");
      }
    }
  };

  return { token, login, error };
};

export default useAuth;
