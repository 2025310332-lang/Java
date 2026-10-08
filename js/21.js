// Arrow Functions
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisor 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 }
];

const resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);