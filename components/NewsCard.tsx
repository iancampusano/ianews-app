export default function NewsCard({ title, description, image }: { title: string; description: string; image?: string }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />}
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-1">{description}</p>
      </div>
    );
  }
  