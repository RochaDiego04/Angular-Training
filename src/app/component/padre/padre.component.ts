import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';
import { Mensaje } from 'src/app/models/mensaje.model';
import { Login } from 'src/app/models/login/login.model';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  valorGet: string;
  valor: string;
  contrasenia: string;
  mostrarHijo: boolean;

  constructor(private peticionesService: PeticionesService, private eventoService: EventosService){
    this.valorGet = "";
    this.valor = ""; //Esta variable almacena lo que el usuario ingrese desde el input de "padre.component.html"
    this.contrasenia = "";
    this.mostrarHijo = false;
  }

  ngOnInit(): void{
  }

  public btnActualizar_Click(){
    let usuario = new Login();
    usuario.usuario = this.valor;
    usuario.contraseña = this.contrasenia;
    this.peticionesService.CambiarContrasenia(usuario).subscribe({
      next:(dato) => {
        if(dato.ok) {
          alert("La contraseña se cambió a: "+ (dato.datos as Login).contraseña);
        }
        else {
          alert(dato.mensaje);
        }
      },
      error:(error) => {
        console.log("error: ", error.message);
        alert("Error comunicación: "+ error.message);
      }
    });
  }

  public peticionGet(){
    debugger
    let mensaje = new Mensaje();
    mensaje.mensaje = "Peticion get";
    mensaje.tipo = "success";
    this.eventoService.mostrarMensaje.next(mensaje);

    let usuarioStr = localStorage.getItem("usuario");

    if (usuarioStr != null) {
      let usu = JSON.parse(usuarioStr) as Login;
      console.log("mi usuario recuperado", usu);
    }

    // alert("Mi valor:" + usuarioStr);
    // this.servicio.GetDatos(this.valorGet).subscribe({
    //   next: (dato) => {
    //     if (dato.ok) {
    //       alert(dato.datos);
    //     }
    //   },
    //   error: (error) => {
    //     console.log("error:", error);
    //   }
    // });
    // console.log("continua");
  }

  public btnMostrar_Click(){

    let usuario = new Login();
    usuario.usuario = this.valor;
    usuario.contraseña = this.contrasenia;

    this.peticionesService.ValidaUsuario(usuario).subscribe({
      next:(dato)=>{
        if(dato.ok){
          debugger;
          alert("usuario válido");
          this.mostrarHijo = true;
          //Convertir usuario a cadena (JSON)
          let usuarioStr = JSON.stringify(dato.datos as Login);
          localStorage.setItem("usuario", usuarioStr);
          console.log("datos de respuesta: ", (dato.datos as Login));
        }
        else {
          alert(dato.mensaje);
        }
      },
      error: (error) => {}
    });
  }

  public eventoRecepcionDato(valorRecepcion: string){
    alert("Valor recibido: "+ valorRecepcion);
  }

  public eventoOcultarHijo(mostrar: boolean){
    this.mostrarHijo = mostrar;
  }
}
