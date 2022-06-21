import React, { useState, useEffect } from "react";
import { buscarCategoria } from "../../../Functions/buscarCategoria";
import { NavLink } from "react-router-dom";
import IconMenu from "../IconMenu/IconMenu";
import IconCart from "../IconCart/IconCart";
import IconSearch from "../IconSearch/IconSearch";
import Logo from "../Logo/Logo";
import { motion } from "framer-motion";

import s from "./Navbar.module.css";

const variants = {
  open: { x: "190px" },
  closed: { x: "-100px" },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoria, setCategoria] = useState([]);
  useEffect(() => {
    buscarCategoria().then((data) => setCategoria(data));
  }, []);

  return (
    <div className={s.NavbarContainer}>
      <Logo />
      <div className={s.CategoriasContainer}>
        <ul>
          <NavLink to="/productos" className={s.NavLink}>
            <motion.li whileHover={{ scale: 1.1 }}>Productos</motion.li>
          </NavLink>

          {categoria.map((c) => {
            return (
              <NavLink
                to={`/categoria/${c.id}`}
                className={s.NavLink}
                key={c.nombre}
              >
                <motion.li key={c.id} whileHover={{ scale: 1.1 }}>
                  {c.nombre}
                </motion.li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={s.CategoriasContainerMobile}
      >
        <ul>
          <NavLink to="/productos" className={s.NavLink}>
            <li>Productos</li>
          </NavLink>

          {categoria.map((c) => {
            return (
              <NavLink
                to={`/categoria/${c.id}`}
                className={s.NavLink}
                key={c.nombre}
              >
                <li key={c.id}>{c.nombre}</li>
              </NavLink>
            );
          })}
        </ul>
      </motion.div>
      <div className={s.IconContainer}>
        <IconMenu onClick={() => setIsOpen((isOpen) => !isOpen)} />

        <NavLink to="/carrito">
          <IconCart />
        </NavLink>
      </div>
    </div>
  );
}
