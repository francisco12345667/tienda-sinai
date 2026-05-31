export function renderDashboard(datos) {
    console.log("Intentando mostrar en pantalla:", datos);
    const container = document.getElementById('dashboard-container');
    
    if (!container) {
        console.error("¡No encuentro el div con ID 'dashboard-container'!");
        return;
    }

    // Limpiamos
    container.innerHTML = '<h2>Lista de Productos:</h2>';

    // Dibujamos
    datos.forEach(producto => {
        const item = document.createElement('div');
        // Usamos estilos en línea para asegurar que no sea un problema de CSS
        item.style.border = "2px solid red";
        item.style.margin = "10px";
        item.style.padding = "10px";
        item.innerHTML = `
            <strong>Nombre: ${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            Stock: ${producto.stock}
        `;
        container.appendChild(item);
    });
}
