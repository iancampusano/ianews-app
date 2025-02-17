import useAuth from '../hooks/useAuth';
import useNews from '../hooks/useNews';

export default function Home() {
  const { token } = useAuth();
  const news = useNews(token);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-5">
      <h1 className="text-3xl font-bold">Noticias Relevantes</h1>
      {news.length > 0 ? (
        news.map((article: any, index: number) => (
          <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow mt-4">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))
      ) : (
        <p className="mt-4">No hay noticias disponibles.</p>
      )}
    </div>
  );
}
