import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarregandoPage } from './carregando';

@NgModule({
  declarations: [
    CarregandoPage,
  ],
  imports: [
    IonicPageModule.forChild(CarregandoPage),
  ],
})
export class CarregandoPageModule {}
