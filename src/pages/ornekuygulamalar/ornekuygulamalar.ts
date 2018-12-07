import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HtmlorneklerPage } from '../htmlornekler/htmlornekler';
import { JsorneklerPage } from '../jsornekler/jsornekler';
import { CplusornekPage } from '../cplusornek/cplusornek';

/**
 * Generated class for the OrnekuygulamalarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ornekuygulamalar',
  templateUrl: 'ornekuygulamalar.html',
})
export class OrnekuygulamalarPage {
  public sayfamenu:any;
  public htmlornekler:any;
  public jsornekler:any;
  public cplusornekler:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sayfamenu=navParams.get('data');
    this.htmlornekler=[
      {
        title2:'Html Metin Biçimlendirme Örnekleri',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Temel Etiket Örnekleri',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Listeleme Örnekleri',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Link Verme Örnekleri',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Tablo Örnekleri',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Form Etiketleri Örnekleri',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Resim Ses Video Ekleme Örnekleri',
        component:HtmlorneklerPage
      },
      {
        title2:'CSS Örnekleri',
        component:HtmlorneklerPage
      }
    ]
    this.jsornekler=[
      {
        title3:'Javascript Temel Örnekler'
      },
      {
        title3:'Javascript For,While,İF-ELSE Örnekler'
      },
      {
        title3:'Javascript Dizi Ve Matematik Fonksiyonları Örnekler'
      },
      {
        title3:'Javascript Tarih Ve Saat İşlemleri Örnekler'
      },
      {
        title3:'Javascript Fonksiyonlar Örnekler'
      },
      {
        title3:'Javascript Olaylar(Events) Örnekler'
      },
      {
        title3:'Javascipt Document Nesnesi Örnekler'
      },
      {
        title3:'Javascipt Windows Nesnesi Örnekler'
      }
    ]
    this.cplusornekler=[
      {
        title4:'C++ Temel Örnekler'
      },
      {
        title4:'C++ Postfix Prefix Örnekler'
      },
      {
        title4:'C++ Döngüler Ve Koşul İfadeleri Örnekler'
      },
      {
        title4:'C++ Fonksiyon Örnekler'
      },
      {
        title4:'C++ Diziler Ve Pointerlar Örnekler'
      },
      {
        title4:'C++ Struct Örnekler'
      },
      {
        title4:'C++ Class Örnekler'
      },
      {
        title4:'C++ Fonksiyonlara Aşırı Yükleme Örnekler'
      },
      {
        title4:'C++ Kalıtım Örnekleri'
      }
    ]
  }
  htmlornek(htmlbaslik){
    this.navCtrl.push(HtmlorneklerPage,
      {data5:htmlbaslik});
  }
  jsornek(jsbaslik){
    this.navCtrl.push(JsorneklerPage,
      {data6:jsbaslik});
  }
  cornek(cbaslik){
    this.navCtrl.push(CplusornekPage,{
      data8:cbaslik });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrnekuygulamalarPage');
  }

}
