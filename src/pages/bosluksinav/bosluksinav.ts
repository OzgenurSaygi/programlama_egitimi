import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BosluksinavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bosluksinav',
  templateUrl: 'bosluksinav.html',
})
export class BosluksinavPage {
   public example3:any;
   public gelen3:string;
   public bosluk2:string;
   public bosluk1:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gelen3=this.navParams.get('sinav3');
  }

  ionViewDidLoad() {
    if(this.gelen3=="Bosluk Doldurma Sınav 1"){
    this.example3=[
      {
        soru1:"C++ kullanıcının veri girmesini sağlayan komut",
        soru2:"C++ da derleyiciye yazı yazdırmak için kullanılır" ,
        cevap:"std,cin,cout",
        idisi:"s1",
        idisi2:"s11"

      },
      {
        soru1:'C++ rastgele sayı üretmek için kullanlılan methotdur',
        soru2:"C++ bir alt satıra geçmek için kullaılır." ,
        cevap:"endl,tab,rand()",
        idisi:"s2",
        idisi2:"s12"
      },
      {
        soru1:"Komutu döngüden çıkmamızı sağlar",
        soru2:"C++ da verinin değeri değiştirilmesin diye kullanılır" ,
        cevap:"define,const,break",
        idisi:"s3",
        idisi2:"s13"
      },
      {
        soru1:"Döngüde iken bu komutdan sonra gelen cümleleri atlayarak, döngü başa döner",
        soru2:"Veri tiplerini kullanmadan kendi değişkenlerimizi oluşturmamızı sağlar" ,
        cevap:"contiune,break,define",
        idisi:"s4",
        idisi2:"s14"

      },
      {
        soru1:"C++ tam sayılar için kullanılan veri tipidir",
        soru2:"Karakteri temsil eder .Tek baytlık bir karakterdir." ,
        cevap:"char,int,string",
        idisi:"s5",
        idisi2:"s15"

      },]
   }
   else if(this.gelen3=="Bosluk Doldurma Sınav 2"){
    this.example3=[
      {
        soru1:'Tek satır yorum yazarken bu ifade kullanılır.',
        soru2:"Çok satırlı yorum yazarken bu ifade kullanılır." ,
        cevap:"//,/*..*/,*/..*/",

      },
      {
        soru1:"C++'ın ana fonksiyonudur.Tüm C++ programları bu bölümde çalıştırılır.",
        soru2:"Klavyeden bir tuşa basana kadar, programın ekranda kalmasını sağlar." ,
        cevap:"main(),system('pause'),system('stop')",

      },
      {
        soru1:'Bildirimi fonksiyon içinde yapılan değişkenlere denir.',
        soru2:"Bildirimi fonksiyon dışında yaplıan değişkenlere denir." ,
        cevap:"yerel değişken,global değişken,static değişken",

      },
      {
        soru1:"While döngüsü ile aynıdır.Program döngüyü ne olursa olsun bir kez çalıştırılır" ,
        soru2:"Topluca bir grup halinde bulunan, veriye denir" ,
        cevap:"do{}while(),for(),dizi",

      },
      {
        soru1:'C++ Programlama dilinde, kullandığımız veri türlerin isimlerini değiştirebiliriz.',
        soru2:"Daha önce tanımlanan sabit ve makroları sona erdirmek için kullanılır." ,
        cevap:"typdef,undef,ifndef",

      },

     ]
   }
   
  else if(this.gelen3=="Bosluk Doldurma Sınav 3"){
    this.example3=[
      {
        soru1:'Şartın doğru olup olmadığını denetler,şart doğruysa parantezler arasındaki kodları çalıştırır.  ',
        soru2:"İf kontrol deyiminin yaptığı işlemi tek satırda yapmamızı sağlar." ,
        cevap:"if-else,while,ternary operatör",

      },
      {
        soru1:'Birden fazla koşul için gerekli kontrolü yapar fakat şartın boolean bir ifade döndürmesine bakmaz',
        soru2:"JS de Kullanıcının klavyeden veri girişi yapmasını sağlar" ,
        cevap:"switch,prompt,cin",

      },
      {
        soru1:'JS de dizilerin eleman sayısını bulmak için bu komutu kullanırız.',
        soru2:"JS de dizinin sonuna yeni bir dizi elemanı eklemek için kullanılır. " ,
        cevap:"length(),sizeof(),push()",

      },
      {
        soru1:'JS de dizinin sonundaki elemanı kaldırmak için kullanılır.',
        soru2:"Dizinin başına eleman ekler." ,
        cevap:"pop(),Unshift( ),Shift( ) ",

      },
      {
        soru1:'JS de Dizide istediğimiz elemanı silmek için kullanılır.',
        soru2:"JS de Dizide istenilen bölüme eleman eklememizi ya da eleman silmemizi sağlar." ,
        cevap:"splice(),delete(),indexof()",

      },

     ]
   }
  else if(this.gelen3=="Bosluk Doldurma Sınav 4"){
    this.example3=[
      {
        soru1:'JS de Dizi içerinde geçen kelimeyi aramamızı sağlar.',
        soru2:"JS de Dizi elemanlarını ters çevirmemizi sağlar" ,
        cevap:"indexof(),reverse(),sort()",

      },
      {
        soru1:'String ifadenin sayısal kısmını alarak tam sayıya çevirir',
        soru2:"String ifadeyi sayısal değer yapar " ,
        cevap:"parseInt( ) ,number(),parseFloat()",

      },
      {
        soru1:'Html etiketlerinin üstüne çift tıklandığında gerçekleĢen olaylara denir.',
        soru2:"Sayfamızdaki herhangi bir nesnenin tamamıyla yüklenme olayını temsil eder." ,
        cevap:"onDblClick(),onClick(),onUnload()",

      },
      {
        soru1:'Sayfa üzerinde html elemanı işlem yapılmak üzere seçildiğinde çalışan olay tipidir.',
        soru2:"Html nesnesinin üstüne gelme olayını gözleyen olaydır" ,
        cevap:"onFocus(),onMouseOver(),onMouseUp()",

      },
      {
        soru1:'Klavyeden tuşa basma olayıdır.',
        soru2:"Fare nesne üzerinde basıldığı anda gerçekleşen olaydır." ,
        cevap:"onMouseDown(),onSelect(),onKeyDown()",

      },

     ]
   }

   else if(this.gelen3=="Bosluk Doldurma Sınav 5"){
    this.example3=[
      {
        soru1:'Web sayfasının tarayıcıdaki isminin ne olacağını belirleyen etikettir.',
        soru2:"Web sayfanızda önceden ziyaret edilmiş linklerin hangi renk olacağını belirler" ,
        cevap:"alink,visited,title",

      },
      {
        soru1:'Sıralı liste oluşturmak için kullanılan bir HTML etiketidir',
        soru2:"Sayfanın ortasına yatay çizgi çizer. " ,
        cevap:"ul,ol,<hr>",

      },
      {
        soru1:'Sayfa içi bağlantı oluşturma işlemi,olarak da adlandırılır. ',
        soru2:"Açılacak olan sayfada, resim veya dosyanın açılacağı pencereyi belirtebiliriz. " ,
        cevap:"çapa işlemi,target,open",

      },
      {
        soru1:'Bir tabloda satır oluşturmak için kullanılan etikettir.',
        soru2:"Tablonun pixel cinsinden yüksekliğini belirlemek için kullanılır." ,
        cevap:"tr,td,height",

      },
      {
        soru1:'Aynı sütundaki hücreleri birleştirmek için kullanılır.',
        soru2:"Aynı satırdaki hücreleri birleştirmek için kullanılır." ,
        cevap:"rowspan,colspan,merge",

      },

     ]
   }

   else if(this.gelen3=="Bosluk Doldurma Sınav 6"){
    this.example3=[
      {
        soru1:'CSS yazının tümünün küçük harf olmasını sağlar. ',
        soru2:" Yazının istenilen şekilde kalmasını sağlar. " ,
        cevap:"lowercase,uppercase,capitalize",

      },
      {
        soru1:'Yazının altının çizili olmasını sağlar. ',
        soru2:"Yazının sola bitişik olmasını sağlar. " ,
        cevap:"text-decoration:underline,text-align:left,text-align:right",

      },
      {
        soru1:"Arkafondaki resmin tekrarlanması istendiğinde kullanılır. ",
        soru2:"Layer (katman) etiketlerinin html üzerindeki yerleştirme işlemi için kullanılır. " ,
        cevap:"repeat,return,positon",

      },
      {
        soru1:'Katmanın(Layer) sayfa üzerindeki sıra sayısını belirler ',
        soru2:" Kaydırma çubukları ekler." ,
        cevap:"z-index,hidden,scroll",

      },
      {
        soru1:'Bu pozisyon link tıklandığından sonra etiketin aldığı değerdir.',
        soru2:"Bu pozisyon Linkin üzerine gelindiği durumdur." ,
        cevap:"visited,hover,active",

      },

     ]
   }
   
   else if(this.gelen3=="Bosluk Doldurma Sınav 7"){
    this.example3=[
      {
        soru1:'Etiketi html formları oluşturmak için kullanılır. ',
        soru2:"Etiketi forma onay kutuları eklemek için kullanılır" ,
        cevap:"form,radio button,checbox button",

      },
      {
        soru1:'Etiketi forma tek satırlık yazı yazılabilecek alan eklemek için kullanılır. ',
        soru2:"Form içerisinde yer alan içeriklerin sunucuya gönderilmesini sağlamak için kullanılır. " ,
        cevap:"text,input,action",

      },
      {
        soru1:'Eklenilecek olan resme bir çerçeve çizilip kalınlığını belirlemek için kullanılır.',
        soru2:"Fare ile resmin üzerine gelindiğinde yazılmasını istediğiniz metni belirlemek için kullanılır." ,
        cevap:"border,alt,infinite",

      },
      {
        soru1:'Müziğin arka plânda sürekli çalması sağlayan komuttur.',
        soru2:"Kaç tane seçici türü vardır? " ,
        cevap:"loop=infinite,2,3",

      },
      {
        soru1:'Metnin kutuya sığmaması durumunda kırpıp alt satıra geçiriyor.',
        soru2:"İmleçin bir alt satıra geçmesini sağlar" ,
        cevap:"word-wrap: break-word;,<p>,<br>",

      },

     ]
   }




    console.log('ionViewDidLoad BosluksinavPage');
  }
  hesapla3(gelen1,gelen2){
       if(gelen2=="s1"){
         if(gelen1=="std"){
           document.getElementById('yaz').innerHTML="Aferin Doğru";
         }
        
       }
       else{
        document.getElementById('yaz').innerHTML=" ";
       }
    }
  yazdir(){
   
  }
}
