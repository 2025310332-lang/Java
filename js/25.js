// forEach y map
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisor 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 }
];

carrito.forEach(producto => console.log(producto.nombre));

const arreglo2 = carrito.map(producto => `${producto.nombre} - $${producto.precio}`);
console.log(arreglo2);