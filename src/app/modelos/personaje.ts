export class Personaje {
    
    constructor(  nombre = '', franquicia = '', descripcion = '', imagen = '') {
        this.nombre = nombre;
        this.franquicia = franquicia;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    

    nombre: String;
	franquicia: String;
	descripcion: String;
	imagen: String;
}
