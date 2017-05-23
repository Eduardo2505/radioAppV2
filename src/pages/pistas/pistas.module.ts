import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PistasPage } from './pistas';

@NgModule({
  declarations: [
    PistasPage,
  ],
  imports: [
    IonicPageModule.forChild(PistasPage),
  ],
  exports: [
    PistasPage
  ]
})
export class PistasPageModule {}
