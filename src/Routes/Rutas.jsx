import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Views/Home/Home";
import React from "react";
import Categoria from "../Views/Categoria/Categoria";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";

import Layout from "../Layout/Layout";
import Cart from "../Views/Cart/Cart";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:id" element={<Categoria />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/details/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
