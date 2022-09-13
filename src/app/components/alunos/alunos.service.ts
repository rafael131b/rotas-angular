import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

   alunos:any=[
    {id:1,nome:"Laura",email:"lauraFeracci@gmail.com",idade:23},
    {id:2,nome:"Evelyn",email:"evelynha@gmail.com",idade:24},
    {id:3,nome:"Uesley",email:"UesleyyMoura@gmail.com",idade:25},
    {id:4,nome:"Natanaelton",email:"natanTerror@gmail.com",idade:22}
  ]

  getAlunos(){
    return this.alunos;
  }

  getAluno(id:number){
    let alunos=this.getAlunos()
    for(let i=0;i<alunos.length;i++){
      let aluno=this.alunos[i]
      if(aluno.id==id){
        return aluno
      }
    }
    return null

  }

  constructor() { }
}
