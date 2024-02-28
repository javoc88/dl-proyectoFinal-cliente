import React from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";

const EditProduct = ({ productId }) => {
  const handleEdit = async (formData, mode) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/products/${productId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Producto actualizado!", response.data);
      // Redirect to the product page or show a success message
    } catch (error) {
      console.error("Error actualizando el producto", error.response.data);
      // Show an error message
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Producto eliminado!");
      // Redirect to the product list page or show a success message
    } catch (error) {
      console.error("Error eliminando el producto", error.response.data);
      // Show an error message
    }
  };

  return (
    <div>
      <ProductForm mode="edit" onSubmit={handleEdit} />
      <button onClick={handleDelete}>Eliminar producto</button>
    </div>
  );
};

export default EditProduct;
