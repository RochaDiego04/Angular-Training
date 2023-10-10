import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { AgregarPersonaComponent } from './component/persona/agregar-persona/agregar-persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table';
// import { AutInterceptor } from '../services/aut.interceptor';
import { SplitterModule } from 'primeng/splitter';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    PadreComponent,
    HijoComponent,
    PersonaComponent,
    EditarPersonaComponent,
    AgregarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    SplitterModule,
    MessagesModule,
    PanelModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
    ToastModule,
    DynamicDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
