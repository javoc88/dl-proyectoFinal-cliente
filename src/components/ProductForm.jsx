import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";

const ProductForm = ({ mode, product, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    detalle: {
      sistema_operativo: { windows: "", macos: "" },
      procesador: "",
      memoria_ram: "",
      espacio_en_disco: "",
      tarjeta_grafica: "",
      resolucion_de_pantalla: "",
      conexion_a_internet: "",
    },
    img_url: "",
  });

  useEffect(() => {
    if (mode === "edit" && product) {
      setFormData({
        nombre: product.nombre,
        precio: product.precio.toString(),
        descripcion: product.descripcion,
        detalle: { ...product.detalle },
        img_url: product.img_url,
      });
    }
  }, [mode, product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split(".");
    setFormData((prevFormData) => ({
      ...prevFormData,
      detalle: {
        ...prevFormData.detalle,
        [parent]: { ...prevFormData.detalle[parent], [child]: value },
      },
    }));
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Container>
      <h2>{capitalize(`${mode} Producto`)}</h2>
      <form onSubmit={(e) => onSubmit(e, formData, mode)}>
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">
            Nombre del producto
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingrese el nombre del producto"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio" className="form-label">
            Precio del producto
          </label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            placeholder="Ingrese el precio del producto"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion" className="form-label">
            Descripción del producto
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Ingrese la descripción del producto"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Detalles del producto</label>
          {Object.entries(formData.detalle).map(([key, value]) => (
            <div key={key}>
              <label htmlFor={key} className="form-label">
                {capitalize(key.replace(/_/g, " "))}
              </label>
              <input
                type="text"
                id={key}
                name={`detalle.${key}`}
                value={value}
                onChange={handleDetailChange}
                placeholder={`Ingrese ${capitalize(key.replace(/_/g, " "))}`}
                className="form-input"
              />
            </div>
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="img_url" className="form-label">
            URL de la imagen del producto
          </label>
          <input
            type="text"
            id="img_url"
            name="img_url"
            value={formData.img_url}
            onChange={handleChange}
            placeholder="Ingrese la URL de la imagen del producto"
            className="form-input"
          />
          {formData.img_url && (
            <img
              src={formData.img_url}
              alt="Product"
              style={{ width: "100px", height: "100px" }}
            />
          )}
        </div>

        <Button type="submit" variant="primary" className="mt-2 mb-2">
          {mode === "create" ? "Crear producto" : "Editar producto"}
        </Button>
      </form>
    </Container>
  );
};

export default ProductForm;
