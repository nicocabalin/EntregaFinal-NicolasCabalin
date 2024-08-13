// Array para almacenar el menú de productos (comidas y bebidas)
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

// Función para mostrar el menú filtrado por categoría
function mostrarMenu(categoria) {
    let productosFiltrados = menuProductos.filter(producto => producto.categoria === categoria);
    let mensaje = `Menú de ${categoria}s:\n`;
    productosFiltrados.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.name} - $${producto.price.toFixed(2)}\n`;
    });
    console.log(mensaje);
    alert(mensaje);
}

// Función para añadir un artículo al carrito
function añadirAlCarrito(indiceArticulo, categoria) {
    let productosFiltrados = menuProductos.filter(producto => producto.categoria === categoria);
    if (indiceArticulo >= 0 && indiceArticulo < productosFiltrados.length) {
        carrito.push(productosFiltrados[indiceArticulo]);
        let mensaje = `Añadido al carrito: ${productosFiltrados[indiceArticulo].name}`;
        console.log(mensaje);
        alert(mensaje);
    } else {
        let mensaje = "Índice de artículo no válido.";
        console.log(mensaje);
        alert(mensaje);
    }
}

// Función para eliminar un artículo del carrito
function eliminarDelCarrito(indiceArticulo) {
    if (indiceArticulo >= 0 && indiceArticulo < carrito.length) {
        let mensaje = `Eliminado del carrito: ${carrito[indiceArticulo].name}`;
        console.log(mensaje);
        alert(mensaje);
        carrito.splice(indiceArticulo, 1);
    } else {
        let mensaje = "Índice de artículo no válido.";
        console.log(mensaje);
        alert(mensaje);
    }
}

// Función para mostrar el carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        let mensaje = "El carrito está vacío.";
        console.log(mensaje);
        alert(mensaje);
    } else {
        let mensaje = "Carrito de compras:\n";
        let total = 0;
        carrito.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto.name} - $${producto.price.toFixed(2)}\n`;
            total += producto.price;
        });
        mensaje += `Total: $${total.toFixed(2)}`;
        console.log(mensaje);
        alert(mensaje);
    }
}

// Función para interactuar con el usuario
function interactuar() {
    let accion;
    while (accion !== "6") {
        accion = prompt(
            "¿Qué te gustaría hacer?\n" +
            "1. Ver menú de comidas\n" +
            "2. Ver menú de bebidas\n" +
            "3. Agregar artículo al carrito\n" +
            "4. Sacar artículo del carrito\n" +
            "5. Ver carrito\n" +
            "6. Salir y mostrar total"
        );

        if (accion === "1") {
            mostrarMenu("comida");
        } else if (accion === "2") {
            mostrarMenu("bebida");
        } else if (accion === "3") {
            let tipoArticulo = prompt("¿Qué tipo de artículo quieres añadir?\n1. Comida\n2. Bebida");
            let categoria = tipoArticulo === "1" ? "comida" : "bebida";
            let indiceArticulo = parseInt(prompt(`Introduce el número del artículo que quieres añadir al carrito de ${categoria}:`)) - 1;
            añadirAlCarrito(indiceArticulo, categoria);
        } else if (accion === "4") {
            mostrarCarrito();
            let articuloParaEliminar = parseInt(prompt("Introduce el número del artículo que quieres eliminar del carrito:")) - 1;
            eliminarDelCarrito(articuloParaEliminar);
        } else if (accion === "5") {
            mostrarCarrito();
        } else if (accion === "6") {
            mostrarCarrito();
            alert("¡Gracias por comprar!");
        } else {
            let mensaje = "Opción inválida, por favor intenta de nuevo.";
            console.log(mensaje);
            alert(mensaje);
        }
    }
}

// Iniciar la interacción con el usuario
interactuar();
