import React from 'react'
import Products from '../components/Products'

const ProductsGallery = () => {
  return (
    <div className="container-home">
      <div className="container text-uppercase">
        <h3><strong>Ofertas por tiempo limitado</strong></h3>
        <Products />
      </div>
    </div>
  )
}

export default ProductsGallery