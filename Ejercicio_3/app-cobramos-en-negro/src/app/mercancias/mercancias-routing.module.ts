import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* LOCAL */
import { EntradasComponent } from './entradas/entradas.component';
import { SalidasComponent } from './salidas/salidas.component';

const routes: Routes = [
  {
    path: '',
    component: EntradasComponent
  },
  {
    path: 'salidas',
    component: SalidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MercanciasRoutingModule { }
