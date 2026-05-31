// main.js
console.log("¡main.js se está cargando!");

// Al estar todos en la misma carpeta, quitamos '/db/', '/services/', etc.
import { StoreActions } from './storeActions.js';
import { ProductService } from './product.service.js';
import { SaleService } from './sale.service.js';
import { Formatter } from './formatter.js';
import { ImageHelper } from './imageHelper.js';
import { UIHelper } from './uiHelper.js';
import { renderDashboard } from './ui.js';

// --- CAPTURA DE ERRORES ---
window.addEventListener('error', (event) => {
    console.error('ERROR GLOBAL:', event.error || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('PROMESA RECHAZADA:', event.reason);
});

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Aplicación iniciada');

    try {
        UIHelper?.showToast('Conectando con la nube...');

        // Sincronización continua
        StoreActions.sincronizarDatos((datos) => {
            console.log('Datos recibidos:', datos);
            if (typeof renderDashboard === 'function') {
                renderDashboard(datos);
            }
        });

    } catch (error) {
        console.error('Error al iniciar:', error);
    }
});

// --- EVENTOS DE INTERFAZ ---
document.getElementById('btn-confirmar-venta')?.addEventListener('click', async () => {
    UIHelper?.showToast('Procesando venta...');
    // ... resto de tu lógica
});
