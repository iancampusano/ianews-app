import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth"; // ✅ Corrección de importación

export default function Navbar() {
  const { token, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false); // ⬅️ Inicia en modo claro por defecto

  useEffect(() => {
    document.documentElement.classList.remove("dark"); // ⬅️ Asegura que inicia en modo claro
  }, []);

  return (
    <nav className="p-4 bg-white dark:bg-gray-800 flex justify-between items-center">
      <button
        onClick={() => {
          setDarkMode(!darkMode);
          if (darkMode) {
            document.documentElement.classList.remove("dark");
          } else {
            document.documentElement.classList.add("dark");
          }
        }}
        className="text-black dark:text-white"
      >
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
      {token && <button onClick={logout} className="text-red-500">Cerrar sesión</button>}
    </nav>
  );
}
