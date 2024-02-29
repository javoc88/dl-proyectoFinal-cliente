import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ENDPOINT } from "../config/constants.js"; // Importamos ENDPOINT

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(
        ENDPOINT.login, // Utilizamos la URL del endpoint definida en constants.js
        formData
      );
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
    // Validación de formato de email utilizando expresión regular
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      alert("El formato del email no es correcto");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    handleLogin(formData);
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <h2>Bienvenido/a</h2>
        <p>Inicia sesión con tu email y contraseña</p>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
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
