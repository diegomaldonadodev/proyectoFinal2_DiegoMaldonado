import { cargarProductos } from "./cargarProductos";

export async function filtrarProductos(id) {
  const resultado = await cargarProductos();
  return resultado.filter((r) => r.categoria === parseInt(id));
}
