import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import { UnoComponent } from './component/uno/uno.component';
import { DosComponent } from './component/dos/dos.component';
import { TresComponent } from './component/tres/tres.component';
import { PadreComponent } from './component/padre/padre.component';
import { PersonaComponent } from './component/persona/persona/persona.component';


const routes: Routes = [
  //Muestra el principal en caso de que path venga vacio o no exista
  {path: 'ejemplo/uno', component: UnoComponent},
  {path: 'ejemplo/dos', component: DosComponent},
  {path: 'ejemplo/tres', component: TresComponent},
  {path: 'ejemplo/padre', component: PadreComponent},
  {path: 'ejemplo/persona', component: PersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
