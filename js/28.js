// Clases y Herencia (ES6)
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }
}

const producto = new Producto('Monitor Curvo 27"', 800);

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revolución', 120, '918239182391');
console.log(producto.formatearProducto());
console.log(libro.formatearProducto());