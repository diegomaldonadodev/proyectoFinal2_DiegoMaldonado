import { Outlet } from "react-router-dom";

import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import s from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={s.Layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
