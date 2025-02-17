import { useEffect, useState } from 'react';
import axios from 'axios';

const API_NEWS = 'https://7hnh1g8jhc.execute-api.us-east-1.amazonaws.com/dev/api/news';

const useNews = (token: string | null) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get(API_NEWS, { headers: { Authorization: `Bearer ${token}` } } })
        .then(res => setNews(res.data))
        .catch(err => console.error('Error al obtener noticias:', err));
    }
  }, [token]);

  return news;
};

export default useNews;
