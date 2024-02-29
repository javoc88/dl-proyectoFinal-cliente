import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ENDPOINT } from "../config/constants.js"; // Importamos ENDPOINT

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // Nuevo estado para el nombre
  const [lastName, setLastName] = useState(""); // Nuevo estado para el apellido
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      const response = await axios.post(
        ENDPOINT.users, // Utilizamos la URL del endpoint definida en constants.js
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
    // Validación de formato de email utilizando expresión regular
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      alert("El formato del email no es correcto");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("nombre", firstName); // Agregar nombre al formulario
    formData.append("apellido", lastName); // Agregar apellido al formulario

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
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Apellido"
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
