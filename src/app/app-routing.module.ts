import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
// import { CursosComponent } from './components/cursos/cursos.component';
// import { CursosDetalhesComponent } from './components/cursos/cursos-detalhes/cursos-detalhes.component';
// import { CursosErrorComponent } from './components/cursos/cursos-error/cursos-error.component';

const routes: Routes = [

  {path:'',component:MainComponent},
  // {path:'cursos/:id ',component:CursosComponent},
  // {path:'curso',component:CursosDetalhesComponent},
  // {path:'naoEncontrado',component:CursosErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
