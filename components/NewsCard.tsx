export default function NewsCard({ title, description, image }: { title: string; description: string; image?: string }) {
  console.log("Imagen recibida:", image); // Verifica si la URL llega correctamente

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-64">
      {image && (
        <div className="w-20 h-20 overflow-hidden rounded-md">
          <img src={image} alt={title} className="w-full h-full object-cover" onError={(e) => console.error("Error cargando la imagen:", e)} />
        </div>
      )}
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{description}</p>
    </div>
  );
}
