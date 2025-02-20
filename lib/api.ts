const API_BASE_URL = "https://oughzyjcml.execute-api.us-east-1.amazonaws.com/dev/api";

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Error al iniciar sesión");

    return await response.json();
  } catch (error) {
    console.error("❌ Error en autenticación:", error);
    return { token: null };
  }
};

export const fetchNews = async (token: string) => {
  if (!token) return { success: false, news: [] };

  try {
    const response = await fetch(`${API_BASE_URL}/news`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error("Error al obtener noticias");

    return await response.json();
  } catch (error) {
    console.error("❌ Error al obtener noticias:", error);
    return { success: false, news: [] };
  }
};
