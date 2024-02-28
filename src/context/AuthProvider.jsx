import React, { useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = typeof window !== "undefined" && window.location.hostname === "localhost" ? "http://localhost:3001" : process.env.API_URL;

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);

  const handleGetUser = async (userId) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Usuario obtenido!", response.data);
      // Update the user data in the component state
    } catch (error) {
      console.error("Error obteniendo el usuario", error.response.data);
      // Show an error message
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setIsLoggedIn(true);
      setIsAdmin(decoded.role === "admin");
      handleGetUser(decoded.id);
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };

    fetchUsers();
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
    handleGetUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;