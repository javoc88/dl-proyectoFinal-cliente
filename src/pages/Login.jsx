import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica del login cuando tengamos el back-end
    console.log(email, password);
    // Por mientras no hay back-end
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Bienvenido/a</h2>
        <p>Inicia sesión con tu email y contraseña</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <div className="login-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Recordar sesión</label>
        </div>
        <button type="submit">Login</button>
        <a href="/registro">¿No tienes una cuenta? Crea una cuenta aquí</a>
      </form>
    </div>
  );
};

export default LoginPage;
