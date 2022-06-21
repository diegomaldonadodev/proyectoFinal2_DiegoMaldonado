import React, { useState, useEffect } from "react";
import s from "./Formulario.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import crearTicket from "../../Functions/crearTicket";

export default function Formulario() {
  const [form, setForm] = useState({
    buyer: { nombre: "", telefono: "", apellido: "", mail: "" },
    items: [],
    date: "",
    total: 0,
  });

  const [errors, setErrors] = useState({ nombre: null, telefono: null, apellido: null, mail: null })

  const { carrito, totalContext, deleteCart } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setForm({ ...form, total: totalContext, items: carrito });
  }, [carrito, totalContext]);

  function rellenarEstado(e) {
    setForm({
      ...form,
      buyer: { ...form.buyer, [e.target.name]: e.target.value.trim() },
    });

    

  }

  function cheackear(e) {
    setErrors({ ...errors, [e.target.name]: validate(e.target.value, e.target.name) })
  }

  function enviarTicket(e) {
    e.preventDefault();
    const date = new Date();

    crearTicket({ ...form, date });

    deleteCart();

    navigate('/');
  }

  function validate(value, nameImput) {
    if (nameImput === 'apellido' && value.trim().length > 0) return true;

    if (nameImput === 'nombre' && value.trim().length > 0) return true;

    if (nameImput === 'telefono' && value.trim().length >= 8) return true;

    if (nameImput === 'mail' && /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value)) return true;

    return false;
  }


  return (
    <form
      onSubmit={(e) => {
        enviarTicket(e);
      }}
    >
      <h3>Datos Compra</h3>
      <input
        type="text"
        name="nombre"
        placeholder='Nombre'

        onChange={(e) => {
          rellenarEstado(e);
        }
        }

        onBlur={(e) => {
          cheackear(e);
        }}
      />
      <span>{errors.nombre === null || errors.nombre === true ? '' : 'Rellena el campo por favor'}</span>
      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        onChange={(e) => {
          rellenarEstado(e);
        }}

        onBlur={(e) => {
          cheackear(e);
        }}
      />

      <span>{errors.apellido === null || errors.apellido === true ? '' : 'Rellena el campo por favor'}</span>


      <input
        type="mail"
        name="mail"
        placeholder="Mail"
        onChange={(e) => {
          rellenarEstado(e);
        }}
        onBlur={(e) => {
          cheackear(e);
        }}
      />

      <span>{errors.mail === null || errors.mail === true ? '' : 'Ingresa un mail correcto por favor'}</span>


      <input
        type="text"
        name="telefono"
        placeholder="Telefono"
        onChange={(e) => {
          rellenarEstado(e);
        }}
        onBlur={(e) => {
          cheackear(e);
        }}
      />
      <span>{errors.telefono === null || errors.telefono === true ? '' : 'Ingresa un numero de al menos 8 caracteres por favor'}</span>
      {errors.nombre && errors.apellido && errors.mail && errors.telefono ? <button className={s.BotonFormulario}>TERMINAR COMPRA</button> : <button className={s.BotonFormularioDisabled} disabled>TERMINAR COMPRA</button>}

    </form>
  );
}
