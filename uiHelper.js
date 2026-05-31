export const UIHelper = {
  toggleModal(modalId, show) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.toggle('hidden', !show);
    }
  },

  showToast(message, duration = 3000) {
    // Asumiendo que tienes un contenedor de toast en tu HTML
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = message;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), duration);
    } else {
      console.log("Toast:", message); // Fallback si no existe el elemento
    }
  },

  navegar(seccionId) {
    // Lógica simple para cambiar de vista (ocultar todas, mostrar la seleccionada)
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    const target = document.getElementById(seccionId);
    if (target) target.classList.remove('hidden');
  }
};