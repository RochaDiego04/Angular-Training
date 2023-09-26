import { Component } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent {

  mensaje: string="Ejemplo NGMModel desde la variable";

  constructor() {

   }

  ngOnInit(): void {

  }

  public btnMensaje_Click() {
    alert("El valor es: " + this.mensaje);
  }
}
