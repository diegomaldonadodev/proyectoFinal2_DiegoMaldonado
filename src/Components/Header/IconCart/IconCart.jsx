import React from "react";
import s from "./IconCart.module.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

export default function IconCart() {
  const { carrito } = useContext(UserContext);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    let cantidadTotal = 0;
    for (var i = 0; i < carrito.length; i++) {
      cantidadTotal += carrito[i].cantidad;
    }
    setCantidad(cantidadTotal);
  }, [carrito]);

  return (
    <div className={s.IconCartContainer}>
      {carrito.length > 0 ? (
        <i class="bx bx-cart-alt">
          <span className={s.SpanCarrito}>{cantidad}</span>
        </i>
      ) : null}
    </div>
  );
}
