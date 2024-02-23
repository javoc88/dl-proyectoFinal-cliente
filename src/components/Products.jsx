import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";
import PopUp from "../components/PopUp";

const Products = () => {
  const {
    products,
    handleAddToCart,
    handleClosePopUp,
    showPopUp,
    formatCurrency,
    isLoggedIn, // Nuevo estado para verificar si el usuario está logeado
  } = useContext(ProductContext);

  const [visibleProducts, setVisibleProducts] = useState(8); // Estado para controlar la cantidad de productos visibles
  const [loading, setLoading] = useState(false); // Estado para controlar el estado de carga del botón "Cargar más productos"

  const loadMoreProducts = () => {
    setLoading(true); // Activar el estado de carga al hacer clic en el botón
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4); // Incrementar la cantidad de productos visibles al hacer clic en el botón
      setLoading(false); // Desactivar el estado de carga después de cargar más productos
    }, 1000); // Simulando una carga de 1 segundo antes de mostrar más productos
  };

  return (
    <Container>
      <Row xs={1} sm={2} md={4}>
        {products.slice(0, visibleProducts).map((product) => (
          <Col className="mb-4" key={product.nombre}>
            <Card className="product-card h-100">
              <Card.Img
                variant="top"
                src={product.img_url}
                alt={product.nombre}
              />
              <Card.Body className="d-flex flex-column justify-content-between h-100">
                <div>
                  <Card.Title>
                    <h5 className="text-capitalize">{product.nombre}</h5>
                  </Card.Title>
                  <Card.Footer className="text-center">
                    <h4>CLP {formatCurrency(product.precio)}</h4>
                  </Card.Footer>
                </div>
                <div>
                  <Link to={`/productos/${product.id}`}>
                    <Button variant="secondary" className="w-100 mb-2">
                      Más detalles 🔍
                    </Button>
                  </Link>
                  {isLoggedIn && (
                    <Button
                      className="w-100"
                      variant="primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      Añadir <Cart />
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleProducts < products.length && (
        // Mostrar el botón "Cargar más productos" si hay más productos disponibles para cargar
        <div className="text-center mt-4">
          <Button
            variant="secondary"
            onClick={loadMoreProducts}
            disabled={loading} // Desactivar el botón mientras se está cargando
          >
            {loading ? (
              // Mostrar un spinner de carga si el estado de carga está activo
              <>
                <Spinner animation="border" size="sm" /> Cargando...
              </>
            ) : (
              // Mostrar el texto normal si no se está cargando
              "Cargar más productos"
            )}
          </Button>
        </div>
      )}

      <PopUp show={showPopUp} handleClose={handleClosePopUp} />
    </Container>
  );
};

export default Products;
