// Métodos para Arreglos
const numeros = [10, 20, 30, 40, 50];

numeros.push(60, 70); 
numeros.unshift(-10, -20); 
numeros.pop(); 
numeros.shift(); 
numeros.splice(2, 1); 

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
const nuevoArreglo = [...meses, 'Mayo'];
console.log(nuevoArreglo);