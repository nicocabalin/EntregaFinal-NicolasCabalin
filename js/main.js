// Array para almacenar el menú de productos
let menuProductos = [
    { name: "Pizza", price: 3400, categoria: "comida" },
    { name: "Milanesa", price: 7000, categoria: "comida" },
    { name: "Hamburguesa", price: 7500, categoria: "comida" },
    { name: "Asado", price: 11000, categoria: "comida" },
    { name: "Lomito", price: 8000, categoria: "comida" },
    { name: "Empanadas", price: 1300, categoria: "comida" },
    { name: "Sandwich", price: 3000, categoria: "comida" },
    { name: "Ensalada", price: 2500, categoria: "comida" },
    { name: "Coca Cola", price: 1300, categoria: "bebida" },
    { name: "Sprite", price: 1200, categoria: "bebida" },
    { name: "Agua", price: 700, categoria: "bebida" },
    { name: "Cerveza", price: 2000, categoria: "bebida" },
    { name: "Vino", price: 2300, categoria: "bebida" }
];

// Array para almacenar los artículos en el carrito
let carrito = [];

// Cargar el carrito desde localStorage si existe
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

// Función para mostrar el menú de productos
function mostrarMenu() {
    const menuComidas = document.getElementById("menu-comidas");
    const menuBebidas = document.getElementById("menu-bebidas");

    menuProductos.forEach((producto, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${producto.name} - $${producto.price.toFixed(2)} 
                        <button onclick="añadirAlCarrito(${index})">Agregar</button>`;

        if (producto.categoria === "comida") {
            menuComidas.appendChild(li);
        } else {
            menuBebidas.appendChild(li);
        }
    });
}

// Función para añadir un artículo al carrito
function añadirAlCarrito(indiceArticulo) {
    carrito.push(menuProductos[indiceArticulo]);
    guardarCarrito();
    mostrarCarrito();
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const carritoUl = document.getElementById("carrito");
    carritoUl.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${producto.name} - $${producto.price.toFixed(2)} 
                        <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
        carritoUl.appendChild(li);
        total += producto.price;
    });

    document.getElementById("total").textContent = total.toFixed(2);
}

// Función para eliminar un artículo del carrito
function eliminarDelCarrito(indiceArticulo) {
    carrito.splice(indiceArticulo, 1);
    guardarCarrito();
    mostrarCarrito();
}

// Función para vaciar el carrito
document.getElementById("vaciar-carrito").addEventListener("click", () => {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
});

// Función para guardar el carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Iniciar la aplicación mostrando el menú y el carrito
mostrarMenu();
mostrarCarrito();
