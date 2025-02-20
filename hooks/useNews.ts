import { useEffect, useState } from "react";
import { fetchNews } from "@/lib/api";

const useNews = (token: string | null) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      setLoading(true);
      const result = await fetchNews(token);
      if (result.success) {
        setNews(result.data);
      } else {
        setError(result.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [token]);

  return { news, loading, error };
};

export default useNews;
