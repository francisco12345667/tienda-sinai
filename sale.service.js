export const SaleService = {
  calcularTotalCarrito(items) {
    return items.reduce((total, item) => total + (item.price * item.qty), 0);
  },

  generarResumenCierre(ventas, gastos) {
    const totalVentas = ventas.reduce((acc, v) => acc + v.total, 0);
    const totalGastos = gastos.reduce((acc, g) => acc + g.amount, 0);
    
    return {
      totalVentas,
      totalGastos,
      balanceNeto: totalVentas - totalGastos,
      fecha: new Date().toLocaleDateString()
    };
  }
};