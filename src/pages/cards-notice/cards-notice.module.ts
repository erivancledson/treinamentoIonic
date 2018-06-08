import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsNoticePage } from './cards-notice';

@NgModule({
  declarations: [
    CardsNoticePage,
  ],
  imports: [
    IonicPageModule.forChild(CardsNoticePage),
  ],
})
export class CardsNoticePageModule {}
