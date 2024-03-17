import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = "http://localhost:1337/api";
//const apiUrl = "https://halima-garden-strapi.onrender.com/api";

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

const addToCart = async (data, email) => {
  const productId = data.data.products;
  const quantity = data.data.quantity || 1; //quantité ajoutée par l'utilisateur

  console.log(
    `Attempting to add product ${productId} with quantity ${quantity}`
  );

  // Récupération du produit pour vérifier le stock
  const productResponse = await axiosClient.get(`/products/${productId}`);
  console.log(productResponse);
  const product = productResponse.data.data.attributes;

  console.log(`Product stock: ${product.stock}`);
  console.log(`Product stockInCart: ${product.stockInCart}`);

  if (product.stock >= quantity) {
    //Mise à jour du stock
    const updatePayload = {
      data: {
        stock: product.stock - quantity,
        stockInCart: (product.stockInCart || 0) + quantity,
      },
    };
    await axiosClient.put(`/products/${productId}`, updatePayload);
    // Ajout du produit au panier

    const cartPayload = {
      data: {
        ...data.data,
        user: email, // Supposons que vous avez un champ 'user' pour l'email dans votre modèle 'Cart'
        addedAt: new Date().toISOString(), // Ajouter la date/heure actuelle
      },
    };

    return axiosClient.post("/carts", cartPayload);
  } else {
    throw new Error("Stock insuffisant");
  }
};

const getUserCartItems = (email) =>
  axiosClient.get(
    "https://halima-garden-strapi.onrender.com/api/carts?populate[products][populate][0]=image&filters[email][$eq]=" +
      email
  );

const deleteCartItem = (id) => axiosClient.delete("carts/" + id);

//Fonction pour gérer la suppression d'un article du panier et la mise à jour du stock
const removeProductFromCart = async (productId, quantity) => {
  // Récupération du produit
  const productResponse = await axiosClient.get(`/products/${productId}`);
  const product = productResponse.data.data.attributes;

  // Vérification pour éviter des nombres négatifs
  const newStockInCart =
    product.stockInCart - quantity < 0 ? 0 : product.stockInCart - quantity;

  // Mise à jour du stock et du stockInCart
  const updatePayload = {
    data: {
      stock: product.stock + quantity,
      stockInCart: newStockInCart,
    },
  };
  await axiosClient.put(`/products/${productId}`, updatePayload);
};

const apiMethods = {
  getProducts,
  getProductById,
  getProductByCategory,
  addToCart,
  getUserCartItems,
  deleteCartItem,
  removeProductFromCart,
};

export default apiMethods;
