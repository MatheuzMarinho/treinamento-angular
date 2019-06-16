import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioDinamicoComponent } from './paginas/formulario-dinamico/formulario-dinamico.component'
import { HttpClientModule }    from '@angular/common/http';
import { ListagemClientesComponent } from './paginas/listagem-clientes/listagem-clientes.component';
import { DetalhesClienteComponent } from './paginas/detalhes-cliente/detalhes-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FormularioComponent,
    FormularioDinamicoComponent,
    ListagemClientesComponent,
    DetalhesClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
