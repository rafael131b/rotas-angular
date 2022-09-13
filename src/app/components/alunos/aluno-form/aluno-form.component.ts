import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent implements OnInit {
  aluno: any = {};
  alunoNome=''
  inscricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunoService.getAluno(id);
      if (this.aluno == null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
