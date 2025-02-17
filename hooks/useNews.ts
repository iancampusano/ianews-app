"use client"; // ← Añadir esto al inicio

import { useEffect, useState } from "react";
import axios from "axios";

const API_NEWS = "https://7hnh1g8jhc.execute-api.us-east-1.amazonaws.com/dev/api/news";

const useNews = (token: string) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    const fetchNews = async () => {
      try {
        const response = await axios.get(API_NEWS, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNews(response.data);
      } catch (err) {
        setError("Error al obtener noticias");
      }
    };

    fetchNews();
  }, [token]);

  return { news, error };
};

export default useNews;
