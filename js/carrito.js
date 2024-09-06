// carrito.js

// Carrito de compras
let carrito = [];

// Función para añadir productos al carrito
function añadirAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    const productoEnCarrito = carrito.find(item => item.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        carrito.push({...producto, cantidad: 1});
    }

    actualizarCarrito();
}

// Actualizar carrito en el DOM
function actualizarCarrito() {
    const carritoContainer = document.getElementById('carritoItems');
    const carritoCantidad = document.getElementById('carritoCantidad');
    const carritoTotal = document.getElementById('carritoTotal');
    carritoContainer.innerHTML = '';

    carrito.forEach(item => {
        carritoContainer.innerHTML += `
            <div class="carrito-item">
                <span>${item.nombre}</span>
                <span>Precio: $${item.precio}</span>
                <span>Cantidad: ${item.cantidad}</span>
                <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
                <button onclick="cambiarCantidad(${item.id}, -1)">-</button>
                <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
            </div>
        `;
    });

    carritoCantidad.textContent = carrito.length;

    // Calcular el total
    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
    });

    // Mostrar el total
    carritoTotal.innerHTML = `<strong>Total:</strong> $${total}`;
}

// Cambiar cantidad de productos en el carrito
function cambiarCantidad(id, cantidad) {
    const producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad += cantidad;
        if (producto.cantidad === 0) {
            eliminarDelCarrito(id);
        }
    }
    actualizarCarrito();
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

// Finalizar compra
function finalizarCompra() {
    let resumen = 'Resumen de compra:\n';
    carrito.forEach(item => {
        resumen += `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}\n`;
    });
    const datosUsuario = prompt('Ingrese sus datos (Nombre, Teléfono, Dirección):');
    alert(`Compra finalizada. Datos del usuario: ${datosUsuario}\n${resumen}`);
    carrito = [];
    actualizarCarrito();
}

// Mostrar y ocultar el modal del carrito
const carritoBtn = document.getElementById('carritoBtn');
const carritoModal = document.getElementById('carritoModal');
const closeModal = document.querySelector('.close');

carritoBtn.onclick = function() {
    carritoModal.style.display = 'block';
};

closeModal.onclick = function() {
    carritoModal.style.display = 'none';
};