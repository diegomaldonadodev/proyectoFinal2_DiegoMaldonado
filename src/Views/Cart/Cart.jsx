import React from "react";
import s from "./Cart.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useState, useEffect } from "react";
import { ponerPuntos } from "../../Functions/ponerPuntos";
import Formulario from "../../Components/Formulario/Formulario";

export default function Carrito() {
  const { carrito, deleteToCart, deleteCart, addToTotal } =
    useContext(UserContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalTotal = 0;
    for (var i = 0; i < carrito.length; i++) {
      totalTotal += carrito[i].cantidad * carrito[i].precio;
    }
    addToTotal(totalTotal);
    setTotal(totalTotal);
  }, [carrito]);

  return (
    <div className={s.Carrito}>
      <div className={s.CarritoContainer}>
        <ul>
          {carrito.length > 0 ? (
            carrito.map((item, index) => {
              return (
                <div className={s.ListaCarrito} key={item.nombre}>
                  <li>
                    <img src={item.imagen} alt="" />

                    <div className={s.ListaInfo}>
                      <p key={index}>{item.nombre}</p>
                      <div className={s.PrecioCantidad}>
                        <p>${ponerPuntos(item.precio.toString())}</p>
                        <p>x{item.cantidad}</p>
                      </div>
                    </div>
                  </li>
                  <div className={s.SubTotal}>
                    SubTotal: $
                    {ponerPuntos((item.cantidad * item.precio).toString())}
                  </div>
                  <i
                    className="bx bxs-trash"
                    onClick={() => {
                      deleteToCart(item.id);
                    }}
                  ></i>
                </div>
              );
            })
          ) : (
            <h1>Carrito está vacio</h1>
          )}
        </ul>

        {carrito.length > 0 ? (
          <button className={s.botonEliminarCarrito} onClick={deleteCart}>
            Eliminar Carrito
          </button>
        ) : null}

        <NavLink to="/">
          <button className={s.botonVolver}>Volver</button>
        </NavLink>
      </div>
      {carrito.length > 0 ? (
        <div className={s.TotalDiv}>
          <h1>Total: ${ponerPuntos(total.toString())}</h1>
          <Formulario />
      
        </div>
      ) : null}
    </div>
  );
}
