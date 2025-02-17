"use client"; // 👈 Asegurar que sea un componente del cliente

import { useEffect, useState } from "react";
import axios from "axios";

const API_NEWS = "https://7hnh1g8jhc.execute-api.us-east-1.amazonaws.com/dev/api/news";

const useNews = (token: string | null) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      console.warn("⚠️ No se encontró token. No se pueden obtener noticias.");
      return;
    }

    console.log("🔄 Cargando noticias...");

    const fetchNews = async () => {
      try {
        const response = await axios.get(API_NEWS, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setNews(response.data);
        console.log("✅ Noticias cargadas exitosamente");
      } catch (err: any) {
        console.error("❌ Error al obtener noticias:", err);
        setError("No se pudieron cargar las noticias.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [token]);

  return { news, loading, error };
};

export default useNews;
