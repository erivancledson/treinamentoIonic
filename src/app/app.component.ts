
import { ToastPage } from './../pages/toast/toast';
import { SlidePage } from './../pages/slide/slide';
import { SearchPage } from './../pages/search/search';
import { LoadingPage } from './../pages/loading/loading';
import { CardsNoticePage } from './../pages/cards-notice/cards-notice';
import { FabsPage } from './../pages/fabs/fabs';
import { ModalPage } from './../pages/modal/modal';
import { CarregandoPage } from './../pages/carregando/carregando';

import { MyCardsPage } from './../pages/my-cards/my-cards';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { ListaPage } from './../pages/lista/lista';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    //aqui fica o menu
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Cards', component: MyCardsPage},
      { title: 'Lista', component: ListaPage},
      { title: 'Login', component: LoginPage},
      { title:'Carregando', component: CarregandoPage},
      { title:'Modal', component: ModalPage},
      { title: 'Fabs', component: FabsPage},
      { title: 'Cards Notice', component: CardsNoticePage},
      {title: 'Loading', component: LoadingPage},
      {title: 'Search', component: SearchPage},
      {title:'Slide', component: SlidePage},
      {title: 'Toast', component: ToastPage},
   
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
