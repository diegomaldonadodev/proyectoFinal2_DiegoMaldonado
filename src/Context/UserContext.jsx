import React, { createContext, useState } from "react";

export const UserContext = createContext("");

export default function GlobalUserContext({ children }) {
  const [totalContext, setTotalContext] = useState(0);

  const addToTotal = (t) => {
    setTotalContext(t);
  };

  const [carrito, setCarrito] = useState([]);

  const AddToCart = (producto) => {
    let flag = false;

    const productoFilter = carrito.map((p) => {
      if (p.id === producto.id) {
        p.cantidad += producto.cantidad;
        flag = true;
      }
      return p;
    });

    if (flag) {
      setCarrito(productoFilter);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const deleteToCart = (id) => {
    const deleteProducto = carrito.filter((d) => d.id !== id);
    setCarrito(deleteProducto);
    console.log("se dispara");
  };

  function deleteCart() {
    setCarrito([]);
  }


  return (
    <UserContext.Provider
      value={{
        carrito,
        AddToCart,
        deleteToCart,
        deleteCart,
        totalContext,
        addToTotal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
