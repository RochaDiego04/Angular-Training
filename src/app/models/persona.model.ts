export class Persona {
    public nombre: String = '';
    public apellidoPaterno: String = '';
    public apellidoMaterno: String = '';
    public edad: number;

    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, edad: number){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    
}
