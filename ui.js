export function renderDashboard(productos) {
    const container = document.getElementById('dashboard-container');
    if (!container) return;

    // Esto limpia la pantalla y dibuja los productos que vienen de la nube
    container.innerHTML = '<h3>Inventario Actual</h3>';
    
    productos.forEach(p => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div style="border:1px solid #ccc; padding:10px; margin:5px;">
                <strong>${p.nombre}</strong> - Precio: C$ ${p.precio} | Stock: ${p.stock}
            </div>
        `;
        container.appendChild(div);
    });
}
