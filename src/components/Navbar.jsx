import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Cart } from "react-bootstrap-icons";
import ProductContext from "../context/ProductContext";

const MyNavBar = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="mr-2">
          💻 NextGen Licences
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {isLoggedIn && ( // Verifica si el usuario ha iniciado sesión
              <Nav.Link as={NavLink} to="/cart" className="mr-2">
                <Button variant="outline-light">
                  <Cart />
                  {Object.keys(cart).length > 0 && (
                    <span className="ml-1">{Object.keys(cart).length}</span>
                  )}
                </Button>
              </Nav.Link>
            )}
          </Nav>
          {user ? (
            <>
              <Navbar.Text className="mr-2">{user}</Navbar.Text>
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button variant="outline-light" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
