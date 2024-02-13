import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import LoginPage from '../pages/Login'
import RegisterPage from '../pages/Register'
import GalleryPage from '../pages/ProductsGallery'
import CreateProduct from '../pages/CreateProduct'
import EditProduct from '../pages/EditProduct'

const AppRouter = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/registro" element={<RegisterPage />} />
    <Route path="/productos" element={<GalleryPage />} />
    <Route path="/productos/:id" element={<Home />} />
    <Route path="/crear" element={<CreateProduct />} />
    <Route path="/editar" element={<EditProduct />} />
    <Route path="/cart" element={<Home />} />
    <Route path="/*" element={<Home />} />
  </Routes>
  )
}

export default AppRouter