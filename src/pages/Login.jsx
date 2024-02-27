import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${process.env.API_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      window.location.href = "/productos";

      console.log("Usuario autenticado correctamente");
    } catch (error) {
      console.error("Error al autenticar al usuario:", error.message);
    }
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
          ¿No tienes una cuenta?{" "}
          <a href="/registro">
            Crea una cuenta <strong>aquí</strong>
          </a>
        </Form.Text>
      </Form>
    </div>
  );
};

export default LoginPage;
