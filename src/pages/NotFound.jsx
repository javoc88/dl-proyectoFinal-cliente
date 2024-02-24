import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container fluid className="container-404">
      <h1>Error 404</h1>
      <p>Página no encontrada</p>
      <br />
      <Link to="/">
        <Button variant="secondary">Volver al inicio</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
