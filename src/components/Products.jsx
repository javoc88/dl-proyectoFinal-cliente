import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { useContext } from "react";
// import { Context } from "../context/Context";
import { Link } from "react-router-dom";
// import { PopUp } from "./PopUp";
import { Cart } from "react-bootstrap-icons";

const Products = () => {
  const {
    products,
    handleAddToCart,
    handleClosePopUp,
    showPopUp,
    formatCurrency,
  } = useContext(Context);

  return (
    <Container>
      <Row xs={1} sm={2} md={3}>
        {products.slice(0, 6).map((product) => (
          <Col className="mb-4" key={product.name}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.img} alt={product.name} />
              <Card.Body>
                <Card.Title>
                  <h3 className="text-capitalize">{product.name}</h3>
                </Card.Title>
                <div className="card-text text-capitalize">
                  <h5>Ingredientes:</h5>
                  <ul>
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>&#x1F355; {ingredient}</li>
                    ))}
                  </ul>
                </div>
                <Card.Footer className="text-center">
                  <h3>{formatCurrency(product.price)}</h3>
                </Card.Footer>
                <Link to={`/product/${product.id}`}>
                  <Button variant="warning" className="w-100 mb-2">
                    Más detalles 🔍
                  </Button>
                </Link>
                <Button
                  className="w-100"
                  variant="success"
                  onClick={() => handleAddToCart(product)}
                >
                  Añadir <Cart />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* <PopUp show={showPopUp} handleClose={handleClosePopUp} /> */}
    </Container>
  )
}

export default Products