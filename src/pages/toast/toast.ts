import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }



    presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Esse é o toast',
      duration: 3000
    });
    toast.present();
  }

}
