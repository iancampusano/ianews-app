import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { token, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // Guarda la preferencia del usuario
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <nav className="p-4 bg-white dark:bg-gray-800 flex justify-between items-center">
      <button onClick={toggleDarkMode} className="text-black dark:text-white">
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
      {token && <button onClick={logout} className="text-red-500">Cerrar sesión</button>}
    </nav>
  );
}
