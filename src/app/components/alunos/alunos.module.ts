import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { CommonModule } from '@angular/common';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [AlunosComponent, AlunoFormComponent, AlunoDetailComponent],
    providers: [AlunosService],
})
export class AlunosModule { }
