import { StoreActions } from './storeActions.js';
import { renderDashboard } from './ui.js';
import { UIHelper } from './uiHelper.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Iniciando Tienda Sinaí...');
    
    // UIHelper puede ser undefined al principio, usamos encadenamiento opcional
    UIHelper?.showToast?.('Conectando a la base de datos...');

    try {
        await StoreActions.sincronizarDatos((datos) => {
            console.log('Datos recibidos, renderizando UI...');
            renderDashboard(datos);
        });
    } catch (error) {
        console.error('Error al conectar:', error);
        UIHelper?.showToast?.('Error al conectar con la nube');
    }
});

// Evento de venta (ejemplo)
document.getElementById('btn-confirmar-venta')?.addEventListener('click', async () => {
    try {
        UIHelper?.showToast?.('Procesando...');
        // Aquí llamarías a recordSale después de obtener los datos del form
        UIHelper?.showToast?.('Venta registrada');
    } catch (error) {
        console.error('Error:', error);
    }
});
