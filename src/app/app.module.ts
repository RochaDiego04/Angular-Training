import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { UnoComponent } from './component/uno/uno.component';
import { DosComponent } from './component/dos/dos.component';
import { TresComponent } from './component/tres/tres.component';
import { FormsModule } from '@angular/forms';
import { PadreComponent } from './component/padre/padre.component';
import { HijoComponent } from './component/padre/hijo/hijo.component';
import { PersonaComponent } from './component/persona/persona/persona.component';
import { EditarPersonaComponent } from './component/persona/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './component/persona/eliminar-persona/eliminar-persona.component';
import { AgregarPersonaComponent } from './component/persona/agregar-persona/agregar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    //Componente principal sin el cual no funciona
    PrincipalComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    PadreComponent,
    HijoComponent,
    PersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    AgregarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
