"use client"; // ← Añadir esto al inicio

import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useNews from "../hooks/useNews";

export default function Home() {
  const { token, login } = useAuth();
  const { news, error } = useNews(token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      login("admin", "password123");
    }
  }, [token, login]);

  useEffect(() => {
    if (news.length > 0) {
      setLoading(false);
    }
  }, [news]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Últimas Noticias</h1>
      {loading && <p>Cargando noticias...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {news.length === 0 && !loading && <p>No hay noticias disponibles.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((article, index) => (
          <div key={index} className="border p-4 rounded shadow-md">
            <h2 className="font-bold">{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
