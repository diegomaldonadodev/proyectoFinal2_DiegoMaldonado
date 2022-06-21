import React from "react";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";
import s from "./Home.module.css";

export default function Home() {
  return (
    <div className={s.Home}>
      <ItemListContainer />
    </div>
  );
}
