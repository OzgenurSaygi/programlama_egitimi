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
  public example2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gelen2=this.navParams.get('sinav2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EkransinavPage');
    if(this.gelen2=="Ekran Çıktısı Sınav 1"){
       this.example2=[
        {
          soru:'assets/imgs/soru1.jpg',
          cevap1:"1-2-2-3-4-5-6-7-8-9-10",
          cevap2:"1-2-3-4-5-6-7-8-9-10-11",

        },
        {
          soru:'assets/imgs/soru2.jpg',
          cevap1:"bolme islemi=4 Mod isleminin sonuc:1",
          cevap2:"bolme islemi=4,3 Mod isleminin sonuc:3",

        },
        {
          soru:'assets/imgs/soru3.jpg',
          cevap1:"Karenin alanı:24",
          cevap2:"Dikdörtgenin alanı:1",

        },
        {
          soru:'assets/imgs/soru4.jpg',
          cevap1:"(integer) tuttugu yer:4 uzun(integer) tuttugu yer:8",
          cevap2:"(integer) tuttugu yer:4 uzun(integer) tuttugu yer:4",

        },
        {
          soru:'assets/imgs/soru5.jpg',
          cevap1:"aldigi not=45 ogrenci basarisiz",
          cevap2:"aldigi not=45 ogrenci basarisiz ogrenci basarili",

        },

       ]

      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 2"){
      this.example2=[
        {
          soru:'assets/imgs/soru21.jpg',
          cevap1:"Cevresi:12.56 Alani:12.56" ,
          cevap2:"Cevresi:12 Alani:12",

        },
        {
          soru:'assets/imgs/soru22.jpg',
          cevap1:"Asaldır.",
          cevap2:"Asal Değildir.",

        },
        {
          soru:'assets/imgs/soru23.jpg',
          cevap1:"Girilen sayı çift.",
          cevap2:"Girilen sayı tekdir.",

        },
        {
          soru:'assets/imgs/soru24.jpg',
          cevap1:"Geçerli sayı",
          cevap2:"Geçersiz sayı",

        },
        {
          soru:'assets/imgs/soru25.jpg',
          cevap1:"a!=toplam",
          cevap2:"5!=120",

        },

       ]
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 3"){
      this.example2=[
        {
          soru:'assets/imgs/soru35.jpg',
          cevap1:"20" ,
          cevap2:"25",

        },
        {
          soru:'assets/imgs/soru34.jpg',
          cevap1:"41",
          cevap2:"40",

        },
        {
          soru:'assets/imgs/soru33.jpg',
          cevap1:"3.603.600",
          cevap2:"240.240",

        },
        {
          soru:'assets/imgs/soru32.jpg',
          cevap1:" 100 ile 200 sayılarının arasında 23 ün katı",
          cevap2:"100 den büyük 23 katı olmayan sayıları verir.",

        },
        {
          soru:'assets/imgs/soru31.jpg',
          cevap1:"x y ve z sayılarının en küçüğünü ekrana yazar",
          cevap2:"x y ve z sayılarının en büyüğünü ekrana yazar",

        },

       ]
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 4"){
      this.example2=[
        {
          soru:'assets/imgs/soru41.jpg',
          cevap1:"1" ,
          cevap2:"0",

        },
        {
          soru:'assets/imgs/soru42.jpg',
          cevap1:"şartlar doğru",
          cevap2:"şartlar yanlış",

        },
        {
          soru:'assets/imgs/soru43.png',
          cevap1:"25 1015",
          cevap2:"2525",

        },
        {
          soru:'assets/imgs/soru44.jpg',
          cevap1:"1",
          cevap2:"0",

        },
        {
          soru:'assets/imgs/soru45.jpg',
          cevap1:"0",
          cevap2:"1",

        },
      ]
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 5"){
      this.example2=[
        {
          soru:'assets/imgs/soru51.jpg',
          cevap1:"A.Elma B.Armut C.Kavun" ,
          cevap2:"C.Elma D.Armut E.Kavun",

        },
        {
          soru:'assets/imgs/soru52.jpg',
          cevap1:"This is a paragraph This is a paragraph.",
          cevap2:"This is a paragraph <p> This is a paragraph.",

        },
        {
          soru:'assets/imgs/soru53.jpg',
          cevap1:"Meyvler 1.Armut 2.Elma 3.Portakal 4.Muz",
          cevap2:"Meyvler A.Armut B.Elma C.Portakal D.Muz",

        },
        {
          soru:'assets/imgs/soru54.jpg',
          cevap1:"Çerçevenin kenarını 5 pixsel yuvarlar ve kesikli çizgi olur.",
          cevap2:"Çerçevenin kenarını 5 pixsel yuvarlar ve düz çizgi olur.",

        },
        {
          soru:'assets/imgs/soru55.jpg',
          cevap1:"Formdan girilecek olan bilgilerin değerlendirileceği dosyanın URL adresi yazılır.",
          cevap2:"Formdan girilecek olan bilgilerin değerlendirileceği method yazılır.",

        },
      ]
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 6"){
      this.example2=[
        {
          soru:'assets/imgs/soru61.jpg',
          cevap1:"x=3 ,x=2,x=1" ,
          cevap2:"x=0, x=2, x=1",

        },
        {
          soru:'assets/imgs/soru62.jpg',
          cevap1:"AAA",
          cevap2:"AAAA",

        },
        {
          soru:'assets/imgs/soru63.jpg',
          cevap1:"error",
          cevap2:"byegoodbye",

        },
        {
          soru:'assets/imgs/soru64.jpg',
          cevap1:"nothing will be print",
          cevap2:"exam is printed",

        },
        {
          soru:'assets/imgs/soru65.jpg',
          cevap1:"Bu fonksiyon, bir tamsayının faktöriyelini hesaplar.",
          cevap2:" Geri dönüşü olmayan bir fonksiyondur",

        },
      ]
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 7"){
      this.example2=[
        {
          soru:'assets/imgs/soru71.jpg',
          cevap1:"Linklerin ilk halidir.Linklerin <br/> ziyaret edildikten sonraki halidir." ,
          cevap2:"Mouse linkin üzerine geldiğindeki halidir.Mouse ile linke tıklandığı andaki halidir.",

        },
        {
          soru:'assets/imgs/soru72.jpg',
          cevap1:"#kutu1 {z-index:2;}#kutu2{z-index:1;}#kutu3{z-index:3;}",
          cevap2:"#kutu1 {z-index:1;}#kutu2{z-index:2;}#kutu3{z-index:3;}",

        },
        {
          soru:'assets/imgs/soru73.jpg',
          cevap1:"Gölge rengi belirtilebilir.",
          cevap2:"Blur efekti kullanılarak gölgenin dağılma miktarı belirtilir.",

        },
        {
          soru:'assets/imgs/soru74.jpg',
          cevap1:"overflow-y:scroll->>yazıyı kırpar ve dikey kaydırma çubuğu ekler",
          cevap2:"overflow-y:scroll->>yazıyı kırpar ve",

        },
        {
          soru:'assets/imgs/soru75.jpg',
          cevap1:"Class ın etki ettiği kutucuklar yan yana sıralanır",
          cevap2:"Class ın etki ettiği kutucuklar alt alta sıralanır",

        },
      ]
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
  }
  hesapla2(){
    
  }

}
