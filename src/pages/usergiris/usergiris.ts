import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KayitolPage } from '../kayitol/kayitol';
import { SonucogrenPage } from '../sonucogren/sonucogren';

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

  giris(){
    if(this.user_ad2=="özge" && this.sifre2=="123"){
      this.navCtrl.push(SonucogrenPage,{
        girisad:this.user_ad2
      });
    }
  }
  kayitsayfa(){
    this.navCtrl.push(KayitolPage);
  }

}
