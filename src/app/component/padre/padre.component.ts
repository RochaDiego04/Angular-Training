import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  valor: string;
  mostrarHijo: boolean;
  constructor() {
    this.valor = '';
    this.mostrarHijo = false;
  }

  ngOnInit(): void {
  }

  public btnMostrarClick() {
    this.mostrarHijo = true;
  }

  public eventoRecepcionDato(valorRecepcion: String) {
    alert("Valor recibido: " + valorRecepcion);
  }

}
