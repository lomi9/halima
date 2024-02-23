import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = "http://localhost:1337/api";

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
    "http://localhost:1337/api/carts?populate[products][populate][0]=image&filters[email][$eq]=" +
      email
  );

const apiMethods = {
  getProducts,
  getProductById,
  getProductByCategory,
  addToCart,
  getUserCartItems,
};

export default apiMethods;
