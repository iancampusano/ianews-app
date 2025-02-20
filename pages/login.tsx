import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    await login(username, password);
    if (!error) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
        <input
          type="text"
          placeholder="Usuario"
          className="mt-3 p-2 border rounded w-full"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="mt-3 p-2 border rounded w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="mt-4 bg-blue-600 text-white p-2 rounded w-full">
          Entrar
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}
