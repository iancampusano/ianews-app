import { useEffect, useState } from "react";
import { fetchNews } from "../lib/api";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { token, login, error } = useAuth();
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    if (token) {
      fetchNews(token).then((data) => {
        if (data.success) {
          setNews(data.news);
        }
      });
    }
  }, [token]);

  return (
    <div>
      <h1>Noticias</h1>
      {!token && (
        <button onClick={() => login("admin", "password123")}>Iniciar Sesión</button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {news.map((article) => (
          <li key={article.id}>
            <a href={article.link_news} target="_blank" rel="noopener noreferrer">
              <img src={article.link_image} alt={article.title} width={100} />
              <p>{article.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
