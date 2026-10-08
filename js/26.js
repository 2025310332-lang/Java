// El uso de this
const reservacion = {
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su total a pagar es de $${this.total}`);
    }
};

reservacion.informacion();