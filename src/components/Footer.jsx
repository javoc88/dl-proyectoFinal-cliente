import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h5>Sección de Información</h5>
            <p>Contacto:</p>
            <ul>
              <li>¿Tienes preguntas o comentarios? ¡Contáctanos!</li>
              <li>Correo Electrónico: info@nexgenlicense.com</li>
              <li>Teléfono: +123 456 7890</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Redes Sociales</h5>
            <p>Conéctate con nosotros:</p>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col className="text-center mt-4">
            <p className="mb-0 text-muted">
              Copyright © 2023 NexGen License. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
