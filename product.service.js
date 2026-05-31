import { StoreActions } from '../../db/storeActions';

export const ProductService = {
  // Lógica para abrir paca y distribuir stock
  async abrirPaca(pacaId, items) {
    // 1. Obtener paca y productos
    // 2. Realizar cálculos (ej: sumar stock a productos existentes)
    // 3. Persistir cambios
    await StoreActions.updatePacaStatus(pacaId, 'abierta');
    return await StoreActions.incrementarStockMultiple(items);
  },

  calcularPrecioVenta(costo, porcentaje) {
    return costo * (1 + porcentaje / 100);
  }
};