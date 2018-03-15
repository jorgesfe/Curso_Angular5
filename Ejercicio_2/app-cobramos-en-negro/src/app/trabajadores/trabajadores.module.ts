import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajadoresRoutingModule } from './trabajadores-routing.module';
import { ListaTrabajadoresComponent } from './lista-trabajadores/lista-trabajadores.component';

@NgModule({
  imports: [
    CommonModule,
    TrabajadoresRoutingModule
  ],
  declarations: [ListaTrabajadoresComponent]
})
export class TrabajadoresModule { }
