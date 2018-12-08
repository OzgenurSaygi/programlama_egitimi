import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EkransinavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ekransinav',
  templateUrl: 'ekransinav.html',
})
export class EkransinavPage {
  public gelen2:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gelen2=this.navParams.get('sinav2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EkransinavPage');
    if(this.gelen2=="Ekran Çıktısı Sınav 7"){
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
  }

}
