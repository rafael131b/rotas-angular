import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {
  getCursos(){
    return [
      {id:1,nome:"angular2"},
      {id:2,nome:"react"},
      {id:3,nome:"vue js"},
      {id:4,nome:"Javascript"}
    ]
  }

  getCurso(id:number){
    let cursos=this.getCursos()
    for(let i=0;i<cursos.length;i++){
      let curso=cursos[i]
      if(curso.id==id){
        return curso
      }
    }
    return null

  }

  constructor() { }
}
