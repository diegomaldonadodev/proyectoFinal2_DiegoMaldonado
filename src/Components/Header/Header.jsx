import React from "react";
import s from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <div className={s.Header}>
      <div className={s.HeaderContainer}>
        <Navbar />
      </div>
    </div>
  );
}
