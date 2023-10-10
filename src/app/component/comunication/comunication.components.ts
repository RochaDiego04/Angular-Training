import { Component, OnInit } from "@angular/core";
import { EventosService } from "src/app/services/eventos.service";

@Component({
    selector: 'app-comunication',
    templateUrl: './comunication.component.html',
    styleUrls: ['./comunication.component.css']
})

export class comunicationComponent implements OnInit {

    constructor (private eventoService: EventosService) {
    }

    ngOnInit(): void {
    }

    public btnMostrarControlClick() {
        this.eventoService.cambioValor.next(true);
    }
}