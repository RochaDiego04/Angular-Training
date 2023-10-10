import { Component } from '@angular/core';
import { Persona } from '../../../models/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  public persona: Persona;
  public personas: Persona[] = [];
  public personaSeleccionada: Persona | null = null;

  /* Variables de ngIf */
  public editando: boolean;
  public agregando: boolean;
  public mostrarListado: boolean;

  constructor() {
    this.persona = new Persona('Diego', 'Rocha', 'Escamilla', 22);
    this.personas.push(this.persona);
    this.persona = new Persona('Angel', 'Guzman', 'Torres', 19);
    this.personas.push(this.persona);

    this.editando = false;
    this.agregando = false;
    this.mostrarListado = true;
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  editarPersona(persona: Persona) {
    this.editando = true;
    this.mostrarListado = false;
    this.personaSeleccionada = persona;
  }

  guardarCambiosPersona() {
    this.mostrarListado = true;
    this.editando = false;
  }

  mostrarAgregarPersona() {
    this.agregando = true;
    this.mostrarListado = false;
  }

  agregarNuevaPersona(persona: Persona) {
    this.agregando = false;
    this.mostrarListado = true;
    this.personas.push(persona);
  }

  eliminarPersona(persona: Persona) {
    const confirmar = window.confirm(`¿Deseas eliminar a ${persona.nombre}?`);

    if (confirmar) {
      const index = this.personas.indexOf(persona);
      if (index !== -1) {
        this.personas.splice(index, 1); // Elimina la persona del arreglo
      }
    }
  }
}
