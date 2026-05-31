// 1. PRIMERO: Los imports (siempre arriba)
import { StoreActions } from './storeActions.js';

// 2. DESPUÉS: Tu código y funciones (el export va aquí)
export const ProductService = {
  async abrirPaca(pacaId, items) {
    await StoreActions.updatePacaStatus(pacaId, 'abierta');
    return await StoreActions.incrementarStockMultiple(items);
  },

  calcularPrecioVenta(costo, porcentaje) {
    return costo * (1 + porcentaje / 100);
  }
};
