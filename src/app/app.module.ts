import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';

import { FormsModule } from '@angular/forms';
import { CursosModule } from './components/cursos/cursos.module';
import { AlunosModule } from './components/alunos/alunos.module';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CursosModule,
    AlunosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
