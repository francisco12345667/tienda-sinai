import { StoreActions } from './storeActions.js';
import { renderDashboard } from './ui.js';
import { UIHelper } from './uiHelper.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Iniciando Tienda Sinaí...');
    
    UIHelper?.showToast?.('Conectando a la base de datos...');

    try {
        // Esta función se activará automáticamente cada vez que Supabase cambie
        await StoreActions.sincronizarDatos((datos) => {
            console.log('Datos recibidos de Supabase:', datos);
            renderDashboard(datos);
        });
    } catch (error) {
        console.error('Error al conectar:', error);
        UIHelper?.showToast?.('Error al conectar con la nube');
    }
});

// EVENTO CORREGIDO PARA GUARDAR REALMENTE EN SUPABASE
document.getElementById('btn-confirmar-venta')?.addEventListener('click', async () => {
    try {
        UIHelper?.showToast?.('Guardando en la nube...');

        // 1. OBTENER DATOS (Asegúrate de que estos IDs existan en tu HTML)
        const nombreInput = document.getElementById('nombre-producto')?.value;
        const precioInput = document.getElementById('precio-producto')?.value;

        // 2. VALIDAR
        if (!nombreInput || !precioInput) {
            UIHelper?.showToast?.('Por favor completa todos los campos');
            return;
        }

        // 3. ENVIAR A SUPABASE (Usando la estructura que espera tu backend)
        const nuevoProducto = {
            nombre: nombreInput,
            precio: parseFloat(precioInput),
            stock: 1 // o el valor que desees
        };

        // LLAMADA REAL A LA ACCIÓN
        await StoreActions.saveProduct(nuevoProducto); 

        UIHelper?.showToast?.('Venta registrada con éxito');
        
        // Limpiar formulario tras guardar
        document.getElementById('nombre-producto').value = '';
        document.getElementById('precio-producto').value = '';

    } catch (error) {
        console.error('Error al guardar:', error);
        UIHelper?.showToast?.('Error al guardar: ' + error.message);
    }
});
