import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { TestsinavPage } from '../testsinav/testsinav';
import { EkransinavPage } from '../ekransinav/ekransinav';
import { BosluksinavPage } from '../bosluksinav/bosluksinav';

/**
 * Generated class for the SinavlarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sinavlar',
  templateUrl: 'sinavlar.html',
})
export class SinavlarPage {
   public sayfa7:any;
   public testsorullar:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl:ActionSheetController) {
    this.sayfa7=this.navParams.get('data');

  }
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Testler',
      buttons: [
        {
          text: 'Test 1',
          role: 'test1',
          handler: () => {
            this.navCtrl.push(TestsinavPage,{
               sinav:'Test 1'
            });
          }
        },
        {
          text: 'Test2',
          handler: () => {
            this.navCtrl.push(TestsinavPage,{
              sinav:'Test 2'
            });
          }
        },
        {
          text: 'Test 3',
          handler: () => {
            this.navCtrl.push(TestsinavPage,{
              sinav:'Test 3'
            });
          }
        },
        {
          text: 'Test 4',
          handler: () => {
            this.navCtrl.push(TestsinavPage,{
              sinav:'Test 4'
            });
          }
        },
        {
          text: 'Test 5',
          handler: () => {
            this.navCtrl.push(TestsinavPage,{
              sinav:'Test 5'
            });
          }
        },
        {
          text: 'Test 6',
          handler: () => {
            this.navCtrl.push(TestsinavPage,{
              sinav:'Test 6'
            });
          }
        },  
        {
          text: 'Test 7',
          role: 'test7',
          handler: () => {
            this.navCtrl.push(TestsinavPage,{
              sinav:'Test 7'
            });
          }
        }
      ]
    });
    actionSheet.present();
  }


  presentActionSheet2() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Ekran Çıktısı Soruları',
      buttons: [
        {
          text: 'Ekran Çıktısı Sınavı 1',
          role: 'ekran çıktısı sınavı 1',
          handler: () => {
            this.navCtrl.push(EkransinavPage,{
              sinav2:'Ekran Çıktısı Sınav 1'
            });
          }
        },
        {
          text: 'Ekran Çıktısı Sınavı 2',
          handler: () => {
            this.navCtrl.push(EkransinavPage,{
              sinav2:'Ekran Çıktısı Sınav 2'
            });
          }
        },
        {
          text: 'Ekran Çıktısı Sınavı 3',
          handler: () => {
            this.navCtrl.push(EkransinavPage,{
              sinav2:'Ekran Çıktısı Sınav 3'
            });
          }
        },
        {
          text: 'Ekran Çıktısı Sınavı 4',
          handler: () => {
            this.navCtrl.push(EkransinavPage,{
              sinav2:'Ekran Çıktısı Sınav 4'
            });
          }
        },
        {
          text: 'Ekran Çıktısı Sınavı 5',
          handler: () => {
            this.navCtrl.push(EkransinavPage,{
              sinav2:'Ekran Çıktısı Sınav 5'
            });
          }
        },
        {
          text: 'Ekran Çıktısı Sınavı 6',
          handler: () => {
            this.navCtrl.push(EkransinavPage,{
              sinav2:'Ekran Çıktısı Sınav 6'
            });
          }
        },  
        {
          text: 'Ekran Çıktısı Sınavı 7',
          role: 'ekran çıktısı sınavı 7',
          handler: () => {
            this.navCtrl.push(EkransinavPage,{
              sinav2:'Ekran Çıktısı Sınav 7'
            });
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentActionSheet3() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Boşluk Doldurma Soruları',
      buttons: [
        {
          text: 'Boşluk Doldurma Sınavı 1',
          role: 'bosluk doldurma sınavı 1',
          handler: () => {
            this.navCtrl.push(BosluksinavPage,{
              sinav3:'Bosluk Doldurma Sınav 1'
            });
          }
        },
        {
          text: 'Boşluk Doldurma Sınavı 2',
          handler: () => {
            this.navCtrl.push(BosluksinavPage,{
              sinav3:'Bosluk Doldurma Sınav 2'
            });
          }
        },
        {
          text: 'Boşluk Doldurma Sınavı 3',
          handler: () => {
            this.navCtrl.push(BosluksinavPage,{
              sinav3:'Bosluk Doldurma Sınav 3'
            });
          }
        },
        {
          text: 'Boşluk Doldurma Sınavı 4',
          handler: () => {
            this.navCtrl.push(BosluksinavPage,{
              sinav3:'Bosluk Doldurma Sınav 4'
            });
          }
        },
        {
          text: 'Boşluk Doldurma Sınavı 5',
          handler: () => {
            this.navCtrl.push(BosluksinavPage,{
              sinav3:'Bosluk Doldurma Sınav 5'
            });
          }
        },
        {
          text: 'Boşluk Doldurma Sınavı 6',
          handler: () => {
            this.navCtrl.push(BosluksinavPage,{
              sinav3:'Bosluk Doldurma Sınav 6'
            });
          }
        },  
        {
          text: 'Boşluk Doldurma Sınavı 7',
          role: 'bosluk doldurma sınavı 7',
          handler: () => {
            this.navCtrl.push(BosluksinavPage,{
              sinav3:'Bosluk Doldurma Sınav 7'
            });
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinavlarPage');
  }

}
