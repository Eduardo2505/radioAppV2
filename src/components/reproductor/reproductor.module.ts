import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReproductorComponent } from './reproductor';

@NgModule({
  declarations: [
    ReproductorComponent,
  ],
  imports: [
    IonicPageModule.forChild(ReproductorComponent),
  ],
  exports: [
    ReproductorComponent
  ]
})
export class ReproductorComponentModule {}
