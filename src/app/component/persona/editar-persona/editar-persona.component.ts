import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {
  @Input() paramPersona: any;
  @Output() guardarCambiosClick = new EventEmitter<void>();

  guardarCambios() {
    this.guardarCambiosClick.emit();
  }
}
