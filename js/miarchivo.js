let numero = 1

class Producto{
    constructor (imagen, nombre, desc, precio){
        this.imagen = imagen
        this.nombre = nombre
        this.desc = desc
        this.precio = precio
        this.vendido = false
    }
}
// remeras
let remera1 = new Producto ("remera-mangas-cortas.jpg", "Remera mangas cortas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", "$2500");
let remera2 = new Producto ("remera-mangas-largas.jpg", "Remera mangas largas", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", "$1900");
let remera3 = new Producto ("remera-musculosa.jpg", "Remera musculosa", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", "$2100");
// pantalones
let pantalon1 = new Producto ("pantalon-corto.jpg", "Pantalon corto", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", "$2700");
let pantalon2 = new Producto ("pantalon-jean.webp", "Pantalon jean", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", "$3000");
let pantalon3 = new Producto ("pantalon-jogging.webp", "Pantalon jogging", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", "$2800");
// buzo
let buzo1 = new Producto ("buzo-capucha.jpg", "Buzo con capucha", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", "$4000");
let buzo2 = new Producto ("buzo-sin-capucha.png", "Buzo sin capucha", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", "$3500");

const remeras = {remera1, remera2, remera3};
const pantalones = {pantalon1, pantalon2, pantalon3};
const buzos = {buzo1, buzo2};

const productos = [remeras, pantalones, buzos];

// for (i = 0;i <productos.length; i++){
//     for (let propiedad in productos[i]){
//         console.log(`${propiedad}: ${productos[i].propiedad}`);
//     }
// }

// for (i = 0;i <productos.length; i++){
//     for (let propiedad in productos[i].buzo1){
//         console.log(`${propiedad}: ${productos[i].buzo1[propiedad]}`)
//     }
// }


// for (i = 0;i <productos.length; i++){
//     for (let propiedad in productos[i]){
//         for (let property in productos[i][propiedad]){
//             console.log(`${property}: ${productos[i][propiedad][property]}`)
//         }
//     }
// }

// function card(imagen, nombre, desc, precio){
//     alert(`CARD ${numero}\nLa imagen es: ${imagen}\nEl nombre es: ${nombre}\nLa desc es: ${desc}\nEl precio es: ${precio}`)
// }

// let num = parseInt(prompt("numero"));
// for (let propiedad in productos[num]){
//     for (let property in productos[num][propiedad]){
//         card(productos[num][propiedad][property])
//         console.log(`${property}: ${productos[num][propiedad][property]}`)
//     }
// }

// let num = parseInt(prompt("numero"));
// for (let propiedad in productos[num]){
//     card(productos[num][propiedad].imagen, productos[num][propiedad].nombre, productos[num][propiedad].desc, productos[num][propiedad].precio);
//     numero += 1
// }

// let cards = document.createElement("div");
// cards.className = "col mb-4";

// cards.innerHTML = `<div id="card" class="card"><img id="img" src="assets/img/remera-mangas-cortas.jpg" class="card-img-top" alt="paisaje"><div id="card-body" class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>`;

// cardDeck.append(cards)

let cardDeck = document.getElementById("card-deck");

function filtros() {
    for (let propiedad in productos[num]){
        for (i = 0;i <1; i++){
            let cards = document.createElement("div");
            cards.className = "col mb-4";
            cards.innerHTML = `<div id="card" class="card${i + 1}"><img id="img" src="assets/img/${productos[num][propiedad].imagen}" class="card-img-top" alt="paisaje"><div id="card-body" class="card-body"><h5 class="card-title">${productos[num][propiedad].nombre}</h5><p class="card-text">${productos[num][propiedad].desc}</p><a href="#" class="btn btn-primary">${productos[num][propiedad].precio}</a></div></div>`;
            cardDeck.append(cards)
        }
    }
}

let num = 0
filtros()
let botonRemeras = document.getElementById("remeras");
let botonPantalones = document.getElementById("pantalones");
let botonBuzos = document.getElementById("buzos");
let botonTodos = document.getElementById("todos");

botonRemeras.onclick = () => {
    while (cardDeck.firstChild) {
        cardDeck.removeChild(cardDeck.firstChild);
    }
    num = 0;
    filtros()
}

botonPantalones.onclick = () => {
    while (cardDeck.firstChild) {
        cardDeck.removeChild(cardDeck.firstChild);
    }
    num = 1;
    filtros()
}

botonBuzos.onclick = () => {
    while (cardDeck.firstChild) {
        cardDeck.removeChild(cardDeck.firstChild);
    }
    num = 2;
    filtros()
}

botonTodos.onclick = () => {
    while (cardDeck.firstChild) {
        cardDeck.removeChild(cardDeck.firstChild);
    }
    for (i = 0; i < 3; i++){
        for (let propiedad in productos[i]){
            for (index = 0;index <1; index++){
                let cards = document.createElement("div");
                cards.className = "col mb-4";
                cards.innerHTML = `<div id="card" class="card${i + 1}"><img id="img" src="assets/img/${productos[i][propiedad].imagen}" class="card-img-top" alt="paisaje"><div id="card-body" class="card-body"><h5 class="card-title">${productos[i][propiedad].nombre}</h5><p class="card-text">${productos[i][propiedad].desc}</p><a href="#" class="btn btn-primary">${productos[i][propiedad].precio}</a></div></div>`;
                cardDeck.append(cards)
            }
        }
    }
}