import React, { useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("users.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch users data");
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error("Error fetching users data:", error);
      });

    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userIsAdmin = localStorage.getItem("isAdmin") === "true";
    setIsLoggedIn(userLoggedIn);
    setIsAdmin(userIsAdmin);
  }, []);

  // Función para iniciar sesión
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
  };

  // Función para establecer el rol de administrador
  const setAdminRole = () => {
    setIsAdmin(true);
    localStorage.setItem("isAdmin", "true");
  };

  const contextValue = {
    isLoggedIn,
    isAdmin,
    users,
    login,
    logout,
    setAdminRole,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
