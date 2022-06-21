import React, { useEffect, useState } from "react";
import s from "./ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { cargarDetalles } from "../../Functions/cargarDetalles";

export default function ItemDetailContainer() {
 
  const { id } = useParams();
 
  const [producto, setProducto] = useState("");
  
  useEffect(() => {
    
    cargarDetalles(id).then((res) => setProducto(res));
  }, []);
  return (
   
    <div className={s.ItemDetailContainer}>
      {" "}
      {producto !== "" ? <ItemDetail producto={producto} /> : <LoaderSpinner />}
    </div>
  );
}
