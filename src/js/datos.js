// CitasAPI.js
import axios from 'axios';

export async function obtenerCitasAPI() {
  try {
    const response = await axios.get('medicomm/api/citas');
    return response.data.citas;
  } catch (error) {
    throw new Error('Error al obtener citas');
  }
}

