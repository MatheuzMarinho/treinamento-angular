import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { FormularioDinamicoComponent } from './paginas/formulario-dinamico/formulario-dinamico.component';
 
 
const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'formulario-dinamico', component: FormularioDinamicoComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}