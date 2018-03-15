import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* LOCAL */
import { ListaTrabajadoresComponent } from './lista-trabajadores/lista-trabajadores.component';

const routes: Routes = [
  {
    path : '',
    component : ListaTrabajadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabajadoresRoutingModule { }
