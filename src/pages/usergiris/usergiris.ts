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
   public puangonder2:any;
   public adgonder2:any;
   public soyadgonder2:any;
   public gelenusad:string;
   public gelenussifre:any;
   public gelensoyad;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sayfamenu3=this.navParams.get('data');
    this.puangonder2=this.navParams.get('puangonder');
    this.adgonder2=this.navParams.get('adgonder');
    this.soyadgonder2=this.navParams.get('soyadgonder');
    this.gelenusad=this.navParams.get('gonderusad');
    this.gelenussifre=this.navParams.get('gondersifre');
    this.gelensoyad=this.navParams.get('gonderussoyad');
  }

  giris(){
    if(this.user_ad2=="özge" && this.sifre2=="123"){
      this.navCtrl.push(SonucogrenPage,{
        girisad:this.user_ad2,
        girispuan:this.puangonder2,
        girissoyad:this.soyadgonder2
      });
    }
    if(this.user_ad2==this.gelenusad && this.sifre2==this.gelenussifre){
      this.navCtrl.push(SonucogrenPage,{
        girisad:this.user_ad2,
        girispuan:this.puangonder2,
        girissoyad:this.gelensoyad
      });
    }
  }
  kayitsayfa(){
    this.navCtrl.push(KayitolPage);
  }

}
