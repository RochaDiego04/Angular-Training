import { Component, Output, EventEmitter } from '@angular/core';
import { Persona } from '../../../models/persona.model';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.css']
})
export class AgregarPersonaComponent {
  @Output() personaAgregada = new EventEmitter<Persona>();

  nuevaPersona: Persona = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad: 0
  };

  agregarPersona() {
    this.personaAgregada.emit(this.nuevaPersona);
  }
}
