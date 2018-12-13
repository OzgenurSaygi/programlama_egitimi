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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.girisad=this.navParams.get('girisad');
  }
  ionViewDidLoad() {
      document.getElementById('adi').innerHTML=this.girisad;
    document.getElementById('soyadi').innerHTML="Saygı";
    document.getElementById('adi').style.padding='10px';
    document.getElementById('soyadi').style.padding='10px';
  }

}
