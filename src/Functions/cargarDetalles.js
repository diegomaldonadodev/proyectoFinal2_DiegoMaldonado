import { cargarProductos } from "./cargarProductos";

export async function cargarDetalles(id) {

  const data = await cargarProductos();
  
  return data.find((v) => v.id === (id));
}
