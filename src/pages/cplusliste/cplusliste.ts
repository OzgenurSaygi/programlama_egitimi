import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{CpluskonuPage} from'../cpluskonu/cpluskonu';
/**
 * Generated class for the CpluslistePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cplusliste',
  templateUrl: 'cplusliste.html',
})
export class CpluslistePage {
  public items2:any;
  public cpluskonu:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items2=[
    {
        cpluskonu:"C++ Nedir ?",
        cplusicerik:"C’yi kapsayan ve çok paradigmalı, yaygın olarak kullanılan, genel amaçlı bir programlama dilidir. C++ geliştirilmesinden sonra tüm dünyada en yaygın kullanılan programlama dillerinden biri olmuştur. Özellikle söz konusu performans olduğunda C++ daima ilk seçim olmaktadır zira diğer programlama dilleriyle kıyaslandığında C++ çok daha fazla güncellenen bir yazılım dilidir. C++ yazılım dili kullanılarak geliştiriciler tarafından sistem yazılımları, özel yazılımlar, uygulamalar, sürücü yazılımları, kullanıcı taraflı yazılımlar ve gömülü firmware yazılımlar üretilmektedir.  Bugün bilgisayarınızda kullanmakta olduğunuz birçok donanımın dahi sürücüsü C++ programlama dili sayesinde hazırlanmış ve son kullanıcıların kullanımına tahsis edilmiştir.C++’da ilk mini yazılımınızı yapmak ve ekrana “Hello World” çıktısını almak içinse aşağıdaki kod betiğini kullanabilirsiniz;#include <iostream>int main(){ std::cout <<'Hello, world!n';}",
        component:CpluskonuPage
     },
    {
      cpluskonu:"C++ Veri Tipleri",
      cplusicerik:"",
      component:CpluskonuPage
    },
    {
      cpluskonu:"Arttırma Ve azaltma işlemleri",
      cplusicerik:"",
      component:CpluskonuPage
     },
     {
      cpluskonu:"Döngüler Ve Koşul İfadeleri",
      cplusicerik:"",
      component:CpluskonuPage
     },
     {
      cpluskonu:"Fonksiyonlar",
      cplusicerik:"",
      component:CpluskonuPage
     },
     {
      cpluskonu:"Diziler Ve Pointerlar",
      cplusicerik:"",
      component:CpluskonuPage
     },
     {
      cpluskonu:"Strcut Yapısı",
      cplusicerik:"",
      component:CpluskonuPage
     },
     {
      cpluskonu:"Class Yapısı",
      cplusicerik:"",
      component:CpluskonuPage
     },
     {
      cpluskonu:"Yapıcı Ve Yıkıcı Fonksiyonlar",
      cplusicerik:"",
      component:CpluskonuPage
     },
     {
      cpluskonu:"Fonksiyonlara aşırı yükleme",
      cplusicerik:"",
      component:CpluskonuPage
     },
     {
      cpluskonu:"Kalıtım Giriş",
      cplusicerik:"",
      component:CpluskonuPage
     }
    ]
  }
cpluskonusayfa(sayfa4){
    this.navCtrl.push(CpluskonuPage,{
      data4:sayfa4 })
}
}
