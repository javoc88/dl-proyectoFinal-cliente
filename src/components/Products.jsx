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
    isLoggedIn,
  } = useContext(ProductContext);

  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(false);

  const loadMoreProducts = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
      setLoading(false);
    }, 1000);
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
        <div className="text-center mt-4">
          <Button
            variant="secondary"
            onClick={loadMoreProducts}
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm" /> Cargando...
              </>
            ) : (
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
