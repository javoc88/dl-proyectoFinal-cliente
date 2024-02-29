import React from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import { API_BASE_URL } from "../config/constants.js";

const CreateProduct = () => {
  const handleCreate = async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${API_BASE_URL}/api/products`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Producto creado!", response.data);
      // Redirect to the product page or show a success message
    } catch (error) {
      console.error("Error creando el producto", error.response.data);
      // Show an error message
    }
  };

  return <ProductForm mode="create" onSubmit={handleCreate} />;
};

export default CreateProduct;
