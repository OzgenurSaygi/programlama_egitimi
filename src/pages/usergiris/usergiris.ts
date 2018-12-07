import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KayitolPage } from '../kayitol/kayitol';

/**
 * Generated class for the UsergirisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-usergiris',
  templateUrl: 'usergiris.html',
})
export class UsergirisPage {
   public sayfamenu3:any;
   public user_ad2:string;
   public sifre2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sayfamenu3=this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsergirisPage');
  }
  giris(){
    
  }
  kayitsayfa(){
    this.navCtrl.push(KayitolPage);
  }

}
