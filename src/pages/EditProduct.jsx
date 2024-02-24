import React from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";

const EditProduct = ({ productId }) => {
  const handleEdit = (formData, mode) => {
    console.log("Formulario con data", formData, "Mode:", mode);

    axios
      .put(`/api/products/${productId}`, formData)
      .then((response) => {
        console.log("Producto editado!", response.data);
      })
      .catch((error) => {
        console.error("Error editando el producto", error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`/api/products/${productId}`)
      .then((response) => {
        console.log("Producto eliminado!", response.data);
      })
      .catch((error) => {
        console.error("Error eliminando el producto", error);
      });
  };

  return (
    <div>
      <ProductForm mode="edit" onSubmit={handleEdit} />
    </div>
  );
};

export default EditProduct;
