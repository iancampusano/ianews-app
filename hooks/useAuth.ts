"use client"; // ← Añadir esto al inicio

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://7hnh1g8jhc.execute-api.us-east-1.amazonaws.com/dev/api/auth/login";

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(API_URL, { username, password });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return { token, login };
};

export default useAuth;
