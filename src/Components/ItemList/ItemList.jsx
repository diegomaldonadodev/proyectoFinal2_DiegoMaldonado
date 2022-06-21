import React from "react";
import Item from "../../Components/Item/Item";
import s from "./ItemList.module.css";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

export default function ItemList({ items }) {
  return (
    <div className={s.ItemList}>
      {items.length ? (
        items.map((producto) => {
          // se envia por props el contenido de productos recibido y se asigna una key para que react pueda identificar a cada elemento con un valor unico e irrepetible. En este caso el id.
          return <Item producto={producto} key={producto.id} />;
        })
      ) : (
        <LoaderSpinner />
      )}
    </div>
  );
}
