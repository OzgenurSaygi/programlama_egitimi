import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HtmlorneklerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-htmlornekler',
  templateUrl: 'htmlornekler.html',
})
export class HtmlorneklerPage {
   public sayfa6:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sayfa6=this.navParams.get('data5');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtmlorneklerPage');
  }

}
