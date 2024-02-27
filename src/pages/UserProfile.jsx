import React, { useState } from "react";
import axios from "axios";

const UserProfile = ({ user }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChangePasswordClick = async () => {
    try {
      if (newPassword !== confirmNewPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      const response = await axios.post(`${process.env.API_URL}/api/users/changePassword`, {
        userId: user.id_usuario,
        newPassword: newPassword
      });

      console.log(response.data);
      alert("Contraseña cambiada exitosamente");
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      alert("Hubo un error al cambiar la contraseña. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  return (
    <div className="user-profile-container">
      <h1>Mi cuenta</h1>
      <div className="account-information">
        <h2>Información de cuenta</h2>
        <p>
          <strong>Nombre de usuario:</strong> {user.nombre} {user.apellido}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <div className="change-password-section">
          <h2>Cambiar Contraseña</h2>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Nueva Contraseña"
          />
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Confirmar Nueva Contraseña"
          />
          <button onClick={handleChangePasswordClick}>Cambiar Contraseña</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
