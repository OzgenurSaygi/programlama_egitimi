import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CplusornekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cplusornek',
  templateUrl: 'cplusornek.html',
})
export class CplusornekPage {
    public sayfa8:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sayfa8=this.navParams.get('data8');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CplusornekPage');
  }

}
