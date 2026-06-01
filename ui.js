export function renderDashboard(productos) {
    const container = document.getElementById('dashboard-container');
    if (!container) return;

    // Esto limpia lo viejo y pone un título
    container.innerHTML = '<h2 style="color: black; margin-top: 20px;">Inventario en la Nube</h2>';

    // Esto recorre los datos y los pone en pantalla
    productos.forEach(p => {
        const item = document.createElement('div');
        item.style.border = "1px solid #ccc";
        item.style.padding = "10px";
        item.style.marginTop = "10px";
        item.style.backgroundColor = "white";
        
        item.innerHTML = `
            <strong>${p.nombre || 'Sin nombre'}</strong> - 
            Precio: ${p.precio || 0} | 
            Stock: ${p.stock || 0}
        `;
        container.appendChild(item);
    });
}
