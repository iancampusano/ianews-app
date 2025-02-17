const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
  });
  module.exports = withPWA({
    reactStrictMode: true,
  });

  /** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;
  

  import { useState, useEffect } from 'react';

  export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
  
    return (
      <nav className="p-4 bg-white dark:bg-gray-800">
        <button onClick={() => setDarkMode(!darkMode)} className="text-black dark:text-white">
          {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </nav>
    );
  }
  