import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosServiceService } from '../cursos-service.service';

@Component({
  selector: 'app-cursos-detalhes',
  templateUrl: './cursos-detalhes.component.html',
  styleUrls: ['./cursos-detalhes.component.css']
})
export class CursosDetalhesComponent implements OnInit {
  cursos:any[]=[];
  pagina:number=1;
  inscricao:Subscription=new Subscription()
  constructor(private cursosService:CursosServiceService,
    private route:ActivatedRoute,
    private router:Router) {
    

   }

  ngOnInit(): void {
    this.cursos=this.cursosService.getCursos()

    this.inscricao=this.route.queryParams.subscribe((queryParams:any)=>{
      this.pagina=queryParams['pagina']
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  proximaPagina(){
  
   this.router.navigate(['curso'],{queryParams:{'pagina':++this.pagina}})
  }

}
