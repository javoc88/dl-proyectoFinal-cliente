import React from "react";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const handleEdit = (formData, mode) => {
    console.log("Formulario con data", formData, "Mode:", mode);

    // Ejemplo con API cuando tengamos back-end
    // axios.put('/api/products', formData)
    //   .then(response => {
    //     console.log('Producto editado!', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error editando el producto', error);
    //   });
  };

  return <ProductForm mode="edit" onSubmit={handleEdit} />;
};

export default EditProduct;
