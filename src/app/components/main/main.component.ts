import { Component, OnInit } from '@angular/core';
import { CursosServiceService } from '../cursos/cursos-service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  id:string='';
  cursos:any[]=[];
  
  constructor(private cursosService:CursosServiceService) {
    this.cursos=cursosService.getCursos()
    console.log(this.cursos);
    

   }

  ngOnInit(): void {
  }

}
