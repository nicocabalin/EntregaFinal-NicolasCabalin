// main.js

// Variable global para almacenar productos
let productos = [];

// Función para cargar los productos desde el archivo JSON
async function cargarProductos() {
    try {
        const respuesta = await fetch('data/productos.json');
        if (!respuesta.ok) throw new Error('No se pudo cargar el archivo de productos');
        productos = await respuesta.json();
        mostrarProductos();
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

// Función para mostrar los productos por categorías
function mostrarProductos() {
    const listaComidas = document.getElementById('listaComidas');
    const listaBebidas = document.getElementById('listaBebidas');

    // Limpiar listas antes de mostrar
    listaComidas.innerHTML = '';
    listaBebidas.innerHTML = '';

    // Filtrar y mostrar comidas
    const comidas = productos.filter(producto => producto.categoria === 'comida');
    comidas.forEach(producto => {
        listaComidas.innerHTML += `
            <div class="producto">
                <span>${producto.nombre}</span>
                <span><b/> $${producto.precio}</span>
                <button onclick="añadirAlCarrito(${producto.id})">Agregar al carrito</button>
            </div>
        `;
    });

    // Filtrar y mostrar bebidas
    const bebidas = productos.filter(producto => producto.categoria === 'bebida');
    bebidas.forEach(producto => {
        listaBebidas.innerHTML += `
            <div class="producto">
                <span>${producto.nombre}</span>
                <span><b/> $${producto.precio}</span>
                <button onclick="añadirAlCarrito(${producto.id})">Agregar al carrito</button>
            </div>
        `;
    });
}

// Iniciar la aplicación cargando los productos
document.addEventListener('DOMContentLoaded', cargarProductos);
