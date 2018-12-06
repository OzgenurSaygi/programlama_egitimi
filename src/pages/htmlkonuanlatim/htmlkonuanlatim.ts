import { Component } from '@angular/core';
import { NavController, NavParams, List } from 'ionic-angular';

/**
 * Generated class for the HtmlkonuanlatimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-htmlkonuanlatim',
  templateUrl: 'htmlkonuanlatim.html',
})
export class HtmlkonuanlatimPage {
  public sayfa2 :any;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams) {
  this.sayfa2=navParams.get('data2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtmlkonuanlatimPage');
  }

}
