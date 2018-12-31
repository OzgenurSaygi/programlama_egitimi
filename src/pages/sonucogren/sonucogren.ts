import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SonucogrenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sonucogren',
  templateUrl: 'sonucogren.html',
})
export class SonucogrenPage {
  public girisad:string;
  public not:Number;
  public soyadi:string;
  public not2:Number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.girisad=this.navParams.get('girisad');
    this.not=this.navParams.get('girispuan');
    this.soyadi=this.navParams.get('girissoyad');
    this.not2=this.navParams.get('girispuan2');


    
  }
  ionViewDidLoad() {
      document.getElementById('adi').innerHTML=this.girisad;
    document.getElementById('adi').style.padding='10px';
    document.getElementById('soyadi').style.padding='10px';
    if(this.girisad!=" "){
      document.getElementById('not1').innerHTML=String(this.not);
      document.getElementById('soyadi').innerHTML=this.soyadi;
    }
  }

}
