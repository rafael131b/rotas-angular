import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosServiceService } from './cursos-service.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  id:number=0;
  inscricao:Subscription=new Subscription()
  curso:any;
  
  constructor(private route:ActivatedRoute,private cursoService:CursosServiceService,
    private router:Router) {
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      this.id=params["id "];

      this.curso=this.cursoService.getCurso(this.id);

      if(this.curso==null){
        this.router.navigate(['/naoEncontrado',this.id])
      }
    })
    // this.id=this.route.snapshot.params["id "]
    // console.log(this.id);
  
  
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
