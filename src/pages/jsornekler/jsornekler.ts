import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JsorneklerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-jsornekler',
  templateUrl: 'jsornekler.html',
})
export class JsorneklerPage {
   public sayfa7:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sayfa7=this.navParams.get('data6');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad JsorneklerPage');
  }

}
