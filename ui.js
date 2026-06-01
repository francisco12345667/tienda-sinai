export function renderDashboard(productos) {
    // 1. Buscamos el contenedor donde queremos que aparezcan los datos
    const container = document.getElementById('dashboard-container');
    
    if (!container) {
        console.error("No se encontró el elemento 'dashboard-container' en tu HTML.");
        return;
    }

    // 2. Limpiamos y preparamos el área
    container.style.display = "block"; // Aseguramos que sea visible
    container.innerHTML = '<h2 style="color: white;">Inventario Actual</h2>';

    // 3. Dibujamos los productos
    productos.forEach(p => {
        const div = document.createElement('div');
        div.style.background = "#2a2a2a";
        div.style.color = "white";
        div.style.margin = "10px";
        div.style.padding = "15px";
        div.style.borderRadius = "8px";

        // Usamos los nombres de propiedades exactos que vimos en la consola
        div.innerHTML = `
            <strong>${p.nombre || 'Sin nombre'}</strong><br>
            Precio: C$ ${p.precio || '0'} | Stock: ${p.stock || '0'}
        `;
        container.appendChild(div);
    });
}
