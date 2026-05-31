// ui.js
export function renderDashboard(datos) {
    console.log("Renderizando dashboard con:", datos);
    
    const container = document.getElementById('dashboard-container');
    if (!container) return;

    // Limpiamos el contenedor antes de dibujar
    container.innerHTML = '';

    datos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
        `;
        container.appendChild(card);
    });
}

export function showToast(mensaje) {
    // Tu lógica de notificación
    console.log("Toast:", mensaje);
}