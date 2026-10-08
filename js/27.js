// POO Constructor y Prototypes
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
};

const producto2 = new Producto('Monitor Curvo 27"', 800);
const producto3 = new Producto('Laptop', 1500);

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());