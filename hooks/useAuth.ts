"use client"; // 👈 Asegurar que sea un componente del cliente

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
      const response = await axios.post(API_URL, { username, password });

      if (response.data.token) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        console.log("✅ Autenticación exitosa");
      } else {
        throw new Error("No se recibió un token válido");
      }
    } catch (err: any) {
      console.error("❌ Error al iniciar sesión:", err);
      setError("No se pudo iniciar sesión. Verifica tu conexión.");
    }
  };

  return { token, login, error };
};

export default useAuth;
