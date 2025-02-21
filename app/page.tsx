"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useNews from "../hooks/useNews";
import NewsList from "../components/NewsList";

export default function Home() {
  const { token, login, error: authError } = useAuth();
  const { news, loading, error: newsError } = useNews(token);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    if (!token && !isLoggingIn) {
      setIsLoggingIn(true);
      login("admin", "password123").then(() => setIsLoggingIn(false));
    }
  }, [token, login]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">📰 Últimas Noticias</h1>

      {isLoggingIn && <p>🔄 Iniciando sesión...</p>}
      {authError && <p className="text-red-500">{authError}</p>}
      {loading && <p>🔄 Cargando noticias...</p>}
      {newsError && <p className="text-red-500">{newsError}</p>}

      {!loading && news.length === 0 && !newsError && (
        <p>⚠️ No hay noticias disponibles.</p>
      )}

      {!loading && news.length > 0 && <NewsList news={news} />}
    </div>
  );
}
