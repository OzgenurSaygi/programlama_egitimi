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
        problem1:"<b>, <i>, <p>, <br>, <em>, <strong>, &nbsp, <blockquote>, <sup>, <sub>, <cite> etiketlerinin kullanıldığı örnek HTML Kodları:",
        cevap1:'assets/imgs/ht1.jpg',
        problem2:"Metin biçimlendirme örneği",
        cevap2:'assets/imgs/ht2.jpg',
        problem3:"Metin biçimlendirme örneği",
        cevap3:'assets/imgs/ht3.jpg',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Temel Etiket Örnekleri',
        problem1:"Html temel etiket örnekleri 1",
        cevap1:'assets/imgs/ht4.jpg',
        problem2:"Html temel etiket örnekleri 2" ,
        cevap2:'assets/imgs/ht5.jpg',
        problem3:"Silivri ilçesindeki oteller ile ilgili bir web sayfasında şu meta etiketleri kullanılabilir.",
        cevap3:'assets/imgs/ht6.jpg',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Listeleme Örnekleri',
        problem1:"Listeleme örneği 1",
        cevap1:'assets/imgs/ht7.jpg',
        problem2:"Listeleme örneği 2",
        cevap2:'assets/imgs/ht8.jpg',
        problem3:"Listeleme örneği 3",
        cevap3:'assets/imgs/ht9.jpg',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Link Verme Örnekleri',
        problem1:"Sayfa İçi Bağlantı oluşturma örneği ",
        cevap1:'assets/imgs/ht10.jpg',
        problem2:"Sayfa dışı bağlantı oluşturma örneği",
        cevap2:'assets/imgs/ht11.jpg',
        problem3:"E-posta adresine link verme örneği:",
        cevap3:'assets/imgs/ht12.jpg',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Tablo Örnekleri',
        problem1:"Şimdi de 2 sütun ve 2 satırdan oluşan bir tablo oluşturma örneği.",
        cevap1:'assets/imgs/ht13.jpg',
        problem2:"3 satır ve 1 sütundan oluşan aşağıdaki tablo oluşturalım",
        cevap2:'assets/imgs/ht14.jpg',
        problem3:"3 satır ve 1 sütundan oluşan aşağıdaki tablo oluşturalım",
        cevap3:'assets/imgs/ht15.jpg',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Form Etiketleri Örnekleri',
        problem1:"Form örneği 1",
        cevap1:'assets/imgs/ht16.jpg',
        problem2:"Form örneği 2",
        cevap2:'assets/imgs/ht17.jpg',
        problem3:"Form örneği 3",
        cevap3:'assets/imgs/ht18.jpg',
        component:HtmlorneklerPage
      },
      {
        title2:'Html Resim Ses Video Ekleme Örnekleri',
        problem1:"Sayfamıza Ses Ekleme Uygulaması",
        cevap1:'assets/imgs/ht19.jpg',
        problem2:"Video Ekleme Uygulaması",
        cevap2:'assets/imgs/ht20.jpg',
        problem3:"Resim ekleme uygulaması",
        cevap3:'assets/imgs/ht21.jpg',
        component:HtmlorneklerPage
      },
      {
        title2:'CSS Örnekleri',
        problem1:"Genel Css Örneği ",
        cevap1:'assets/imgs/ht22.jpg',
        problem2:"Harici Css Örneği ",
        cevap2:'assets/imgs/ht23.jpg',
        problem3:"Yerel Css Örneği",
        cevap3:'assets/imgs/ht24.jpg',
        component:HtmlorneklerPage
      }
    ]
    this.jsornekler=[
      {
        title3:'Javascript Temel Örnekler',
        problem1:"Kod bölümüne gelerek sayı, string ve boolean türünde değiĢkenler tanımlayıp rastgele değerler veriniz. ",
        cevap1:'assets/imgs/js1.jpg',
        problem2:"Toplama operetörü ile yapılan işlemler.Ekrana merhaba40 yazdırır. ",
        cevap2:'assets/imgs/js2.jpg',
        problem3:"Küpün hacmini hesaplayan program",
        cevap3:'assets/imgs/js3.jpg',
        problem4:"Javascript dili ile hipotenüs degerini hesaplayan program",
        cevap4:'assets/imgs/js4.jpg',
        problem5:"1-100 arası sayılardan 3 ve 5 e aynı anda bölünebilen sayıların listelenmesini sağlayan program",
        cevap5:'assets/imgs/js5.jpg',
      },
      {
        title3:'Javascript For,While,İF-ELSE Örnekler',
        problem1:"Santigrat Derece (Celsius) – Fahrenhayt Çevirme",
        cevap1:'assets/imgs/js6.jpg',
        problem2:"Kullanıcı tarafından girilen sayı sıfırdan büyükse pozitif, sıfırdan küçükse negatif, sıfıra eşitse sıfır yazdıran program.",
        cevap2:'assets/imgs/js7.jpg',
        problem3:"Örneğimizde bugüne ait gün bilgisini çekerek gün isimini ekrana yazdıran program",
        cevap3:'assets/imgs/js8.jpg',
        problem4:"kullanıcının girmiş olduğu sayının faktoriyelini hesaplayan program",
        cevap4:'assets/imgs/js9.jpg',
        problem5:"While döngüsü kullanarak “sehir” isimli dizi içerisinde bulunan elemanları ekrana yazdıran program",
        cevap5:'assets/imgs/js10.jpg',
      },
      {
        title3:'Javascript Dizi Ve Matematik Fonksiyonları Örnekler',
        problem1:"Javascript ile dizi içindeki en büyük ve en küçük sayıyı bulma",
        cevap1:'assets/imgs/js11.jpg',
        problem2:"Dizide indexOf() kullanarak dizide eleman arama program",
        cevap2:'assets/imgs/js12.jpg',
        problem3:"Vize-Final Ortalaması ve Geçti-Kaldı Örneği",
        cevap3:'assets/imgs/js13.jpg',
        problem4:"Kullanıcının verdiği genişlik ve yükseklik değerine göre * karakteri kullanarak içi boş dikdörtgen çizen program",
        cevap4:'assets/imgs/js14.jpg',
        problem5:"Ondalıklı Sayıyı Yuvarlama örneği",
        cevap5:'assets/imgs/js15.jpg',
      },
      {
        title3:'Javascript Tarih Ve Saat İşlemleri Örnekler',
        problem1:"Örnekte tarih 25 mart 2001 olarak ayarlanmıştır.",
        cevap1:'assets/imgs/js16.jpg',
        problem2:"Şimdiki Tarih ve Saat Bilgisi Yazdırma",
        cevap2:'assets/imgs/js17.jpg',
        problem3:"JavaScript tarih karşılaştırma örnek program",
        cevap3:'assets/imgs/js18.jpg',
        problem4:"JavaScript setDate() fonksiyonu ile tarihe gün ekleme işlemini yapabiliriz.",
        cevap4:'assets/imgs/js19.jpg',
        problem5:"JavaScript Ay İsmini Ekrana Yazdırma",
        cevap5:'assets/imgs/js20.jpg',
      },
      {
        title3:'Javascript Fonksiyonlar Örnekler',
        problem1:"Kombinasyon Hesaplama programı",
        cevap1:'assets/imgs/js21.jpg',
        problem2:"JavaScript Kalan Karakter Sayısı Bulma",
        cevap2:'assets/imgs/js22.jpg',
        problem3:"JavaScript Karenin Alanı ve Çevresini Hesaplama",
        cevap3:'assets/imgs/js23.jpg',
        problem4:"JavaScript Çarpım Tablosu Oluşturma Örneği",
        cevap4:'assets/imgs/js24.jpg',
        problem5:"JavaScript Kürenin Hacmini Hesaplama",
        cevap5:'assets/imgs/js25.jpg',
      },
      {
        title3:'Javascript Olaylar(Events) Örnekler',
        problem1:"Örneğin bir metin kutusu içerisine yazı yazılmak üzere seçildiğinde uyarı veren program",
        cevap1:'assets/imgs/js26.jpg',
        problem2:"Yazı kutusuna girilen  sayı tek mi çift mi olduğunu yazdıran kodu hazırlayalım. ",
        cevap2:'assets/imgs/js27.jpg',
        problem3:"addEventListener ile nesneye olay atayarak kullanma örneği",
        cevap3:'assets/imgs/js28.jpg',
        problem4:"Javascript ile sayfanın arkaplan rengini rastgele değiştirme",
        cevap4:'assets/imgs/js29.jpg',
        problem5:"JavaScript: Km-Mil Çevirme Örneği",
        cevap5:'assets/imgs/js30.jpg',
      },
      {
        title3:'Javascipt Document Nesnesi Örnekler',
        problem1:"getElementById KULLANIMI Örneği",
        cevap1:'assets/imgs/js31.jpg',
        problem2:"getElemenByName KULLANIMI Örneği",
        cevap2:'assets/imgs/js32.jpg',
        problem3:"getElementsByTagName KULLANIMI Örneği",
        cevap3:'assets/imgs/js33.jpg',
        problem4:"createElement() KULLANIMI Örneği",
        cevap4:'assets/imgs/js34.jpg',
        problem5:"createTextNode() KULLANIMI",
        cevap5:'assets/imgs/js35.jpg',
      },
      {
        title3:'Javascipt Windows Nesnesi Örnekler',
        problem1:"WEB tarayıcının alt kısmındaki durum çubuğunda mesaj gösterilmesini sağlayan kod",
        cevap1:'assets/imgs/js36.jpg',
        problem2:"Ekranda 5 defa uyarı oluşturacak örnek script kodları:",
        cevap2:'assets/imgs/js38.jpg',
        problem3:"Onay düğmesi oluşturup eğer kullanıcı evet derse geriye true dönecek ve sayfadan çıkılacak. Eğer hayır derse geriye false dönecek ve sayfada kalacağız",
        cevap3:'assets/imgs/js37.jpg',
        problem4:"Prompt kullanım örneği",
        cevap4:'assets/imgs/js39.jpg',
        problem5:"Butona tıklayınca open methodu ile başka sayfaya yönlendiren program",
        cevap5:'assets/imgs/js40.jpg',

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
