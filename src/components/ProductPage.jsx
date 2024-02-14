import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductContext from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import PopUp from "./PopUp";

const ProductPage = () => {
  const {
    products,
    handleAddToCart,
    handleClosePopUp,
    showPopUp,
    formatCurrency,
  } = useContext(ProductContext);

  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <div>
        Error 404 <br /> Producto no encontrado
      </div>
    );
  }
  return (
    <div className="pb-5 mb-5">
      <Container className="mt-5">
        <Row>
          <Col className="product-img" md={6}>
            <img
              src={product.img_url}
              alt={product.nombre}
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <div className="product-hero-card">
              <h2 className="mb-4 text-capitalize">{product.nombre}</h2>
              <hr />
              <p>{product.descripcion}</p>
              <p>
                <strong>Especificaciones:</strong> {product.detalle}
              </p>
              <p>
                <strong>Precio:</strong> {formatCurrency(product.precio)}
              </p>
            </div>
            <div className="float-end">
              <Button
                variant="primary"
                className="button-cart"
                onClick={() => handleAddToCart(product)}
              >
                Agregar al Carrito
              </Button>
              <Button variant="secondary" className="button-cart">
                <Link to="/">Ver más productos</Link>
              </Button>
            </div>
          </Col>
        </Row>

        <PopUp show={showPopUp} handleClose={handleClosePopUp} />
      </Container>
    </div>
  );
};

export default ProductPage;
