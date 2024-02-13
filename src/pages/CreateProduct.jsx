import React from "react";
import ProductForm from "../components/ProductForm";

const CreateProduct = () => {
  const handleCreate = (formData, mode) => {
    console.log("Formulario con data", formData, "Mode:", mode);

    // Ejemplo con API cuando tengamos back-end
    // axios.post('/api/products', formData)
    //   .then(response => {
    //     console.log('Producto creado!', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error creando el producto', error);
    //   });
  };

  return <ProductForm mode="create" onSubmit={handleCreate} />;
};

export default CreateProduct;
