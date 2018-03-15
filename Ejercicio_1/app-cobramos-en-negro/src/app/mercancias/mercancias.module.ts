import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MercanciasRoutingModule } from './mercancias-routing.module';
import { EntradasComponent } from './entradas/entradas.component';
import { SalidasComponent } from './salidas/salidas.component';

@NgModule({
  imports: [
    CommonModule,
    MercanciasRoutingModule
  ],
  declarations: [EntradasComponent, SalidasComponent]
})
export class MercanciasModule { }
