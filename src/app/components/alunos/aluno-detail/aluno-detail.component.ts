import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css'],
})
export class AlunoDetailComponent implements OnInit {
  aluno: any;
  inscricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService,
    private router:Router
  ) {}


  editarContato(){
    this.router.navigate(['alunos',this.aluno.id,'editar'])
  }
  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunoService.getAluno(parseInt(id));
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
