import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CpluskonuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cpluskonu',
  templateUrl: 'cpluskonu.html',
})
export class CpluskonuPage {
  public sayfabilgi2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sayfabilgi2=this.navParams.get('data4');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CpluskonuPage');
  }

}
