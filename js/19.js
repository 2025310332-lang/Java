// Retorno de Valores
function sumar(n1, n2) {
    return n1 + n2;
}

const resultado = sumar(15, 25);
console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.16 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(`El subtotal es: $${total}`);
console.log(`El total a pagar con impuestos es: $${totalPagar}`);