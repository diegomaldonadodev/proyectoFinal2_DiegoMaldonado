import React from "react";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import IconSearch from "../Header/IconSearch/IconSearch";

import { cargarProductos } from "../../Functions/cargarProductos";

import s from "./ItemListContainer.module.css";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarProductos().then((data) => {
      setProductos(data);
    });
  }, []);

  return (
    <div className={s.ItemListContainer}>
      <div className={s.SearchContainer}>
    
      </div>

      <div className={s.ContainerItemList}>
        <ItemList items={productos} />
      </div>
    </div>
  );
}
