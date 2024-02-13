import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import { CartX } from "react-bootstrap-icons";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    formatCurrency,
    calculateTotal,
    products,
    setCart,
  } = useContext(ProductContext);

  const incrementQuantity = (productID) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productID]: (prevCart[productID] || 0) + 1,
    }));
  };

  const decrementQuantity = (productID) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productID] > 1) {
        newCart[productID] -= 1;
      } else {
        delete newCart[productID];
      }
      return newCart;
    });
  };

  return (
    <div className="container-cart container my-5">
      <h2 className="mb-4">Detalle del pedido:</h2>
      <ListGroup>
        {Object.keys(cart).map((productID) => {
          const product = products.find((p) => p.id === productID);
          const quantity = cart[productID];

          return (
            <ListGroup.Item key={product.id} className="mb-3">
              <div className="d-flex justify-content-between align-items-center text-capitalize">
                <div>
                  <img
                    src={product.img}
                    alt={product.nombre}
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "cover",
                      marginRight: "20px",
                    }}
                  />
                  <span className="h4">{product.nombre}</span>
                </div>
                <div className="button-card">
                  <div className="quantity-buttons">
                    <Button
                      variant="success"
                      className="m-2"
                      onClick={() => incrementQuantity(productID)}
                    >
                      ➕
                    </Button>
                    <h4>{quantity}</h4>
                    <Button
                      variant="danger"
                      className="m-2"
                      onClick={() => decrementQuantity(productID)}
                    >
                      ➖
                    </Button>
                  </div>
                  <h4 className="text-success text-center">
                    {formatCurrency(product.price * quantity)}
                  </h4>
                  <Button
                    variant="danger"
                    className="ml-3"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <CartX />
                    Eliminar
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {Object.keys(cart).length > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h4>
            <strong>Total a pagar: </strong>
            <span className="text-success h2">
              {formatCurrency(parseFloat(calculateTotal()))}
            </span>
          </h4>
          <Button variant="success" className="button-cart">
            💳 Continuar compra
          </Button>
        </div>
      )}
      {Object.keys(cart).length === 0 && (
        <div className="text-center">
          <p>El carrito está vacío. ¿Por qué no agregar un producto?</p>
        </div>
      )}
      <div className="float-end">
        <Button variant="warning" className="button-cart">
          <Link to="/">Ver más productos</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
