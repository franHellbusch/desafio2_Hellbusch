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
let buzo1 = new Producto ("buzo-capucha.webp", "Buzo con capucha", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima", "$4000");
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

function card(imagen, nombre, desc, precio){
    alert(`CARD ${numero}\nLa imagen es: ${imagen}\nEl nombre es: ${nombre}\nLa desc es: ${desc}\nEl precio es: ${precio}`)
}

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

let cardDeck = document.getElementById("card-deck");

let cards = document.createElement("div");
cards.className = "card";

cards.innerHTML = `<img id="img" src="assets/img/remera-mangas-cortas.jpg" class="card-img-top" alt="paisaje"><div id="card-body" class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa facere quisquam minima</p><a href="#" class="btn btn-primary">Go somewhere</a></div>`;

cardDeck.append(cards)