import React from "react";

const UserProfile = ({ user }) => {
  // Falta lógica con back-end del cambio de password y desde ahí se saca el prop 'user'. Al lado de nombre usuario y email tiene que ir {user.name} {user.email}
  const handleChangePasswordClick = () => {
    // Por mientras
    console.log("Cambio de contraseña efectuado");
  };

  return (
    <div className="user-profile-container">
      <h1>Mi cuenta</h1>
      <div className="account-information">
        <h2>Información de cuenta</h2>
        <p>
          <strong>Nombre de usuario:</strong> nombre.prueba
        </p>
        <p>
          <strong>Email:</strong> email.prueba
        </p>
        <button onClick={handleChangePasswordClick}>Cambiar Contraseña</button>
      </div>
    </div>
  );
};

export default UserProfile;
