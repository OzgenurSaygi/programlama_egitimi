import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BosluksinavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bosluksinav',
  templateUrl: 'bosluksinav.html',
})
export class BosluksinavPage {
   public gelen3:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gelen3=this.navParams.get('sinav3');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BosluksinavPage');
  }

}
