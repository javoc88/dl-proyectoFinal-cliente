import React, { useState, useEffect } from "react";

const ProductForm = ({ mode, product, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    requirements: "",
    imageURL: "",
  });

  useEffect(() => {
    if (mode === "edit" && product) {
      setFormData({
        name: product.name,
        price: product.price,
        description: product.description,
        requirements: product.requirements,
        imageURL: product.imageURL,
      });
    }
  }, [mode, product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, mode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nombre del producto
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ingrese el nombre del producto"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price" className="form-label">
          Valor del producto
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Ingrese el valor del producto"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Descripción del producto
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Ingrese la descripción del producto"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="requirements" className="form-label">
          Requisitos del producto
        </label>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Ingrese los requisitos del producto"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="image-url" className="form-label">
          URL de la imagen del producto
        </label>
        <input
          type="text"
          id="image-url"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
          placeholder="Ingrese la URL de la imagen del producto"
          className="form-input"
        />
        {formData.imageURL && (
          <img
            src={formData.imageURL}
            alt="Product"
            style={{ width: "100px", height: "100px" }}
          />
        )}
      </div>

      <button type="submit" className="form-button mt-2 mb-2">
        {mode === "create" ? "Crear producto" : "Editar producto"}
      </button>
    </form>
  );
};

export default ProductForm;
