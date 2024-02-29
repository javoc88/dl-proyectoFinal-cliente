import { useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import axios from "axios";

const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);

  const getProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const apiUrl = import.meta.env.VITE_APP_URL;
      const url = `${apiUrl}/api/products`;
      console.log("URL de la solicitud:", url);
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Respuesta de la solicitud:", res.data);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products data:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const formatCurrency = (value) => {
    return formatter.format(value);
  };

  const addToCart = (product) => {
    if (product) {
      const productID = product.id ? product.id.toString() : "";
      setCart((prevCart) => ({
        ...prevCart,
        [productID]: (prevCart[productID] || 0) + 1,
      }));
    } else {
      console.warn(
        "Intento de agregar un producto nula o indefinido al carrito."
      );
    }
  };

  const updateCart = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `${import.meta.env.VITE_APP_URL}/api/cart/update`,
      cart,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setCart(response.data);
  };

  const removeFromCart = async (productID) => {
    const token = localStorage.getItem("token");
    await axios.delete(
      `${import.meta.env.VITE_APP_URL}/api/cart/${productID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[productID];
      return newCart;
    });
  };

  const calculateTotal = () => {
    const total = Object.keys(cart).reduce((acc, productID) => {
      const product = products.find((p) => p.id === productID);
      if (product) {
        return acc + parseFloat(product.precio) * cart[productID];
      }
      return acc;
    }, 0);
    return total.toFixed(2);
  };

  const GetCartTotal = () => {
    const [cartTotal, setCartTotal] = useState(0);
    const token = localStorage.getItem("token");
    useEffect(() => {
      const fetchCartTotal = async () => {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/cart/total`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCartTotal(response.data.total);
      };
      if (token) {
        fetchCartTotal();
      }
    }, [token]);
    const cartTotalFormatted = formatCurrency(cartTotal);
    return <span>Total: {cartTotalFormatted}</span>;
  };

  const GetTotalProductCount = () => {
    const totalCount = Object.values(cart).reduce(
      (acc, count) => acc + count,
      0
    );
    return <span>Total Products: {totalCount}</span>;
  };

  const handleAddToCart = async (product) => {
    const { id, ...rest } = product;
    const productID = id ? id.toString() : "";

    // Add the item to the cart in the backend
    const token = localStorage.getItem("token");
    await axios.post(
      `${import.meta.env.VITE_APP_URL}/api/cart/addItem`,
      { productID, quantity: 1 },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Add the item to the cart in the frontend
    addToCart({ ...rest, id: productID });
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const contextValue = {
    products,
    cart,
    setCart,
    addToCart,
    updateCart,
    removeFromCart,
    calculateTotal,
    showPopUp,
    handleAddToCart,
    handleClosePopUp,
    formatCurrency,
    GetCartTotal,
    GetTotalProductCount,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
