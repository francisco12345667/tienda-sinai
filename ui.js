export function renderDashboard(productos) {
    const container = document.getElementById('dashboard-container');
    
    if (!container) {
        console.error("No encontré #dashboard-container");
        return;
    }

    // Limpiamos antes de dibujar
    container.innerHTML = '<h2>Inventario Actual</h2>';

    if (!productos || productos.length === 0) {
        container.innerHTML += '<p>No hay productos registrados.</p>';
        return;
    }

    productos.forEach(producto => {
        // Diagnóstico: Imprimimos qué recibimos por cada producto
        console.log("Producto recibido:", producto);

        const item = document.createElement('div');
        item.style.border = "1px solid #ddd";
        item.style.padding = "10px";
        item.style.margin = "5px";
        
        // Aquí usamos "||" para poner un valor por defecto si es NULL
        const nombre = producto.nombre || producto.Nombre || 'Sin nombre';
        const precio = producto.precio || producto.Precio || '0';

        item.innerHTML = `
            <strong>${nombre}</strong><br>
            Precio: C$ ${precio}
        `;
        container.appendChild(item);
    });
}
