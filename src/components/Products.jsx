import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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
  } = useContext(ProductContext);

  return (
    <Container>
      <Row xs={1} sm={2} md={4}>
        {products.slice(0, 8).map((product) => (
          <Col className="mb-4" key={product.nombre}>
            <Card className="product-card">
              <Card.Img
                variant="top"
                src={product.img_url}
                alt={product.nombre}
              />
              <Card.Body>
                <Card.Title>
                  <h3 className="text-capitalize">{product.nombre}</h3>
                </Card.Title>
                <Card.Footer className="text-center">
                  <h3>{formatCurrency(product.precio)}</h3>
                </Card.Footer>
                <Link to={`/product/${product.id}`}>
                  <Button variant="secondary" className="w-100 mb-2">
                    Más detalles 🔍
                  </Button>
                </Link>
                <Button
                  className="w-100"
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Añadir <Cart />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <PopUp show={showPopUp} handleClose={handleClosePopUp} />
    </Container>
  );
};

export default Products;
