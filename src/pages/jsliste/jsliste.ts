import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{KonujsPage} from '../konujs/konujs'

/**
 * Generated class for the JslistePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-jsliste',
  templateUrl: 'jsliste.html',
})
export class JslistePage {
   public items:any;
   baslik4:string;
   jsicerik:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[
       {
         "baslik4":"JS Nedir ?",
         "jsicerik":"JavaScript, Html ve Css gibi istemci tarafında çalışan bir programlama dilidir.Yani javascript komutları, sunucuya\ngönderilme ihtiyacı olmadan, direk olarak istemcinin bilgisayarında çalıştırılır ve sonuç kullanıcıya gösterilir.JavaScript C dilinden türemiş olup, Java programlama dili ile hiç bir ilgisi yoktur.JavaScript Yazım Kuralları Html ile iç içe kullanılan javascript komutları, script etiketleri arasında yer alır.<script language=”JavaScript”> Komutlar….</script>Language parametresi yerine type='text/javascript' parametresi de kullanılabilir veya hiç parametre kullanılmayabilir.\nBu script kısmı head ya da body etiketleri arasında oluşturulabilir. Her durumda sayfa yüklendiğinde script etiketleri arasındaki komutlar çalıştırılacak ve sonuç gösterilecektir.Fakat bir javascript fonksiyonu (metodu) oluşturulacaksa daha çok head kısmına yazmak tercih edilir. Fonksiyonlar sayfa yüklenirken değil, ilgili eleman tarafından çağırıldıklarında çalışır ve içerdikleri komutları yerine getirirler.\n JavaScript büyük küçük harfe duyarlı bir dildir.",
          "component":KonujsPage
       },
       {
        "baslik4":"JS Temel Bilgiler",
        "jsicerik":"Değişken Tanımlama \n Değişkenler, programın çalışması esnasında oluşturulan ve verileri saklamaya yarayan elemanlardır. Değişkenler oluşturulurken isimleri ve saklayacakları verinin türü belirlenir. Değişkene değer verileceği zaman, ya da değişkenin sakladığı değere ulaşılmak istendiğinde bu isim kullanılacaktır.\nJavaScript'in diğer dillerden farkı değişkenin, tür belirtmeden de tanımlanabilmesidir. Var komutu ile değişkenin sadece ismi belirtilerek değişken oluşturulabilir. Ardından bu değişkene istenen türde veri girilebilir. Girilen değere göre değişkenin türü algılanacaktır.\nNot: String türündeki değişkenlere değer atarken tek tırnak veya çift tırnak kullanabiliriz.\nVeri Türleri\n JavaScript dilinde değişkenler için 3 farklı veri türünden bahsedebiliriz: \nNumber: Her türlü sayısal değeri saklamak için kullanılır. Ondalıklı sayılarda ondalık kısmı ayırmak için nokta kullanılır.\nString: Karakter veya metin saklamak için kullanılır.\nBoolean: True ya da false değeri saklayabilirler.\nÖrnekler:\nvar sayi1; sayi1=100; var isim='Zafer'; \n Not: JavaScript değişkenlerin türlerini girilen veriye göre kendisi algılamaktadır. Örneğin bir değişkene sayısal bir değer atandığında o değişken Number türüne geçer. Aynı değişkene daha sonra metin değeri verilirse o değişken otomatikman string türüne çevrilir. Bizim bir dönüşüm yapmamıza gerek kalmaz.Örneğin;\nvar a=50;a='Ahmet';\nDeğişken İsimlendirme KurallarıJavaScript büyük küçük harfe duyarlı bir dildir.\nDeğişkenlere isim verilirken Türkçe karakterler ( ı, İ, ğ, Ğ, ü, Ü, ş, Ş, ö, Ö, ç, Ç ), boşluk ve özel karakterler ( . , ; : / vb. ) kullanılmamalıdır.\nAyrıca programlama dilinde başka bir anlamı olan kelimeler de, değişken ismi olarak seçilmemelidir. (int, not, if, char vb.) \n Değişken isimleri rakam veya sayı ile başlayamaz. \nBir değişkene not1 ismi verilebilir ancak 1not ismi verilemez.\n Değişkenler arasında matematiksel işlemler\nString türünde iki değişken toplanırsa, iki değişkenin değerleri yan yana birleştirilir.var x = 'bilgisayar' + 'dersi';  sonuç bilgisayar dersi \nNumber türündeki değişkenler arasında her türlü matematiksel işlem gerçekleştirilebilir.\n Bir string ile bir number türündeki değişken toplandığında ise soldan sağa doğru işlemler gerçekleştirilir. Bunu farklı örnekler ile açıklayalım:\nvar x = 'bilgisayar' + 15;  sonuç bilgisayar15 \nvar x = 15 + 'bilgisayar';  sonuç 15bilgisayar\nvar x = 15 + 'bilgisayar' + 15;  sonuç 15bilgisayar15\n var x = 15 + 5 + 'bilgisayar' + 15;  sonuç 20bilgisayar15 \n parseInt() Metodu \n JavaScript ile iki sayıyı toplamaya çalıştığımızda, bazı durumlarda, özellikle sayıları sayfamızdaki form elemanlarından elde ettiysek bir sorun ile karşılaşabiliriz.\n var a=parseInt(document.getElementById('kutu1').value);",        
        component:KonujsPage
       },
       {
        "baslik4":"JS For,While,İf-else kullanımı",
        "jsicerik":"For Döngüsü\n Belirtilen işlemlerin, istenen şart sağlandığı sürece tekrar edilmesini sağlar. Başlangıç değerinin ve koşulun belirtilebilmesi amacıyla bir değişken kullanılır. Aşağıdaki örnekte 'i' isimli bir değişken kullanılmıştır.\nDöngü for ifadesi ile başlar ve parantez içi birbirinden noktalı virgül ile ayrılan üç kısımdan oluşur:\n i=1 ile değişkenin başlangıç değeri belirtilmiştir.\n i<=100 ile döngünün devam etmesi için sağlanması gereken koşul belirtilmiştir. Bu örnekte i değişkeninin değeri 100'den küçük veya eşit olduğu sürece döngü tekrarlanacaktır.\n i++ ile de döngü her döndüğünde i değişkeninin değerinin 1 artırılması sağlanmıştır.for(i=1;i<=100;i++){calisacak komutlar..}if - else Kullanımı\n if (şartımız){Şart doğruysa yapılacak işlemler}else{Şart yanlışsa yapılacak işlemler}\nAçıklama: if komutundan sonra parantez içerisinde şart yazılır.\nİlk süslü parantezler arasına, şart doğru ise yapılacak işlemler yazılır.\nElse kısmı isteğe bağlıdır. Şart yanlış ise yapılacak işlemler, else komutundan sonraki parantezler arasına yazılır.\nNot: Şart doğru ya da yanlış olduğunda yapılacak işlemler 1 satırdan oluşuyorsa küme parantezleri kullanılmayabilir. Programımızda kontrol etmemiz gereken durumların sayısı 2 ve daha fazla ise else if kullanarak, her durumda yapılacakları ayrı ayrı belirtebiliriz.Örnek:if(a<b){document.write('a sayısı küçük');}else if(b<a){ document.write('b sayısı küçük');  }else{document.write('sayılar eşit');} Burada da else kısmı isteğe bağlıdır ve hiç bir şartın tutmadığı durumda buradaki işlemler yapılır.While Döngüsü\nBelirtilen şart sağlandığı sürece istenilen işlemlerin tekrarlanmasını sağlar. \nFor döngüsü kullanırken, döngünün kaç kez döneceği baştan bilinmekte, en azından tahmin edilebilmektedir. \nWhile döngüsü ise döngünün kaç kez döneceğinin bilinmediği durumlarda tercih edilir. En başta belirtilen şart tutmaz ise döngü hiç dönmeyebilir, tutması halindeyse defalarca dönebilir.\nvar sayi=1;\nwhile(sayi!=0){sayi=prompt('Sayı giriniz');document.write(sayi+'<br/>'); }document.write('Bitti');",
        component:KonujsPage
       },
       {
        baslik4:'JS Diziler Ve Mat. Fonksiyon',
        component:KonujsPage
       },
       {
        baslik4:'JS Tarih Ve Saat İşlemleri',
        component:KonujsPage
       },  
       {
        baslik4:'JS Kullanıcıdan Bilgi Çekme',
        component:KonujsPage
       },
       {
        baslik4:'JS Fonksiyonlar',
        component:KonujsPage
       },
       {
        baslik4:'JS Olaylar(Events)',
        component:KonujsPage
       },
       {
        baslik4:'JS Document Nesnesi',
        component:KonujsPage
       },
       {
        baslik4:'JS Etiketlerde Stil Değişimi',
        component:KonujsPage
       },
       {
        baslik4:'JS Windows Nesnesi',
        component:KonujsPage
       }
    ]

  }
  jskonu(sayfa3){
    this.navCtrl.push(KonujsPage,{
    data3:sayfa3})
   
  }

}
