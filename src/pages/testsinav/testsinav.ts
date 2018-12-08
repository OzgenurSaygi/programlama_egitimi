import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestsinavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-testsinav',
  templateUrl: 'testsinav.html',
})
export class TestsinavPage {
   public gelen:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gelen=this.navParams.get('sinav');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestsinavPage');
    if(this.gelen=="Test 1"){
      document.getElementById('soru1').innerHTML="Sınav 1 dir";
    }
    else if(this.gelen=="Test 2"){
      document.getElementById('soru1').innerHTML="Sınav 2 dir";
    }
  }

}
