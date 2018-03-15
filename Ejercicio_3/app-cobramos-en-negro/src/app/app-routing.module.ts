import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mercancias',
    loadChildren: './mercancias/mercancias.module#MercanciasModule'
  },
  {
    path: 'trabajadores',
    loadChildren: './trabajadores/trabajadores.module#TrabajadoresModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
