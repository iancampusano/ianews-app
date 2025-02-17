"use client"; // Asegura que sea un componente del cliente

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://7hnh1g8jhc.execute-api.us-east-1.amazonaws.com/dev/api/auth/login";

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
      
      // ✅ Asegurar que la URL de la API es correcta
      const response = await axios.post(API_URL, { username, password }, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // ⏳ Asegura que no se quede colgado indefinidamente
        withCredentials: false, // 🔹 Evita problemas con cookies y CORS
      });

      if (response.status === 200 && response.data.token) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        console.log("✅ Autenticación exitosa:", response.data.token);
      } else {
        throw new Error("No se recibió un token válido.");
      }
    } catch (err: any) {
      if (err.response) {
        console.error("❌ Error en la respuesta del servidor:", err.response.status, err.response.data);
        setError(`Error del servidor: ${err.response.status}`);
      } else if (err.request) {
        console.error("❌ No se recibió respuesta del servidor. Reintentando...");
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
