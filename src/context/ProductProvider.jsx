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

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[id];
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
    const cartTotal = formatCurrency(calculateTotal());
    return <span>Total: {cartTotal}</span>;
  };

  const GetTotalProductCount = () => {
    const totalCount = Object.values(cart).reduce(
      (acc, count) => acc + count,
      0
    );
    return <span>Total Products: {totalCount}</span>;
  };

  const handleAddToCart = (product) => {
    const { id, ...rest } = product;
    addToCart({ ...rest, id: id ? id.toString() : "" });
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
