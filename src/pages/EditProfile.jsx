import React, { useState } from "react";
import axios from "axios";

const EditProfile = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!newPassword || newPassword !== confirmNewPassword) {
      alert("Las contraseñas no coinciden o están vacías.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.API_URL}/api/users/changePassword`,
        {
          currentPassword,
          newPassword,
        }
      );
      console.log("Contraseña cambiada exitosamente:", response.data.message);
      // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error.message);
      alert("Hubo un error al cambiar la contraseña. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="edit-profile-container">
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <h2>Información de Cuenta</h2>
        <p>Edita tu información de cuenta</p>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Contraseña actual"
          required
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Nueva contraseña"
          required
        />
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          placeholder="Confirmar nueva contraseña"
          required
        />
        <button type="submit">Cambiar contraseña</button>
      </form>
    </div>
  );
};

export default EditProfile;
