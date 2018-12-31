import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsergirisPage } from '../usergiris/usergiris';

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
  public adi3:string;
  public soyad3:string;
  public puan:number=0;
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
          cvp:"s1"

        },
        {
          soru:'assets/imgs/soru2.jpg',
          cevap1:"bolme islemi=4 Mod isleminin sonuc:1",
          cevap2:"bolme islemi=4,3 Mod isleminin sonuc:3",
          cvp:"s2"

        },
        {
          soru:'assets/imgs/soru3.jpg',
          cevap1:"Karenin alanı:24",
          cevap2:"Dikdörtgenin alanı:1",
          cvp:"s3"

        },
        {
          soru:'assets/imgs/soru4.jpg',
          cevap1:"(integer) tuttugu yer:4 uzun(integer) tuttugu yer:8",
          cevap2:"(integer) tuttugu yer:4 uzun(integer) tuttugu yer:4",
          cvp:"s4"

        },
        {
          soru:'assets/imgs/soru5.jpg',
          cevap1:"aldigi not=45 ogrenci basarisiz",
          cevap2:"aldigi not=45 ogrenci basarisiz ogrenci basarili",
          cvp:"s5"

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
          cvp:"s1"

        },
        {
          soru:'assets/imgs/soru22.jpg',
          cevap1:"Asaldır.",
          cevap2:"Asal Değildir.",
          cvp:"s2"

        },
        {
          soru:'assets/imgs/soru23.jpg',
          cevap1:"Girilen sayı tekdir.",
          cevap2:"Girilen sayı çift.",
          cvp:"s3"

        },
        {
          soru:'assets/imgs/soru24.jpg',
          cevap1:"Geçersiz sayı",
          cevap2:"Geçerli sayı",
          cvp:"s4"

        },
        {
          soru:'assets/imgs/soru25.jpg',
          cevap1:"5!=120",
          cevap2:"a!=toplam",
          cvp:"s5"

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
           cvp:"s1"
        },
        {
          soru:'assets/imgs/soru34.jpg',
          cevap1:"41",
          cevap2:"40",
          cvp:"s2"
        },
        {
          soru:'assets/imgs/soru33.jpg',
          cevap1:"240.240",
          cevap2:"3.603.600",
          cvp:"s3"

        },
        {
          soru:'assets/imgs/soru32.jpg',
          cevap1:" 100 ile 200 sayılarının arasında 23 ün katı",
          cevap2:"100 den büyük 23 katı olmayan sayıları verir.",
          cvp:"s4"
        },
        {
          soru:'assets/imgs/soru31.jpg',
          cevap1:"x y ve z sayılarının en küçüğünü ekrana yazar",
          cevap2:"x y ve z sayılarının en büyüğünü ekrana yazar",
          cvp:"s5"

        },

       ]
      
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 4"){
      this.example2=[
        {
          soru:'assets/imgs/soru41.jpg',
          cevap1:"1010" ,
          cevap2:"0101",
          cvp:"s1"

        },
        {
          soru:'assets/imgs/soru42.jpg',
          cevap1:"şartlar doğru",
          cevap2:"şartlar yanlış",
          cvp:"s2"

        },
        {
          soru:'assets/imgs/soru43.png',
          cevap1:"2525",
          cevap2:"251015",
          cvp:"s3"

        },
        {
          soru:'assets/imgs/soru44.jpg',
          cevap1:"1",
          cevap2:"0",
          cvp:"s4"
        },
        {
          soru:'assets/imgs/soru45.jpg',
          cevap1:"1",
          cevap2:"0",
          cvp:"s5"
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
          cvp:"s1"
        },
        {
          soru:'assets/imgs/soru52.jpg',
          cevap1:"This is a paragraph <p> This is a paragraph.",
          cevap2:"This is a paragraph This is a paragraph.",
          cvp:"s2"
        },
        {
          soru:'assets/imgs/soru53.jpg',
          cevap1:"Meyveler A.Armut B.Elma C.Portakal D.Muz",
          cevap2:"Meyveler 1.Armut 2.Elma 3.Portakal 4.Muz",
           cvp:"s3"
        },
        {
          soru:'assets/imgs/soru54.jpg',
          cevap1:"Çerçevenin kenarını 5 pixsel yuvarlar ve kesikli çizgi olur.",
          cevap2:"Çerçevenin kenarını 5 pixsel yuvarlar ve düz çizgi olur.",
          cvp:"s4"
        },
        {
          soru:'assets/imgs/soru55.jpg',
          cevap1:"Formdan girilecek olan bilgilerin değerlendirileceği method yazılır.",
          cevap2:"Formdan girilecek olan bilgilerin değerlendirileceği dosyanın URL adresi yazılır.",
          cvp:"s5"
        },
      ]
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 6"){
      this.example2=[
        {
          soru:'assets/imgs/soru61.jpg',
          cevap1:"x=3 ,x=2,x=1" ,
          cevap2:"x=0, x=2, x=1",
          cvp:"s1"

        },
        {
          soru:'assets/imgs/soru62.jpg',
          cevap1:"AAA",
          cevap2:"AAAA",
          cvp:"s2"
        },
        {
          soru:'assets/imgs/soru63.jpg',
          cevap1:"byegoodbye",
          cevap2:"error",
          cvp:"s3"
        },
        {
          soru:'assets/imgs/soru64.jpg',
          cevap1:"nothing will be print",
          cevap2:"exam is printed",
          cvp:"s4"

        },
        {
          soru:'assets/imgs/soru65.jpg',
          cevap1:"Bu fonksiyon, bir tamsayının faktöriyelini hesaplar.",
          cevap2:" Geri dönüşü olmayan bir fonksiyondur",
          cvp:"s5"
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
          cvp:"s1"

        },
        {
          soru:'assets/imgs/soru72.jpg',
          cevap1:"#kutu1 {z-index:1;}#kutu2{z-index:2;}#kutu3{z-index:3;}",
          cevap2:"#kutu1 {z-index:2;}#kutu2{z-index:1;}#kutu3{z-index:3;}",
          cvp:"s2"

        },
        {
          soru:'assets/imgs/soru73.jpg',
          cevap1:"Metnin altını çizer ve renk verir.",
          cevap2:"Gölge rengi belirtilebilir.",
          cvp:"s3"
        },
        {
          soru:'assets/imgs/soru74.jpg',
          cevap1:"overflow-y:scroll->>yazıyı kırpar ve dikey kaydırma çubuğu ekler",
          cevap2:"overflow-y:scroll->>yazıyı kırpar ve dikey kaydırma çubuğu eklemez",
          cvp:"s4"
        },
        {
          soru:'assets/imgs/soru75.jpg',
          cevap1:"Class ın etki ettiği kutucuklar yan yana sıralanır",
          cevap2:"Class ın etki ettiği kutucuklar alt alta sıralanır",
          cvp:"s5"
        },
      ]
    }
  }
  hesapla2(degeri,degeri2){
    var yanlis;
    if(degeri2=="s1"){
      if(degeri=="A"){
       (this.puan)=(this.puan)+20;
      }
      else{
        yanlis++;
      }
     }
     else if(degeri2=="s2"){
       if(degeri=="A"){
         (this.puan)=(this.puan)+20;
       }
       else{
         yanlis++;
       }
      }
      else if(degeri2=="s3"){
       if(degeri=="B"){
         (this.puan)=(this.puan)+20;
       }
       else{
         yanlis++;
       }
      }
      else if(degeri2=="s4"){
       if(degeri=="A"){
         (this.puan)=(this.puan)+20;
       }
       else{
         yanlis++;
       }
      }
      else if(degeri2=="s5"){
       if(degeri=="A"){
         (this.puan)=(this.puan)+20;
       }
       else{
         yanlis++;
       }
      }
      if(degeri=="sonucyaz"){
        document.getElementById("son").innerHTML=this.adi3+" "+this.soyad3+" Puanı:"+this.puan;
       }
        if(degeri=="bitis"){
         document.getElementById('soru1').innerHTML="Ekran çıktısı sınavı başarı ile tamamlandı.";
        }
  }
  kaydet(){
    this.navCtrl.push(UsergirisPage,{
     puangonder:this.puan,
     soyadgonder:this.soyad3
      
    })
  }

}
