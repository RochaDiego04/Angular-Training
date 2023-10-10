import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ResponseModel } from '../models/response.model';
import { map } from 'rxjs';
import { Login } from '../models/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

   Url = environment.URL_Peticiones + "Peticiones/" /* peticiones = controlador de la API, apuntamos a su URL */
  
   constructor(private httpClient: HttpClient) { }

   public GetDatos(valor: string){
    return this.httpClient.get<ResponseModel>(this.Url+"PeticionGet/"+valor).pipe(map(data=>data));    /*reponse model tiene 3 atributos */
   }

   public ValidaUsuario(usuario: Login){
    return this.httpClient.post<ResponseModel>(this.Url+"PeticionPost/", usuario).pipe(map(data=>data));
   }

   public CambiarContrasenia(usuario: Login){
    return this.httpClient.put<ResponseModel>(this.Url+"PeticionPuts/", usuario).pipe(map(data=>data));
   }
}
