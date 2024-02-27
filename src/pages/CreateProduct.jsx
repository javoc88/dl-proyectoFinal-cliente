import React from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const CreateProduct = () => {
  const handleCreate = (formData, mode) => {
    console.log("Formulario con data", formData, "Mode:", mode);
    axios
      .post(`${process.env.API_URL}/api/products`, formData)
      .then((response) => {
        console.log("Producto creado!", response.data);
      })
      .catch((error) => {
        console.error("Error creando el producto", error);
      });
  };

  return <ProductForm mode="create" onSubmit={handleCreate} />;
};

export default CreateProduct;
