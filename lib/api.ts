const API_BASE_URL = "https://oughzyjcml.execute-api.us-east-1.amazonaws.com/dev/api";

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
