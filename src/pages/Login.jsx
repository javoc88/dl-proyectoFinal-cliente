import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ENDPOINT } from "../config/constants.js"; // Importamos ENDPOINT

const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const response = await axios.post(ENDPOINT.login, user);
      console.log("Usuario logueado!", response.data);
      // Store the token in local storage and redirect to the product list page or show a success message
      window.location.href = "/productos";
    } catch (error) {
      console.error("Error iniciando sesión", error.response.data);
      // Show an error message
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError({ email: "", password: "" });

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(user.email)) {
      setError((prevError) => ({ ...prevError, email: "El formato del email no es correcto" }));
      return;
    }

    if (!user.password) {
      setError((prevError) => ({ ...prevError, password: "La contraseña es requerida" }));
      return;
    }

    handleLogin();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <h2>Bienvenido/a</h2>
        <p>Inicia sesión con tu email y contraseña</p>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            required
            isInvalid={!!error.email}
          />
          <Form.Control.Feedback type="invalid">{error.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Contraseña"
            required
            isInvalid={!!error.password}
          />
          <Form.Control.Feedback type="invalid">{error.password}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordar sesión" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Login
        </Button>
        <Form.Text className="text-muted">
          <div className="justify-content-center pt-2">
            <p>
              ¿No tienes una cuenta?
              <br />
              <Link to="/registro">
                <strong>Crea una cuenta aquí</strong>
              </Link>
            </p>
          </div>
        </Form.Text>
      </Form>
    </div>
  );
};

export default LoginPage;
