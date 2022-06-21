import s from "./ItemDetail.module.css";
import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { motion } from "framer-motion";
import { ponerPuntos } from "../../Functions/ponerPuntos";

export default function ItemDetail({ producto }) {
  const {
    id,
    nombre,
    precio,
    descripcion,
    imagen,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
  } = producto;

  const [finalizar, setFinalizar] = useState(false);

  function onAdd(contador) {
    setFinalizar(true);
    console.log(contador);
  }

  const [imagenURL, setImagenURL] = useState(imagen);

  function cambiarImagen(img) {
    setImagenURL(img);
  }

  return (
    <div className={s.ItemDetail}>
      <div className={s.ImagenContainer}>
        <img src={imagen} alt={nombre} />
      </div>

      <div className={s.DescripcionContainer}>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <div className={s.PreVenta}>
          <p className={s.Precio}>${ponerPuntos(precio.toString())}</p>
          <div className={s.DetallesVenta}>
            {finalizar ? (
              <NavLink to="/carrito" className={s.BotonVolver}>
                Finalizar Compra
              </NavLink>
            ) : (
              <div className={s.AgregarCarrito}>
                <ItemCount
                  stock={5}
                  initial={1}
                  producto={producto}
                  onAdd={onAdd}
                />
              </div>
            )}
          </div>
        </div>
        <NavLink to="/" className={s.BotonVolver}>
          Volver
        </NavLink>
      </div>
    </div>
  );
}
