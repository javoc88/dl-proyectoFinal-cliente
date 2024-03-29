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
    isLoggedIn, // Nuevo estado para verificar si el usuario está logeado
  } = useContext(ProductContext);

  const { id } = useParams();
  const product = products.find((product) => product.id_producto === parseInt(id));

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
              {/* <p>
                <strong>Especificaciones:</strong>
                {Object.entries(product.detalle).map(([key, value]) => {
                  const specName =
                    key === "sistema_operativo"
                      ? "Sistema operativo"
                      : key
                          .split("_")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ");
                  const valueList =
                    typeof value === "object"
                      ? Object.values(value).join(", ")
                      : value;
                  return (
                    <p key={key}>
                      {key === "sistema_operativo" ? (
                        <>
                          {specName}: {valueList}
                        </>
                      ) : (
                        <>
                          {specName}: {valueList}
                        </>
                      )}
                    </p>
                  );
                })}
              </p> */}
              <p>
                <strong>Precio:</strong> {formatCurrency(product.precio)}
              </p>
            </div>
            <div className="float-end">
              {isLoggedIn && ( // Verifica si el usuario está logeado
                <Button
                  variant="primary"
                  className="button-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al Carrito
                </Button>
              )}
              <Button variant="secondary" className="button-cart">
                <Link to="/productos">Ver más productos</Link>
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
