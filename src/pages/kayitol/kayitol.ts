import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KayitolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-kayitol',
  templateUrl: 'kayitol.html',
})
export class KayitolPage {
    public sayfamenu2:any;
    public user_ad:string;
    public user_soyad:string;
    public sifre:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sayfamenu2=this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KayitolPage');
  }
  kaydet(){}
  temizle(){
    document.getElementById('metin').innerHTML=" ";
  }

}
