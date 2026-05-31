export const Formatter = {
  // Formato para moneda Córdoba (C$)
  moneda(valor) {
    return new Intl.NumberFormat('es-NI', {
      style: 'currency',
      currency: 'NIO',
      minimumFractionDigits: 0
    }).format(valor);
  },

  // Formato de fecha legible
  fechaCorta(fecha) {
    return new Date(fecha).toLocaleDateString('es-NI', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
};