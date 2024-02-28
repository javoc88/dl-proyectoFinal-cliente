import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.API_URL}/api/users/registro`,
        formData
      );
      console.log("Usuario registrado!", response.data);
      // Redirect to the login page or show a success message
      alert("¡Registro exitoso!");
      navigate("/");
    } catch (error) {
      console.error("Error registrando el usuario", error.response.data);
      // Show an error message
      alert("Hubo un error al registrar usuario");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    handleRegister(formData);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Registro</h2>
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar contraseña"
          required
        />
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
};

export default RegisterPage;
