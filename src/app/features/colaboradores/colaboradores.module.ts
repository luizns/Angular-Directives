import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';



@NgModule({
  declarations: [
    ColaboradoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColaboradoresComponent
  ]
})
export class ColaboradoresModule { }
