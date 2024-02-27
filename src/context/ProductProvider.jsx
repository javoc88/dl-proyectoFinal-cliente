import { useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";

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
      const res = await fetch(`${process.env.API_URL}/api/productos`);
      const data = await res.json();
      setProducts(data);
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

  // Resto del código sin cambios

  const contextValue = {
    products,
    cart,
    setCart,
    addToCart,
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
