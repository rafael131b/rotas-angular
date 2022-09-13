import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { CursosServiceService } from './cursos-service.service';
import { CursosErrorComponent } from './cursos-error/cursos-error.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos.routing.module';



@NgModule({
    imports: [CommonModule,RouterModule,CursosRoutingModule],
    exports: [],
    declarations: [
        CursosDetalhesComponent,
        CursosComponent,
        CursosErrorComponent
    ],
    providers: [CursosServiceService],
})
export class CursosModule { }
