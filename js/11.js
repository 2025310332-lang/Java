// Métodos para objetos (freeze y seal)
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

Object.freeze(producto);

console.log(Object.isFrozen(producto));