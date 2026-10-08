// Métodos Iterativos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisor 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 }
];

const resultado = meses.includes('Marzo');
const existe = carrito.some(producto => producto.nombre === 'Celular');
const total = carrito.reduce((total, producto) => total + producto.precio, 0);
const resultado2 = carrito.filter(producto => producto.precio > 400);

console.log(resultado);
console.log(existe);
console.log(total);
console.log(resultado2);