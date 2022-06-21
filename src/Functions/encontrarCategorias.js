import { buscarCategoria } from "./buscarCategoria";

export async function encontrarCategoria(id) {
    const cat = await buscarCategoria();
    return cat.find((c) => c.id === (id));
  }