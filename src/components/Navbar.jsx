import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
    <>
      <div className="container-banner d-none d-lg-block">
        <div className="banner-text text-uppercase">
          <p>
            En tu primera compra obtén un descuento del 20% en todos nuestros softwares.{" "}
          </p>
        </div>
      </div>

      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            E-commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Add your other navbar items here */}
            </Nav>
            {user ? (
              <Button variant="outline-light" onClick={handleLogout}>
                {user}
              </Button>
            ) : (
              <>
                <Button variant="outline-light" onClick={handleLogin}>
                  Login
                </Button>
                <Button variant="outline-light">Create Account</Button>
              </>
            )}
            <Button variant="outline-light" onClick={handleAddToCart}>
              <Cart />
              {cartItems > 0 && <span className="ms-2">{cartItems}</span>}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
