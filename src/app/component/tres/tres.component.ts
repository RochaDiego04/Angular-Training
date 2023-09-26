import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent implements OnInit{
  titulo?: string;
  numeros: number[] = [1,2,3,4];
  mostrar: boolean[] = [];
  numeroNuevo?: number;

  constructor(private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.titulo = params['titulo'];
    });
    this.mostrar = new Array(this.numeros.length).fill(false);
  }

  public btnMensaje_Click(valor: number, indice: number){
    alert("El valor es: " + valor + " El indice es: " + indice)
  }
  public btnModificar_Click(i: number){
    this.mostrar[i] = !this.mostrar[i];
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  public btnEliminar_Click(index: any, item: any) {
    alert("Se eliminara el valor " + item)
    //this.numeros.findIndex(index).toString();
    
    this.numeros.splice(index, 1);
    this.numeros.pop();

  }
}
