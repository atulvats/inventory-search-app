import axios from "axios";

const BASE_URL = "https://inventory-search-app-fygw.onrender.com";

export const searchProducts = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, { params });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
