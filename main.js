import { StoreActions } from './storeActions.js';
import { renderDashboard } from './ui.js';
import { UIHelper } from './uiHelper.js';

// Manejo de errores globales
window.addEventListener('error', (event) => console.error('ERROR GLOBAL:', event.error));
window.addEventListener('unhandledrejection', (event) => console.error('PROMESA RECHAZADA:', event.reason));

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Aplicación iniciada');

    try {
        UIHelper?.showToast('Conectando con la nube...');

        // Asegúrate de que esta función en StoreActions sea capaz de
        // ejecutar el callback tanto en la carga inicial como en cambios
        StoreActions.sincronizarDatos((datos) => {
            if (datos) {
                console.log('Datos recibidos para renderizar:', datos);
                renderDashboard(datos);
            } else {
                console.warn('No se recibieron datos de la base de datos');
            }
        });

    } catch (error) {
        console.error('Error al iniciar la sincronización:', error);
        UIHelper?.showToast('Error al conectar con la base de datos');
    }
});

// Eventos de botones con manejo de errores interno
document.getElementById('btn-confirmar-venta')?.addEventListener('click', async () => {
    try {
        UIHelper?.showToast('Procesando venta...');
        // Tu lógica aquí:
        // await StoreActions.registrarVenta(...);
        UIHelper?.showToast('Venta confirmada exitosamente');
    } catch (error) {
        console.error('Error en venta:', error);
        UIHelper?.showToast('Error al procesar la venta');
    }
});
