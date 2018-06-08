import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }



  slides = [
    {
      title: "Dublin!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
       image: "assets/imgs/dublin.jpg",
    },
    {
      title: "Orlando?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/orlando.jpg",
    },
    {
      title: "Inglaterra",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/inglaterra.jpg",
    }
  ];


}
