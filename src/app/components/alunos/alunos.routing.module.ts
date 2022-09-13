import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

const AlunosRoutes: Routes = [
  {
    path: 'alunos',
    component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetailComponent },
      { path: ':id/editar', component: AlunoFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AlunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
