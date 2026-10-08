// Métodos de Propiedad
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    }
};

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`);
};

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlaylist('Heavy Metal');
reproductor.borrarCancion(20);