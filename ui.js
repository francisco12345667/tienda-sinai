export function renderDashboard(datos) {
    console.log("Renderizando dashboard con:", datos);
    
    const container = document.getElementById('dashboard-container');
    if (!container) {
        console.error("ERROR: No se encontró el elemento 'dashboard-container' en tu HTML.");
        return;
    }

    // Limpiamos el contenedor
    container.innerHTML = '';

    // Si no hay datos, mostramos un mensaje
    if (!datos || datos.length === 0) {
        container.innerHTML = '<p>No hay productos para mostrar en este momento.</p>';
        return;
    }

    datos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <h3>${producto.nombre || 'Sin nombre'}</h3>
            <p>Precio: $${producto.precio || 0}</p>
            <p>Stock: ${producto.stock || 0}</p>
        `;
        container.appendChild(card);
    });
}
