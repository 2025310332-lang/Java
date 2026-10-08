// Estructuras de Control: If / Else
const puntaje = 1000;

if (puntaje === 1000) {
    console.log('El puntaje es 1000');
} else {
    console.log('No es igual');
}

const rol = 'ADMINISTRADOR';

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'EDITOR') {
    console.log('Puedes entrar pero no editar todo');
} else {
    console.log('No tienes acceso');
}