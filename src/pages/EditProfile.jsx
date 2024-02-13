import React, { useState } from "react";

const EditProfile = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newPassword || newPassword !== confirmNewPassword) {
      alert("Las contraseñas no coinciden o esta vacío.");
      return;
    }
    // Lógica de la contraseña dspes con back-end
    console.log(
      "Cambio de contraseña ingresado:",
      currentPassword,
      newPassword
    );
    // Por mientras sin API
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
