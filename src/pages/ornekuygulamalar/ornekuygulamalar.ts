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
        title4:'C++ Temel Örnekler',
        problem1:"Yarıçapı girilen dairenin çevresini ve alanını hesaplayan program:",
        cevap1:'assets/imgs/cplus1.jpg',
        problem2:"2.Dereceden Denklemin Köklerini bulan program:",
        cevap2:'assets/imgs/cplus2.jpg',
        problem3:"Girilen 2 sayının obebini bulan program:",
        cevap3:'assets/imgs/cplus3.jpg',
        problem4:"Girilen bir sayının asal olup olmadığını bulan program",
        cevap4:'assets/imgs/cplus4.jpg',
        problem5:" C++ Sayının Faktöriyelini Bulan Program",
        cevap5:'assets/imgs/cplus5.jpg',
      },
      {
        title4:'C++ Postfix Prefix Örnekler',
        problem1:"(++) operatörü değişkenin Sağında yer aldığına göre, işlem içerisinde eski değeri olan 5 değeri kullanılacaktır. 5 ile 2 nin çarpımı sonucunda ekranda 10 sayısı yazacaktır.",
        cevap1:'assets/imgs/cplus6.jpg',
        problem2:"++ operatörü değişkenin solunda yer aldığı için, işlem içerisinde bir arttırılmış hali kullanılacaktır. Yani 6 ile 2 değerlerinin çarpımı 12 sonucunu oluşturacaktır.",
        cevap2:'assets/imgs/cplus7.jpg',
        problem3:"Aşağıdaki örneği inceleyiniz.",
        cevap3:'assets/imgs/cplus8.jpg',
        problem4:"Aşağıdaki örneği inceleyiniz.",
        cevap4:'assets/imgs/cplus9.jpg',
        problem5:"Aşağıdaki örneği inceleyiniz.",
        cevap5:'assets/imgs/cplus10.jpg',
      },
      {
        title4:'C++ Döngüler Ve Koşul İfadeleri Örnekler',
        problem1:"C++ Negatif sayı girilene kadar sayıları toplayan, ortalamasını alan ve adet gösteren örnek:",
        cevap1:'assets/imgs/cplus11.jpg',
        problem2:"Girilen 3 notun ortlamasını while döngüsü ile bulan program.",
        cevap2:'assets/imgs/cplus12.jpg',
        problem3:"A sayısının toplamı 20 olana kadar çalışan program.",
        cevap3:'assets/imgs/cplus13.jpg',
        problem4:"1-100 arasındaki sayılardan 3’e yada 5’e bölünen sayıların toplamını yazdıran  Program",
        cevap4:'assets/imgs/cplus14.jpg',
        problem5:"Aşağıdaki örnekte i değeri çift olduğunda döngü bir sonraki adıma atlıyor.",
        cevap5:'assets/imgs/cplus15.jpg',
      },
      {
        title4:'C++ Fonksiyon Örnekler',
        problem1:"C++ fonksiyon ile faktoriyel hesaplama:",
        cevap1:'assets/imgs/cplus16.jpg',
        problem2:"Sayının mükemmel sayı olup olmadığını bulan program.",
        cevap2:'assets/imgs/cplus17.jpg',
        problem3:"Sayının palindromik olup olmadığını bulan program.(Palindromik  : tersten yazılışı aynı olan)",
        cevap3:'assets/imgs/cplus18.jpg',
        problem4:"Kendisine gönderilmiş iki sayıyı toplayan ve geri değer olarak döndüren fonksiyonu yazınız",
        cevap4:'assets/imgs/cplus19.jpg',
        problem5:"Geriye değer döndüren ve döndürmeyen fonksiyonlar",
        cevap5:'assets/imgs/cplus20.jpg',
      },
      {
        title4:'C++ Diziler Ve Pointerlar Örnekler',
        problem1:"Örneğimizde kullanıcı bir N değeri giriyor ve girdiği değerlere göre bir dizin oluşturuluyor.        ",
        cevap1:'assets/imgs/cplus21.jpg',
        problem2:"C++ ile matris yapmak",
        cevap2:'assets/imgs/cplus22.jpg',
        problem3:"Bu örnekte ise kullanıcıdan 10 tane öğrencinin numarasını, vize ve final notlarını girmesini istiyoruz. Daha sonra ise bize verdiği bilgilere göre öğrencilerin ortalamasını veriyoruz.",
        cevap3:'assets/imgs/cplus23.jpg',
        problem4:"Bu örnekte ise dizin elemanlarımızı ekrana yazdırıyoruz.",
        cevap4:'assets/imgs/cplus24.jpg',
        problem5:"Dizin elemanlarımızı önce normal olarak yazdırıyor ve arkasından da tersten şekilde tekrar yazdırıyoruz",
        cevap5:'assets/imgs/cplus25.jpg',
      },
      {
        title4:'C++ Struct Örnekler',
        problem1:"5 öğrencilik bir yapı oluşturalım, öğrencilerin not ortalamalarını hesaplayan fonksiyon yaratalım. ",
        cevap1:'assets/imgs/cplus26.jpg',
        problem2:"Koordinat yapılarını tutan bir struct oluşturuyoruz.",
        cevap2:'assets/imgs/cplus27.jpg',
        problem3:"Klasörler ve klasörlerin bilgilerini tutan 2 farklı struct oluşturalım.",
        cevap3:'assets/imgs/cplus28.jpg',
        problem4:"Kullanıcıdan sevdiği film ve yayın tarihini isteyen struct yapısını oluşturalım.",
        cevap4:'assets/imgs/cplus29.jpg',
        problem5:"Private erişim belirtecinin kullanıldığı değişken yalnızca içerisinde bulunduğu fonksiyonda erişilebilir olur.Bu sebeple hata alırız aşağıdaki kodda.",
        cevap5:'assets/imgs/cplus30.jpg',
      },
      {
        title4:'C++ Class Örnekler',
        problem1:"Hacim hesaplayan ve yazdıran class yapısını oluşturunuz.",
        cevap1:'assets/imgs/cplus31.jpg',
        problem2:"İkinci dereceden denklem bulma örneğini sınıf ve nesne kullanımı ile oluşturalım.",
        cevap2:'assets/imgs/cplus32.jpg',
        problem3:"C++ class ile dairenin alanını hesaplama",
        cevap3:'assets/imgs/cplus33.jpg',
        problem4:"C++ class ile silindirin hacmimi hesaplama",
        cevap4:'assets/imgs/cplus34.jpg',
        problem5:"C++ Char özelliği ile ilgili bir örnek;",
        cevap5:'assets/imgs/cplus35.jpg',
      },
      {
        title4:'C++ Yapıcı Ve Yıkıcı Fonksiyon Örnekleri',
        problem1:"Bir classta parametresiz ile bir veya birden fazla parametreli birden fazla yapıcı fonksiyon bulunabilir",
        cevap1:'assets/imgs/cplus36.jpg',
        problem2:"Bir tane yapıcı ve yıkıcı fonksiyonu kullansaydık;",
        cevap2:'assets/imgs/cplus37.jpg',
        problem3:"Pay ve paydayı yapıcı ve yıkıcı fonksiyon ile bulan program",
        cevap3:'assets/imgs/cplus38.jpg',
        problem4:"C++ dikdörtgenin alanını hesaplama",
        cevap4:'assets/imgs/cplus39.jpg',
        problem5:"C++ dairenin alanını hesaplama",
        cevap5:'assets/imgs/cplus40.jpg',
      },
      {
        title4:'C++ Kalıtım Örnekleri',
        problem1:"C++ kalıtım örneği",
        cevap1:'assets/imgs/cplus41.jpg',
        problem2:"C++ çokgen alanını hesaplayan program",
        cevap2:'assets/imgs/cplus42.jpg',
        problem3:"C++ kalıtım örneği",
        cevap3:'assets/imgs/cplus43.jpg',
        problem4:"C++ kalıtım örneği",
        cevap4:'assets/imgs/cplus44.jpg',
        problem5:"C++ kalıtım örneği",
        cevap5:'assets/imgs/cplus45.jpg',
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
