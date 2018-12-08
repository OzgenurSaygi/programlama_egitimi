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
   public example1:any;
   public cevap1:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gelen=this.navParams.get('sinav');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestsinavPage');
    if(this.gelen=="Test 1"){
      document.getElementById('soru1').innerHTML="Sınav 1 dir";
      this.example1=[
        {
          soru:"1.)<br> Etiketinin İşlevi Nedir ?",
          cevap1:"Bir paragraflık bosluk bırakır",
          cevap2:"İmleç bir alt satıra geçer",
          cevap3:"Metni kalın yazar",
          cevap4:"Metnin altını çizer"

        },
        {
          soru:"2.)<h1> Etiketinin İşlevi Nedir ?",
          cevap1:"En büyük başlık etiketidir.",
          cevap2:"Metni eğik yazar",
          cevap3:"En küçük baslik etiketidir.",
          cevap4:"Metine üst çizgi çizer"

        },
        {
          soru:" 3.)<u></u> Etiketinin İşlevi Nedir ?",
          cevap1:"Metni kalın yazmak için kullanılır",
          cevap2:"Madde işareti koymak için kullanılır",
          cevap3:"Metninin üstünü çizer",
          cevap4:"Metni eğik yazar"

        },
        {
          soru:"4.)HTML Nedir?",
          cevap1:"Sayfa içindeki metinlerin tarayıcıda nasıl görüneceğini ve işlevsel olacağını düzenleyen işaret dilidir.",
          cevap2:"Diğer sayfaları bağlayan linkler",
          cevap3:"Nesneyi bağlayan linkler",
          cevap4:"Programlama dili"

        },
        {
          soru:"5.)Html etiketleri hangi karakterler arasına yazılır?",
          cevap1:" < >  ",
          cevap2:"# #",
          cevap3:"{ } ",
          cevap4:"“ “"

        },
        {
          soru:"6.)HTML dokümanının başlık çubuğunda yer alacak sayfa başlık yazısı hangi HTML etiketleri arasına yazılır?",
          cevap1:"<body>",
          cevap2:"<html>",
          cevap3:"<head>",
          cevap4:"<title>"

        },
        {
          soru:"7.)Link (bağlantı) oluşturmak için kullanılan HTML etiketi aşağıdakilerden hangisidir?",
          cevap1:"<a>",
          cevap2:"<li>",
          cevap3:"<img>",
          cevap4:"<div>"

        },
        {
          soru:"8.)Link (bağlantı) oluşturmak için kullanılan HTML etiketi aşağıdakilerden hangisidir?",
          cevap1:"height",
          cevap2:"width ",
          cevap3:"left",
          cevap4:"top"

        },
        {
          soru:"9.)Bir tablonun kenarlık kalınlığını ayarlamak için \n kullanılan HTML parametresi aşağıdakilerden hangisidir?",
          cevap1:"border",
          cevap2:"width ",
          cevap3:"height",
          cevap4:"align"

        },
        {
          soru:"10.)HTML sayfasının arka zeminini mavi yapmak için hangi HTML satırı kullanılır?",
          cevap1:" <body color=”blue”>",
          cevap2:" <body bgcolor=”blue”> ",
          cevap3:"<body background=”blue”>",
          cevap4:"<body set=”blue”>"

        },
      ]

    }
    else if(this.gelen=="Test 2"){
      document.getElementById('soru1').innerHTML="Sınav 2 dir";
    }
    else if(this.gelen=="Test 3"){
      document.getElementById('soru1').innerHTML="Sınav 2 dir";
    }
    else if(this.gelen=="Test 4"){
      document.getElementById('soru1').innerHTML="Sınav 2 dir";
    }
    else if(this.gelen=="Test 5"){
      document.getElementById('soru1').innerHTML="Sınav 2 dir";
    }
    else if(this.gelen=="Test 6"){
      document.getElementById('soru1').innerHTML="Sınav 2 dir";
    }
    else if(this.gelen=="Test 7"){
      document.getElementById('soru1').innerHTML="Sınav 2 dir";
    }
  }
  hesapla(){
      document.getElementById('sec1').style.backgroundColor="red";
    
  }

}
