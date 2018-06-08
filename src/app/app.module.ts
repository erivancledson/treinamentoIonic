
import { ToastPage } from './../pages/toast/toast';
import { SlidePage } from './../pages/slide/slide';
import { SearchPage } from './../pages/search/search';
import { LoadingPage } from './../pages/loading/loading';
import { CardsNoticePage } from './../pages/cards-notice/cards-notice';
import { CarregandoPage } from './../pages/carregando/carregando';
import { ModalPage } from './../pages/modal/modal';
import { FabsPage } from './../pages/fabs/fabs';

import { MyCardsPage } from './../pages/my-cards/my-cards';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { ListaPage } from './../pages/lista/lista';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyCardsPage,
    ListaPage,
    LoginPage,
    FabsPage,
    ModalPage,
    CarregandoPage,
    CardsNoticePage,
    LoadingPage,
    SearchPage,
    SlidePage,
    ToastPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyCardsPage,
    ListaPage,
    LoginPage,
    FabsPage,
    ModalPage,
    CarregandoPage,
    CardsNoticePage,
    LoadingPage,
    SearchPage,
    SlidePage,
    ToastPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
