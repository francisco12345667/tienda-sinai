console.log("¡main.js se está cargando!");
import { StoreActions } from './db/storeActions.js';
import { ProductService } from './services/product.service.js';
import { SaleService } from './services/sale.service.js';
import { Formatter } from './utils/formatter.js';
import { ImageHelper } from './utils/imageHelper.js';
import { UIHelper } from './utils/uiHelper.js';
import { renderDashboard } from './ui.js';

// --- CAPTURA DE ERRORES (Mantén esto, es vital) ---
window.addEventListener('error', (event) => {
    console.error('ERROR GLOBAL:', event.error || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('PROMESA RECHAZADA:', event.reason);
});

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('Aplicación iniciada con Supabase');

    try {
        UIHelper?.showToast('Conectando con la nube...');
        console.log('Iniciando escucha en tiempo real...');

        // La función de StoreActions ahora conecta a Supabase
        StoreActions.sincronizarDatos((datos) => {
            console.log('Datos recibidos desde Supabase:', datos);
            
            if (typeof renderDashboard === 'function') {
                renderDashboard(datos);
            } else {
                console.error('renderDashboard no está definido');
            }
        });

    } catch (error) {
        console.error('Error crítico al iniciar:', error);
    }
});

// --- EVENTOS DE INTERFAZ ---
document.getElementById('btn-confirmar-venta')?.addEventListener('click', async () => {
    try {
        console.log('Procesando venta...');
        // Ejemplo de uso de las nuevas funciones de Supabase
        // const resultado = await StoreActions.recordSale(venta);
        UIHelper.showToast('Venta registrada con éxito');
    } catch (error) {
        console.error('Error al confirmar venta:', error);
        UIHelper.showToast('Error al procesar la venta');
    }
});