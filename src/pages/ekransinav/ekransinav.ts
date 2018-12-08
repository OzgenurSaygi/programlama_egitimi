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
          cevap1:"Toplam:4 i:5",
          cevap2:"Toplam:5 i:4",

        },
        {
          soru:'assets/imgs/soru1.jpg',
          cevap1:"En büyük başlık etiketidir.",
          cevap2:"Metni eğik yazar",

        },
        {
          soru:'assets/imgs/soru1.jpg',
          cevap1:"Metni kalın yazmak için kullanılır",
          cevap2:"Madde işareti koymak için kullanılır",

        }
       ]

      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 2"){
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 3"){
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 4"){
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 5"){
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 6"){
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
    else if(this.gelen2=="Ekran Çıktısı Sınav 7"){
      document.getElementById('soru1').innerHTML="Soru 1 dir"
    }
  }
  hesapla2(){
    
  }

}
