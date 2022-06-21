import db from "../Service/firebase";
import { addDoc, collection } from "firebase/firestore";

import swal from "sweetalert";

const crearTicket = async (data) => {
  const collectionTicket = collection(db, "tickets");
  try {
    const resultado = await addDoc(collectionTicket, data);

    swal(
      "Compra Realizada!",
      `Por favor anote su codigo de pedido: ${resultado.id}`,
      "success"
    );
    return true;
  } catch (error) {
    swal(
      "No se pudo realizar la compra!",
      `Por favor intentelo de nuevo`,
      "error"
    );
    console.log(error);
    return false;
  }
};

export default crearTicket;
