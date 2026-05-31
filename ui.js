export function renderDashboard(datos) {
    const container = document.getElementById('dashboard-container');
    
    if (!container) {
        console.error("No se encontró el contenedor con ID 'dashboard-container'");
        return;
    }

    // Limpiamos el contenedor antes de renderizar
    container.innerHTML = '<h2>Inventario Actual</h2>';

    // Si no hay datos, mostramos un mensaje amigable
    if (!datos || datos.length === 0) {
        container.innerHTML += '<p>No hay productos registrados.</p>';
        return;
    }

    // Dibujamos cada producto
    datos.forEach(producto => {
        const item = document.createElement('div');
        item.className = 'producto-card'; // Clase para tu CSS
        
        item.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: <strong>$${producto.precio}</strong></p>
            <p>Stock disponible: <span>${producto.stock} unidades</span></p>
        `;
        
        container.appendChild(item);
    });
}
