// Array para almacenar el menú de comidas
let menuComidas = [
    { name: "Pizza", price: 3400 },
    { name: "Milanesa", price: 7000 },
    { name: "Hamburguesa", price: 7500 },
    { name: "Asado", price: 11000 },
    { name: "Lomito", price: 8000 },
    { name: "Empanadas", price: 1300 },
    { name: "Sandwich", price: 3000 },
    { name: "Ensalada", price: 2500 }
];

// Array para almacenar el menú de bebidas
let menuBebidas = [
    { name: "Coca Cola", price: 1300 },
    { name: "Sprite", price: 1200 },
    { name: "Agua", price: 700 },
    { name: "Cerveza", price: 2000 },
    { name: "Vino", price: 2300 }
];

// Array para almacenar los artículos en el carrito
let carrito = [];

// Función para mostrar el menú de comidas
function mostrarMenuComidas() {
    let mensaje = "Menú de comidas:\n";
    for (let i = 0; i < menuComidas.length; i++) {
        mensaje += (i + 1) + ". " + menuComidas[i].name + " - $" + menuComidas[i].price.toFixed(2) + "\n";
    }
    console.log(mensaje);
    alert(mensaje);
}

// Función para mostrar el menú de bebidas
function mostrarMenuBebidas() {
    let mensaje = "Menú de bebidas:\n";
    for (let i = 0; i < menuBebidas.length; i++) {
        mensaje += (i + 1) + ". " + menuBebidas[i].name + " - $" + menuBebidas[i].price.toFixed(2) + "\n";
    }
    console.log(mensaje);
    alert(mensaje);
}

// Función para poner algo en el carrito
function añadirAlCarrito(indiceArticulo, tipo) {
    let menu = tipo === "comida" ? menuComidas : menuBebidas;
    // Verificar si el índice es válido
    if (indiceArticulo >= 0 && indiceArticulo < menu.length) {
        carrito.push(menu[indiceArticulo]);
        let mensaje = "Añadido al carrito: " + menu[indiceArticulo].name;
        console.log(mensaje);
        alert(mensaje);
    } else {
        let mensaje = "Índice de artículo no válido.";
        console.log(mensaje);
        alert(mensaje);
    }
}

// Función para eliminar algo del carrito
function eliminarDelCarrito(indiceArticulo) {
    // Verificar si el índice es válido
    if (indiceArticulo >= 0 && indiceArticulo < carrito.length) {
        let mensaje = "Eliminado del carrito: " + carrito[indiceArticulo].name;
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
        for (let i = 0; i < carrito.length; i++) {
            mensaje += (i + 1) + ". " + carrito[i].name + " - $" + carrito[i].price.toFixed(2) + "\n";
            total += carrito[i].price;
        }
        mensaje += "Total: $" + total.toFixed(2);
        console.log(mensaje);
        alert(mensaje);
    }
}

// Función de menu
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
            mostrarMenuComidas();
        } else if (accion === "2") {
            mostrarMenuBebidas();
        } else if (accion === "3") {
            let tipoArticulo = prompt("¿Qué tipo de artículo quieres añadir?\n1. Comida\n2. Bebida");
            let indiceArticulo = parseInt(prompt("Introduce el número del artículo que quieres añadir al carrito:")) - 1;
            if (tipoArticulo === "1") {
                añadirAlCarrito(indiceArticulo, "comida");
            } else if (tipoArticulo === "2") {
                añadirAlCarrito(indiceArticulo, "bebida");
            } else {
                alert("Tipo de artículo no válido.");
            }
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
            let mensaje = "Opción invalida, por favor intenta de nuevo.";
            console.log(mensaje);
            alert(mensaje);
        }
    }
}

// Iniciar el comndo
interactuar();
