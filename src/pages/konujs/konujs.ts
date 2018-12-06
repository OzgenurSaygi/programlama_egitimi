import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KonujsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-konujs',
  templateUrl: 'konujs.html',
})
export class KonujsPage {
  public sayfabilgi:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.sayfabilgi=this.navParams.get('data3');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonujsPage');
  }

}
