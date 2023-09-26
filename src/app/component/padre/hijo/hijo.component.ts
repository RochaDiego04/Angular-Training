import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() parametro: string;
  @Output() eventoMensaje = new EventEmitter<String>();

  valorHijo: string;
  constructor() {
    this.parametro = '';
    this.valorHijo = '';
  }

  ngOnInit(): void {
  }

  public btnRegresarClick() {
    debugger;
    this.eventoMensaje.emit(this.valorHijo);
  }

}
