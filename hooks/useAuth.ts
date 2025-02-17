import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://7hnh1g8jhc.execute-api.us-east-1.amazonaws.com/dev/api/auth/login';

const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) setToken(storedToken);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const res = await axios.post(API_URL, { username, password });
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
    } catch (error) {
      console.error('Error en login:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return { token, login, logout };
};

export default useAuth;
