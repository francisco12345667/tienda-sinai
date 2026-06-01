import { StoreActions } from './storeActions.js';
import { renderDashboard } from './ui.js';
import { UIHelper } from './uiHelper.js';

// --- CONFIGURACIÓN DE TELEGRAM ---
const BOT_TOKEN = '7994618598:AAF5yzFnoE1vZaY8buhDlWcrlzwqCQ-HM90';
const CHAT_ID = '6186375504';

async function enviarNotificacionTelegram(nombre, precio) {
    const mensaje = `🚨 ¡Nueva venta en Tienda Sinaí!\nProducto: ${nombre}\nPrecio: C$ ${precio}`;
    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(mensaje)}`;
        await fetch(url);
        console.log("Notificación enviada a Telegram");
    } catch (error) {
        console.error("Error al enviar notificación:", error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Iniciando Tienda Sinaí...');
    UIHelper?.showToast?.('Conectando a la base de datos...');

    try {
        // Sincronización en tiempo real
        await StoreActions.sincronizarDatos((datos) => {
            console.log('Datos recibidos de Supabase:', datos);
            renderDashboard(datos);
        });
    } catch (error) {
        console.error('Error al conectar:', error);
        UIHelper?.showToast?.('Error al conectar con la nube');
    }
});

// Evento de confirmación de venta
document.getElementById('btn-confirmar-venta')?.addEventListener('click', async () => {
    try {
        const nombreInput = document.getElementById('nombre-producto')?.value;
        const precioInput = document.getElementById('precio-producto')?.value;

        if (!nombreInput || !precioInput) {
            UIHelper?.showToast?.('Por favor completa todos los campos');
            return;
        }

        UIHelper?.showToast?.('Guardando en la nube...');

        // 1. Guardar en Supabase
        await StoreActions.saveProduct({ 
            nombre: nombreInput, 
            precio: parseFloat(precioInput), 
            stock: 1 
        });

        // 2. Enviar notificación a Telegram
        await enviarNotificacionTelegram(nombreInput, precioInput);

        UIHelper?.showToast?.('Venta registrada y notificada');

        // Limpiar campos
        document.getElementById('nombre-producto').value = '';
        document.getElementById('precio-producto').value = '';

    } catch (error) {
        console.error('Error al guardar:', error);
        UIHelper?.showToast?.('Error: ' + error.message);
    }
});
