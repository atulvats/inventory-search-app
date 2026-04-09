import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const searchProducts = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, { params });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};