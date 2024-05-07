// CitasLogic.js
import { obtenerCitasAPI } from './CitasAPI';

export async function obtenerCitas() {
  try {
    const citas = await obtenerCitasAPI();
    return citas;
  } catch (error) {
    console.error('Error al obtener citas:', error);
    return [];
  }
}
