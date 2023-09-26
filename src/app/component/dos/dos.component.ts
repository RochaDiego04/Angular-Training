import { Component } from '@angular/core';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent {

  mostrar: boolean = false;

  

  btnMostar_Click () {
    this.mostrar = !this.mostrar;
  }
  

}

