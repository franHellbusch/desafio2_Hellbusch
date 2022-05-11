// constructor
class Producto{
    constructor (imagen, nombre, desc, precio, id){
        this.imagen = imagen
        this.nombre = nombre
        this.desc = desc
        this.precio = precio
        this.id = id
        this.vendido = false
    }
}
// remeras
let remera1 = new Producto ("remera-mangas-cortas.jpg", "Remera mangas cortas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", 2500, "remeraCorta");
let remera2 = new Producto ("remera-mangas-largas.jpg", "Remera mangas largas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", 1900, "remeraLarga");
let remera3 = new Producto ("remera-musculosa.jpg", "Remera musculosa", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", 2100, "remeraMusculosa");
// pantalones
let pantalon1 = new Producto ("pantalon-corto.jpg", "Pantalon corto", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", 2700, "pantalonCorto");
let pantalon2 = new Producto ("pantalon-jean.webp", "Pantalon jean", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", 3000, "pantalonJean");
let pantalon3 = new Producto ("pantalon-jogging.webp", "Pantalon jogging", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", 2800, "pantalonJogging");
// buzo
let buzo1 = new Producto ("buzo-capucha.jpg", "Buzo con capucha", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", 4000, "buzoCapucha");
let buzo2 = new Producto ("buzo-sin-capucha.png", "Buzo sin capucha", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", 3500, "buzoSinCapucha");

const remeras = {remera1, remera2, remera3};
const pantalones = {pantalon1, pantalon2, pantalon3};
const buzos = {buzo1, buzo2};

const productos = [remeras, pantalones, buzos];

let contenidoCarrito = [];


// seccion de Filtros
let cardDeck = document.getElementById("cardDeck");

function filtros() {
    for (let propiedad in productos[num]){
        for (i = 0;i <1; i++){
            let cards = document.createElement("div");
            cards.className = "col mb-4";
            cards.innerHTML = `<div id="card" class="card${i + 1}"><img id="img" src="assets/img/${productos[num][propiedad].imagen}" class="card-img-top" alt="paisaje"><div id="card-body" class="card-body"><h5 class="card-title">${productos[num][propiedad].nombre}</h5><p class="card-text">${productos[num][propiedad].desc}</p><botton id="${productos[num][propiedad].id}" class="btn btn-primary">COMPRAR ($${productos[num][propiedad].precio})</bottom></div></div>`;
            cardDeck.append(cards)
        }
    }
}

let num = 0
todosFiltro();
comprarRemeras();
comprarPantalones();
comprarBuzos();
let botonRemeras = document.getElementById("remeras");
let botonPantalones = document.getElementById("pantalones");
let botonBuzos = document.getElementById("buzos");
let botonTodos = document.getElementById("todos");


botonRemeras.onclick = () => {
    while (cardDeck.firstChild) {
        cardDeck.removeChild(cardDeck.firstChild);
    }
    num = 0;
    filtros();
    comprarRemeras();
}

botonPantalones.onclick = () => {
    while (cardDeck.firstChild) {
        cardDeck.removeChild(cardDeck.firstChild);
    }
    num = 1;
    filtros()
    comprarPantalones()
}

botonBuzos.onclick = () => {
    while (cardDeck.firstChild) {
        cardDeck.removeChild(cardDeck.firstChild);
    }
    num = 2;
    filtros()
    comprarBuzos()
}

// funcion de Filtro: todos los productos
function todosFiltro() {
    for (i = 0; i < 3; i++){
        for (let propiedad in productos[i]){
            for (index = 0;index <1; index++){
                let cards = document.createElement("div");
                cards.className = "col mb-4";
                cards.innerHTML = `<div id="card" class="card${i + 1}"><img id="img" src="assets/img/${productos[i][propiedad].imagen}" class="card-img-top" alt="paisaje"><div id="card-body" class="card-body"><h5 class="card-title">${productos[i][propiedad].nombre}</h5><p class="card-text">${productos[i][propiedad].desc}</p><botton id="${productos[i][propiedad].id}" class="btn btn-primary">COMPRAR ($${productos[i][propiedad].precio})</botton></div></div>`;
                cardDeck.append(cards)
            }
        }
    }
}

botonTodos.onclick = () => {
    while (cardDeck.firstChild) {
        cardDeck.removeChild(cardDeck.firstChild);
    }
    todosFiltro();
    comprarBuzos();
    comprarRemeras();
    comprarPantalones();
}

// seccion de Carrito de compra
let carrito = document.getElementById("carritoContenido");
let vaciarCarrito = document.getElementById("borrarCarrito");

vaciarCarrito.onclick = () => {
    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }
    contenidoCarrito = [];
    sacarTotal();
}

let totalCarrito = document.getElementById("totalCarrito");
function sacarTotal() {
    let total = contenidoCarrito.reduce ((acc,el) => acc + el.precio, 0);
    totalCarrito.innerHTML = `TOTAL: ${total}`;
}


function comprarRemeras() {
    let boton1 = document.getElementById("remeraCorta");
    let boton2 = document.getElementById("remeraLarga");
    let boton3 = document.getElementById("remeraMusculosa");
    boton1.onclick = () => {
        let remeraCorta = document.createElement("li");
        remeraCorta.innerHTML = "Remera de mangas cortas ($2500)";
        carrito.append(remeraCorta);
        contenidoCarrito.push(remera1);
        sacarTotal();
    }
    boton2.onclick = () => {
        let remeraLarga = document.createElement("li");
        remeraLarga.innerHTML = "Remera de mangas largas ($1900)";
        carrito.append(remeraLarga);
        contenidoCarrito.push(remera2);
        sacarTotal();
    }
    boton3.onclick = () => {
        let remeraMusculosa = document.createElement("li");
        remeraMusculosa.innerHTML = "Remera de musculosa ($2100)";
        carrito.append(remeraMusculosa);
        contenidoCarrito.push(remera3);
        sacarTotal();
    }
}

function comprarPantalones() {
    let boton1 = document.getElementById("pantalonCorto");
    let boton2 = document.getElementById("pantalonJean");
    let boton3 = document.getElementById("pantalonJogging");
    boton1.onclick = () => {
        let pantalonCorto = document.createElement("li");
        pantalonCorto.innerHTML = "Pantalon corto ($2700)";
        carrito.append(pantalonCorto);
        contenidoCarrito.push(pantalon1);
        sacarTotal();
    }
    boton2.onclick = () => {
        let pantalonJean = document.createElement("li");
        pantalonJean.innerHTML = "Pantalon jean ($3000)";
        carrito.append(pantalonJean);
        contenidoCarrito.push(pantalon2);
        sacarTotal();
    }
    boton3.onclick = () => {
        let pantalonJogging = document.createElement("li");
        pantalonJogging.innerHTML = "Pantalon jogging ($2800)";
        carrito.append(pantalonJogging);
        contenidoCarrito.push(pantalon3);
        sacarTotal();
    }
}

function comprarBuzos() {
    let boton1 = document.getElementById("buzoCapucha");
    let boton2 = document.getElementById("buzoSinCapucha");
    boton1.onclick = () => {
        let buzoCapucha = document.createElement("li");
        buzoCapucha.innerHTML = "Buzo con capucha ($4000)";
        carrito.append(buzoCapucha);
        contenidoCarrito.push(buzo1);
        sacarTotal();
    }
    boton2.onclick = () => {
        let buzoSinCapucha = document.createElement("li");
        buzoSinCapucha.innerHTML = "Buzo sin capucha ($3500)";
        carrito.append(buzoSinCapucha);
        contenidoCarrito.push(buzo2);
        sacarTotal();
    }
}

let iconCarrito = document.getElementById("iconCarrito");
let closeSidenav = document.getElementById("closeSidenav");
let mySidenav = document.getElementById("mySidenav");

iconCarrito.onclick = () => {
    mySidenav.style.width = "350px";
    sacarTotal();
}

closeSidenav.onclick = () => {
    mySidenav.style.width = "0px";
}