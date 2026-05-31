// 1. PRIMERO: Importaciones (siempre arriba)
import { StoreActions } from './storeActions.js';
import { renderDashboard } from './ui.js';
import { UIHelper } from './uiHelper.js';

// 2. SEGUNDO: Eventos globales de error
window.addEventListener('error', (event) => console.error('ERROR GLOBAL:', event.error || event.message));
window.addEventListener('unhandledrejection', (event) => console.error('PROMESA RECHAZADA:', event.reason));

// 3. TERCERO: Lógica de inicio (usando DOMContentLoaded)
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Aplicación iniciada');

    try {
        UIHelper?.showToast('Conectando con la nube...');

        // Sincronización continua: esta función debe traer los datos y llamar a render
        StoreActions.sincronizarDatos((datos) => {
            console.log('Datos recibidos:', datos);
            renderDashboard(datos);
        });

    } catch (error) {
        console.error('Error al iniciar:', error);
    }
});

// 4. CUARTO: Eventos de botones
document.getElementById('btn-confirmar-venta')?.addEventListener('click', async () => {
    UIHelper?.showToast('Procesando venta...');
    // Tu lógica de venta aquí...
});
