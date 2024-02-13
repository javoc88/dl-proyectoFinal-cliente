import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Cart } from "react-bootstrap-icons";

const MyNavBar = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState(0);

  const handleLogin = () => {
    // Replace with your login logic
    setUser("User Name");
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
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
            <Button variant="outline-light" onClick={handleAddToCart}>
              <Cart />
              {cartItems > 0 && <span className="ms-2">{cartItems}</span>}
            </Button>
          </Navbar.Text>
          {user ? (
            <Navbar.Text>
              <Button variant="outline-light" onClick={handleLogout}>
                {user}
              </Button>
            </Navbar.Text>
          ) : (
            <>
              <Navbar.Text>
                <Button variant="outline-light" onClick={handleLogin}>
                  Login
                </Button>
              </Navbar.Text>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
