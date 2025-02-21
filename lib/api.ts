const useNews = (token: string | null) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchNews(token);
        if (result.success) {
          setNews(result.news.map((article: any) => ({
            ...article,
            source: article.source || "Fuente desconocida", // ⬅️ Evita valores nulos
          })));
        } else {
          setError(result.message);
        }
      } catch (err) {
        setError("Error en la carga de noticias");
      }
      setLoading(false);
    };

    fetchData();
  }, [token]);

  return { news, loading, error };
};

export default useNews;
