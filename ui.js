// ui.js
export function renderDashboard(productos) {
    const container = document.getElementById('dashboard-container');
    
    // Verificación de seguridad
    if (!container) {
        console.error("ERROR: No encontré el elemento con id 'dashboard-container'");
        return;
    }

    // Limpiamos lo que haya antes para no duplicar datos
    container.innerHTML = '<h2>Inventario de Productos</h2>';

    // Si no hay productos, avisamos
    if (!productos || productos.length === 0) {
        container.innerHTML += '<p>No hay productos en la base de datos.</p>';
        return;
    }

    // Dibujamos cada producto
    productos.forEach(producto => {
        const item = document.createElement('div');
        item.style.marginBottom = "10px";
        item.style.padding = "10px";
        item.style.border = "1px solid #ddd";
        // Asegúrate de que 'nombre' y 'stock' coincidan con los nombres de tus columnas en Supabase
        item.innerHTML = `
            <strong>${producto.nombre || 'Producto sin nombre'}</strong>
            <br>Stock: ${producto.stock !== undefined ? producto.stock : 'N/A'}
        `;
        container.appendChild(item);
    });
}
