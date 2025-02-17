import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="p-4 bg-white dark:bg-gray-800 flex justify-between items-center">
      <button onClick={() => setDarkMode(!darkMode)} className="text-black dark:text-white">
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
      <button onClick={logout} className="text-red-500">Cerrar sesión</button>
    </nav>
  );
}
