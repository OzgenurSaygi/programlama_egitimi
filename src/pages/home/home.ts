import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { JskonuanlatimPage } from '../jskonuanlatim/jskonuanlatim';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sayfa?: any;
  constructor(public navCtrl: NavController,
    private navParams:NavParams) {
    this.sayfa=navParams.get('data');
  }
  gosayfagit (gitceksayfa) {
    this.navCtrl.push(ListPage, {
      git:gitceksayfa
    })
 }

 gosayfagit2 (gitsayfa){
   this.navCtrl.push(JskonuanlatimPage, {
     gitsayfa:gitsayfa
   })
 }
}
