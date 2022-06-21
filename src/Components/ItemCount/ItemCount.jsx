import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext.jsx";

import s from "./ItemCount.module.css";

export default function ItemCount({ stock, initial, producto, onAdd }) {
  const { carrito, AddToCart, Cantidad } = useContext(UserContext);

  const [contador, setContador] = useState(initial);

  function itemCount(flag) {
    if (flag) {
      if (contador < stock) {
        setContador(contador + 1);
      }
    } else {
      if (contador > 1) {
        setContador(contador - 1);
      }
    }
  }

  return (
    <div className={s.Contador}>
      <div className={s.ContadorContainer}>
        <div className={s.Botones}>
          <button onClick={() => itemCount(false)}>-</button>
          <p className={s.NumeroContador}>{contador}</p>
          <button onClick={() => itemCount(true)}>+</button>
        </div>
      </div>
      <button
        className={s.BotonCarrito}
        onClick={() => {
          onAdd(contador);
          AddToCart({ ...producto, cantidad: contador });
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
