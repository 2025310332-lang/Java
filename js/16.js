// Funciones
sumar();
function sumar() {
    console.log(10 + 10);
}

const sumar2 = function() {
    console.log(3 + 3);
};
sumar2();

(function() {
    console.log('Esta es una función IIFE');
})();