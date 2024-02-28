import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import GalleryPage from "../pages/ProductsGallery";
import CreateProduct from "../pages/CreateProduct";
import EditProduct from "../pages/EditProduct";
import UserProfile from "../pages/UserProfile";
import NotFound from "../pages/NotFound";
import EditProfile from "../pages/EditProfile";
import CartPage from "../pages/Cart";
import ProductPage from "../components/ProductPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/perfil" element={<UserProfile />} />
      <Route path="/perfil/editar" element={<EditProfile />} />
      <Route path="/productos" element={<GalleryPage />} />
      <Route path="/productos/:id" element={<ProductPage />} />
      <Route path="/crear" element={<CreateProduct />} />
      <Route path="/editar/:id" element={<EditProduct />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;