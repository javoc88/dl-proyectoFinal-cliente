import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Cart } from "react-bootstrap-icons";
import ProductContext from "../context/ProductContext";

const MyNavBar = () => {
  const [user, setUser] = useState(null);
  const { GetCartTotal } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" className="mr-2">
            💻 NextGen Licences
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Navbar.Text>
            <Nav.Link as={Link} to="/cart" className="mr-2">
              <Button variant="outline-light">
                <Cart />
                <GetCartTotal />
              </Button>
            </Nav.Link>
          </Navbar.Text>
          {user ? (
            <Navbar.Text>
              <Nav.Link as={Link} to="/login" className="mr-2">
                <Button variant="outline-light" onClick={handleLogout}>
                  {user}
                </Button>
              </Nav.Link>
            </Navbar.Text>
          ) : (
            <>
              <Navbar.Text>
                <Nav.Link as={Link} to="/login" className="mr-2">
                  <Button variant="outline-light" onClick={handleLogin}>
                    Login
                  </Button>
                </Nav.Link>
              </Navbar.Text>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
