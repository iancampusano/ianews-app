export default function NewsCard({
  title,
  description,
  image,
  source,
}: {
  title: string;
  description: string;
  image?: string;
  source: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full">
      {image && (
        <div className="w-full max-w-xs mx-auto mb-2">
          <img src={image} alt={title} className="w-full h-auto object-cover rounded-md" />
        </div>
      )}
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-1">📰 Fuente: {source}</p> {/* Agregamos la fuente */}
      <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{description}</p>
    </div>
  );
}
