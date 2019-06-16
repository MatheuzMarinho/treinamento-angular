import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { FormularioDinamicoComponent } from './paginas/formulario-dinamico/formulario-dinamico.component';
import { ListagemClientesComponent } from './paginas/listagem-clientes/listagem-clientes.component';
import { DetalhesClienteComponent } from './paginas/detalhes-cliente/detalhes-cliente.component';
 
 
const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'formulario-dinamico', component: FormularioDinamicoComponent },
  { path: 'listagem-clientes', component: ListagemClientesComponent } ,
  { path: 'detalhes-cliente/:nome', component: DetalhesClienteComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}