import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = "https://halima-garden-strapi.onrender.com/api";

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

const getProducts = (category) => {
  let url = "/products?populate=*";
  if (category) {
    const encodedCategory = encodeURIComponent(category);
    url += `&filters[category][$eq]=${encodedCategory}`;
  }
  return axiosClient.get(url);
};

const getProductById = (id) =>
  axiosClient.get("/products/" + id + "?populate=*");

const getProductByCategory = (category) =>
  axiosClient.get(
    "/products?filters[category][$eq]=" + category + "&populate=*"
  );

const addToCart = (data) => axiosClient.post("/carts", data);

const getUserCartItems = (email) =>
  axiosClient.get(
    "https://halima-garden-strapi.onrender.com/api/carts?populate[products][populate][0]=image&filters[email][$eq]=" +
      email
  );

const deleteCartItem = (id) => axiosClient.delete("carts/" + id);

const apiMethods = {
  getProducts,
  getProductById,
  getProductByCategory,
  addToCart,
  getUserCartItems,
  deleteCartItem,
};

export default apiMethods;
