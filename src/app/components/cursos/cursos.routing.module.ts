import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { CursosComponent } from './cursos.component';
import { CursosErrorComponent } from './cursos-error/cursos-error.component';

const CursosRoutes: Routes = [


  {path:'cursos/:id ',component:CursosComponent},
  {path:'curso',component:CursosDetalhesComponent},
  {path:'naoEncontrado',component:CursosErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(CursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
