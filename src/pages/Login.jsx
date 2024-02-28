import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/login`,
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
          ¿No tienes una cuenta?
          <br />
          Crea una cuenta{" "}
          <Link to="/registro">
            <strong>aquí</strong>
          </Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default LoginPage;
