import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsergirisPage } from '../usergiris/usergiris';

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
   public adi2:string;
   public soyad2:string;
   public puan:number=0;

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
          cevap4:"Metnin altını çizer",
          cvp:"s1"

        },
        {
          soru:"2.)<h1> Etiketinin İşlevi Nedir ?",
          cevap1:"En büyük başlık etiketidir.",
          cevap2:"Metni eğik yazar",
          cevap3:"En küçük baslik etiketidir.",
          cevap4:"Metine üst çizgi çizer",
          cvp:"s2"

        },
        {
          soru:" 3.)<u></u> Etiketinin İşlevi Nedir ?",
          cevap1:"Metni kalın yazmak için kullanılır",
          cevap2:"Madde işareti koymak için kullanılır",
          cevap3:"Metninin üstünü çizer",
          cevap4:"Metni eğik yazar",
          cvp:"s3"

        },
        {
          soru:"4.)HTML Nedir?",
          cevap1:"Sayfa içindeki metinlerin tarayıcıda nasıl görüneceğini ve işlevsel olacağını düzenleyen işaret dilidir.",
          cevap2:"Diğer sayfaları bağlayan linkler",
          cevap3:"Nesneyi bağlayan linkler",
          cevap4:"Programlama dili",
          cvp:"s4"

        },
        {
          soru:"5.)Html etiketleri hangi karakterler arasına yazılır?",
          cevap1:" < >  ",
          cevap2:"# #",
          cevap3:"{ } ",
          cevap4:"“ “",
          cvp:"s5"

        },
        {
          soru:"6.)HTML dokümanının başlık çubuğunda yer alacak sayfa başlık yazısı hangi HTML etiketleri arasına yazılır?",
          cevap1:"<body>",
          cevap2:"<html>",
          cevap3:"<head>",
          cevap4:"<title>",
          cvp:"s6"

        },
        {
          soru:"7.)Link (bağlantı) oluşturmak için kullanılan HTML etiketi aşağıdakilerden hangisidir?",
          cevap1:"<a>",
          cevap2:"<li>",
          cevap3:"<img>",
          cevap4:"<div>",
          cvp:"s7"

        },
        {
          soru:"8.)Genişliği ayarlamak için kullanılan HTML etiketi aşağıdakilerden hangisidir?",
          cevap1:"height",
          cevap2:"width ",
          cevap3:"left",
          cevap4:"top",
          cvp:"s8"

        },
        {
          soru:"9.)Bir tablonun kenarlık kalınlığını ayarlamak için \n kullanılan HTML parametresi aşağıdakilerden hangisidir?",
          cevap1:"border",
          cevap2:"width ",
          cevap3:"height",
          cevap4:"align",
          cvp:"s9"

        },
        {
          soru:"10.)HTML sayfasının arka zeminini mavi yapmak için hangi HTML satırı kullanılır?",
          cevap1:" <body color=”blue”>",
          cevap2:" <body bgcolor=”blue”> ",
          cevap3:"<body background=”blue”>",
          cevap4:"<body set=”blue”>",
          cvp:"s10"

        },
      ]

    }
    else if(this.gelen=="Test 2"){
      this.example1=[
        {
          soru:"1.)Numaralı liste için kullanılan etiketler hangisidir?",
          cevap1:"<ul><li>..</ul>",
          cevap2:"<ol><li>..</ol>",
          cevap3:"<dl><li>..</dl>",
          cevap4:"<dt><li>..</dt>",
          cvp:"s1"

        },
        {
          soru:"2.)Hangisi tabloda çerçeve kalınlığını belirler?",
          cevap1:"<table border=”1”>",
          cevap2:"<table format=”1”>",
          cevap3:"<table line=”1”>",
          cevap4:"<table frame=”1”>",
          cvp:"s2"
        },
        {
          soru:" 3.)Hangisi HTML’de metin düzenlemeyi sağlayan etikettir?",
          cevap1:"<END>",
          cevap2:"<BEGIN>",
          cevap3:"<FONT>",
          cevap4:"<TITLE>",
          cvp:"s3"
        },
        {
          soru:"4.) Tablo içinde yeni bir satır eklemek için hangi HTML etiketi kullanılır?",
          cevap1:"<tr>",
          cevap2:"<TH>",
          cevap3:"<td>",
          cevap4:"<nl>",
          cvp:"s4"
        },
        {
          soru:"5.)Tabloda aynı satırları birleştirmeyi sağlayan etiket hangisidir?",
          cevap1:"COLSPAN",
          cevap2:"ROWSPAN",
          cevap3:"CELLSPACING",
          cevap4:"CELLPADDING",
          cvp:"s5"

        },
        {
          soru:"6.)Hangisi metin düzenleme etiketlerinden değildir?",
          cevap1:"<H4>…</H4>",
          cevap2:"<B>…</B>",
          cevap3:"<P>..</P>",
          cevap4:"<TR>..</TR>",
          cvp:"s6"

        },
        {
          soru:"7.)Aşağıdakilerden hangisi listelerde kullanılan parametrelerden değildir?",
          cevap1:"face",
          cevap2:"compact",
          cevap3:"start",
          cevap4:"type",
          cvp:"s7"

        },
        {
          soru:"8.)Aşağıdakilerden hangisi arama motoru çeşitlerindendir?",
          cevap1:"Client",
          cevap2:"Crowler",
          cevap3:"Server",
          cevap4:"Browser",
          cvp:"s8"

        },
        {
          soru:"9.)Hangisi bağlantıyı yeni bir pencerede açar?",
          cevap1:"target=”_blank”",
          cevap2:"target=”_parent” ",
          cevap3:"target=”_self”",
          cevap4:"target=”_top”",
          cvp:"s9"

        },
        {
          soru:"10.)Yazı büyüklüğünü 7 yapmak için hangi HTML etiketi kullanılır?",
          cevap1:"<FONT NAME SIZE=”7”>",
          cevap2:"<FONT SIZE=”7”>",
          cevap3:"<FONT WEIGHT=”7”>",
          cevap4:"<FONT HEIGHT=”7”>",
          cvp:"s10"

        },
      ]
      
    }
    else if(this.gelen=="Test 3"){
      this.example1=[
        {
          soru:"1.)Java Script kodları hangi taglar arasına yazılır.",
          cevap1:"<style type='text/css></style>'",
          cevap2:"<script type=”text/javascript” language=”javascript”></script>",
          cevap3:"<link rel='ScriptSheet' src='dosya.js'>",
          cevap4:"<a href='script.js'></a>",
          cvp:"s1"

        },
        {
          soru:"2.)Javascript dilinde değişken isimlendirme kurallarından hangisi yanlış verilmiştir?",
          cevap1:"Sayı ile başlayabilir",
          cevap2:"Kelimeler arasında boşluk bırakılamaz",
          cevap3:"Türkçe karakterle başlayamaz.",
          cevap4:"Javascript dilinin komutları kullanılamaz",
          cvp:"s2"

        },
        {
          soru:" 3.)Javascript dilinde yorum satırları hangi karakterler arasına yazılır",
          cevap1:"<* <",
          cevap2:"/* /*",
          cevap3:"/* */",
          cevap4:"<* *<",
          cvp:"s3"

        },
        {
          soru:"4.)Javascript Ekrana yazı yazdırma komutu nedir?",
          cevap1:"document.write()",
          cevap2:"console.write",
          cevap3:"cout<<'' ",
          cevap4:"printf()",
          cvp:"s4"
        },
        {
          soru:"5.)JS de Kullanıcıdan değer girmesini sağlayan komut nedir?",
          cevap1:"prompt",
          cevap2:"innerHtml",
          cevap3:"cin>>",
          cevap4:"scanf()",
          cvp:"s5"

        },
        {
          soru:"6.)Reverse() komutu ne işe yarar?",
          cevap1:"Dizi elemanlarını büyükten küçüğe sıralar.",
          cevap2:"Dizi elemanlarını küçükten büyüğe sıralar",
          cevap3:"Dizi elemanlarını diziden silmemizi sağlar.",
          cevap4:".Dizi elemanlarımızı ters çevirmemizi sağlar",
          cvp:"s6"

        },
        {
          soru:"7.)Push() komutu ne işe yarar?",
          cevap1:"Diziye eleman eklememizi sağlar",
          cevap2:"Diziden eleman kaldırmamızı sağlar",
          cevap3:"Diziyi kopyalar",
          cevap4:"Diziyi tersten yazdırır.",
          cvp:"s7"

        },
        {
          soru:"8.)JAVASCRİPT fonksiyonlar nasıl oluşturulur ?",
          cevap1:"int function(){}",
          cevap2:"function(){}",
          cevap3:"void function(){}",
          cevap4:"double function(){}",
          cvp:"s8"

        },
        {
          soru:"9.)Javascript değişken tanımlamalarından hangisi yanlıştır?",
          cevap1:"var sayi;",
          cevap2:"int var sayi; ",
          cevap3:"var int sayi;",
          cevap4:"int sayi;",
          cvp:"s9"

        },
        {
          soru:"10.)<div id='yaz'>icerik</div> metnini aşağıdağılakilerden hangisi değiştirir?" ,
          cevap1:"document.getElementByName('yaz').style.text='Metin değişti'",
          cevap2:"document.getElementById('yaz').innerHtml='Metin değişti'",
          cevap3:"document.getElementById('yaz').value='Metin değişti'",
          cevap4:"document.getElementById('yaz').style.FONT='Metin değişti'",
          cvp:"s10"
        },
      ]
     
    }
    else if(this.gelen=="Test 4"){
      this.example1=[
        {
          soru:"1.)Javascript onMouseOver olayı için aşağıdakilerden hangisi doğrudur ? ",
          cevap1:"Farenin nesne üzerinden ayrılması olayıdır.",
          cevap2:"Html nesnesinin üstüne gelme olayını gözleyen olaydır.",
          cevap3:"Fare nesne üzerinde gezdirildiğinde meydana gelen olaydır. ",
          cevap4:"Farenin basılı olan tuşu bırakması olayıdır. ",
          cvp:"s1"

        },
        {
          soru:"2.)Aşağıdakilerden hangisi javascript olay(events) değildir ?",
          cevap1:"DefaultStatus()",
          cevap2:"onKeyDown()",
          cevap3:"onSelect()",
          cevap4:"onMouseMove()",
          cvp:"s2"

        },
        {
          soru:" 3.)Javascript Confirm Metodu ne için kullanılmaktadır? ",
          cevap1:"Kullanıcının veri girmesini sağlamaktadır.",
          cevap2:"Tarayıcının alt kısmındaki durum çubuğunda gösterilen mesajdır.",
          cevap3:"Yapılan işlem sonucu onay kutusu oluşturur",
          cevap4:"Aktif olan sayfayı kapatmaya yarar.",
          cvp:"s3"

        },
        {
          soru:"4.)JavaScript yazılımı aşağıdaki hangi dilden etkilenmiştir? ",
          cevap1:"Perl ",
          cevap2:"Jscript",
          cevap3:".Net",
          cevap4:"Objective-j",
          cvp:"s4"
        },
        {
          soru:"5.)Aşağıdakilerden hangisi uygun değişken ismidir?",
          cevap1:"tree",
          cevap2:"try",
          cevap3:"case",
          cevap4:"const",
          cvp:"s5"

        },
        {
          soru:"6.)Yorum kodları ile ilgili aşağıdakilerden hangisi yanlıştır? ",
          cevap1:"Yorum kodları uygulamanın istediğimiz yerine açıklama eklememizi sağlar. ",
          cevap2:"İki şekilde açıklama satırları eklenebilir. ",
          cevap3:"/**/ ifadeleri çok satırlı açıklama satırları oluşturur.",
          cevap4:"Yorum kodları uygulamanın işleyişini değiştirir",
          cvp:"s6"

        },
        {
          soru:"7.)Javascript Splice metodu için aşağıdakilerden hangisi doğrudur ?",
          cevap1:"Dizi elemanlarını silme ve ekleme yapabiliriz",
          cevap2:"Diziden eleman kaldırmamızı sağlar",
          cevap3:"Diziyi kopyalar",
          cevap4:"Diziyi tersten yazdırır.",
          cvp:"s7"

        },
        {
          soru:"8.)Random( ) metodu ile ilgili ifadelerden hangisi doğrudur ?",
          cevap1:"Random() metodu 0-100 arası değer üretir. ",
          cevap2:"Random() metodu 0-1 arası rastgele sayı üretir",
          cevap3:"Random() metodu küçükten büyüğe doğru rastgele sayı üretir.",
          cevap4:"Math.floor( Math.random() ) ifadesi sayıyı tam sayıya çevirir.",
          cvp:"s8"

        },
        {
          soru:"9.)Javascript BrowserLanguage Özelliği ne işe yaramaktadır ?",
          cevap1:"Tarayıcının dilini verir",
          cevap2:"Tarayıcının versiyonunu verir.",
          cevap3:"Tarayıcıda java ayarının açık olup olmadığını kontrol eder. ",
          cevap4:"Sayfanın açıldığı tarayıcı ismini verir.",
          cvp:"s9"

        },
        {
          soru:"10.)Dizilerde indexOf() metodu ne işe yaramaktadır ?" ,
          cevap1:"Dizinin başındaki elemanı kaldırır",
          cevap2:"Dizi içerinde geçen kelimeyi aramamızı sağlar",
          cevap3:"Dizi elemanlarını sıralamak için kullanılır.",
          cevap4:"Dizi elemanlarını ters çevirmemizi sağlar. ",
          cvp:"s10"
     
        },
      ]
     
    }
    else if(this.gelen=="Test 5"){
      this.example1=[
        {
          soru:"1.)Aşağıdaki ifadelerden hangisi yanlıştır ?",
          cevap1:"C++ Program çalışmaya main() ile başlar.",
          cevap2:"a++ işlemi önce a’yı artırır sonra a’yı kullanır.",
          cevap3:"n anlamı bir alt satırın başından başladır.",
          cevap4:"C++ küçük ve büyük harfe duyarlıdır.",
          cvp:"s1"

        },
        {
          soru:"2.)Aşağıdaki ifadelerden hangisi diğerlerinden farklıbir işlem gerçekleştirir ?",
          cevap1:"a+=a;",
          cevap2:"++a;",
          cevap3:"a++;",
          cevap4:"a=a+1;",
          cvp:"s2"

        },
        {
          soru:" 3.)Aşağıdaki döngülerden hangisi sonsuz döngüdür ?",
          cevap1:"for(x=10;x>0;x++)x-=2",
          cevap2:"do{x-=x}while(x)",
          cevap3:"for(x=10;x<0;x--)",
          cevap4:"a=1;if(a==1)a=1;",
          cvp:"s3"

        },
        {
          soru:"4.)Aşağıdakilerden hangisi değişken ismi olarak kullanılamaz ?",
          cevap1:"1ACB",
          cevap2:"AAA",
          cevap3:"ab_c",
          cevap4:"a1b2",
          cvp:"s4"
        },
        {
          soru:"5.)Aşağıdakilerden hangisi 1 ile 10 arasındaki sayıları ekrana yazar?",
          cevap1:"for(sayac=1;sayac<= 10;sayac++)cout<<sayac",
          cevap2:"for(sayac=1;sayac< 10;sayac++)cout<<sayac",
          cevap3:"for(sayac=1;sayac>= 10;sayac++)cout<<sayac ",
          cevap4:"for(sayac=1;sayac > 10;sayac++)cout<<sayac",
          cvp:"s5"

        },
        {
          soru:"6.)10 ile 100 dahil aradaki sayıları toplayan ve toplam ismindeki değişkene atayan kod hangisidir?",
          cevap1:"for ( a = 10; a < 100; a--)toplam = toplam + a;",
          cevap2:"for ( a = 10; a >= 100; a++) toplam = toplam + a;",
          cevap3:"for ( a = 10; a < 100; a++) toplam = toplam + a;",
          cevap4:"for ( a = 10; a <= 100; a++) toplam = toplam + a;",
          cvp:"s6"

        },
        {
          soru:"7.)Aşağıdaki ifadelerden hangisi doğrudur ?",
          cevap1:"C’de farklıdır işareti “<>” dir.",
          cevap2:"İsmin ilk karakteri bir harf veya _ altçizgi olmalıdır.",
          cevap3:"&& işareti, C’de mantıksal “veya” işaretidir.",
          cevap4:"C'de, küçük harfler ile büyük harfler birbirinden farksızdır",
          cvp:"s7"

        },
        {
          soru:"8.int a = 4, b = 7,c; c = a = = b; cout<<c; ekran çıktısı nedir?",
          cevap1:"1",
          cevap2:"0",
          cevap3:"garbage value",
          cevap4:"error",
          cvp:"s8"

        },
        {
          soru:"9.)int x[4] = {1,2,3}; cout<<x[3]<<x[2]<<[1]; ekran çıktısı nedir?",
          cevap1:"032",
          cevap2:"000",
          cevap3:"03%D ",
          cevap4:"321",
          cvp:"s9"

        },
        {
          soru:"10.)int i = 1,j; j=i--- -2; cout<<j; ekran çıktısı nedir?" ,
          cevap1:"error",
          cevap2:"3",
          cevap3:"2",
          cevap4:"-3",
          cvp:"s10"
        },
      ]
      
    }
    else if(this.gelen=="Test 6"){
      this.example1=[
        {
          soru:"1.)Aşağıdakilerden hangisi eğer sayi 10'a eşit ve toplam küçüktür 20 olduğunda 'yanlış.' yazar?",
          cevap1:"if( (sayi = = 10) || (toplam < 20) ) printf('yanlış.');",
          cevap2:"if( (sayi = 10) && (toplam < 20) ) printf('yanlış.');",
          cevap3:"if( (sayi = = 10) && (toplam < 20) ) printf('yanlış.');",
          cevap4:" if( (sayi = = 10) || (toplam <= 20) ) printf('yanlış.'); ",
          cvp:"s1"

        },
        {
          soru:"2.) for döngüsünde üç bölüm bulunur. Bunlar sırasıyla;",
          cevap1:"başlangıç değeri, koşul, artım",
          cevap2:"artım, başlangıç değeri, koşul",
          cevap3:"artım, koşul, başlangıç değeri",
          cevap4:"koşul, başlangıç değeri, artım",
          cvp:"s2"

        },
        {
          soru:" 3.)Aşağıdakilerden hangisi C++’deki veri tipi değildir?",
          cevap1:"int",
          cevap2:"float",
          cevap3:"real",
          cevap4:"double",
          cvp:"s3"

        },
        {
          soru:"4.)int i=4,x; x= ++i + ++i + ++i; ekran çıktısı nedir ?",
          cevap1:"19",
          cevap2:"18",
          cevap3:"Hiçbiri",
          cevap4:"Hata verir.",
          cvp:"s4"
        },
        {
          soru:"5.) C dilinde aşağıdaki operatörlerin uygulama önceliği sırasıyla nasıldır?",
          cevap1:" / * + -",
          cevap2:"* - / + ",
          cevap3:"+ - / * ",
          cevap4:"/ + * -",
          cvp:"s5"

        },
        {
          soru:"6.)Fonksiyonlarla ilgili aşağıdakilerden hangisi doğrudur?",
          cevap1:"Her durumda prototip tanımlaması yapmak mecburidir. ",
          cevap2:"Fonksiyonlar kendi kendilerini çağıramaz",
          cevap3:"Fonksiyondan break komutu ile çıkılır",
          cevap4:"Her C++ programında en az 1 tane fonksiyon bulunur.",
          cvp:"s6"

        },
        {
          soru:"7.)Döngülerle ilgili aşağıdakilerden hangisi doğrudur?",
          cevap1:"continue deyimi ile, döngünün kalan bölümü atlanır ve bir sonraki çevrime gidilir.",
          cevap2:"end deyimi, döngüyü sonlandırır. ",
          cevap3:"Döngüler return deyimi ile bir değer döndürür.",
          cevap4:"C dilinde 2 tane döngü çeşidi vardır.",
          cvp:"s7"

        },
        {
          soru:"8.)Global değişkenler ile ilgili aşağıdakilerden hangisi doğrudur?",
          cevap1:"const ön neyimi ile tanımlanır.",
          cevap2:"main() fonksiyonu üzerinde tanımlanır.",
          cevap3:"main() fonksiyonu altında tanımlanır.",
          cevap4:"Sadece belirli bir fonksiyon altında tanımlıdır.",
          cvp:"s8"

        },
        {
          soru:"9.)Yandaki işlemde hangi işlem sırası takip edilir? : z = x + y * z / 4 % 2 - 1?",
          cevap1:"* / % + - =  ",
          cevap2:"= * / % + -  ",
          cevap3:"/ * % - + =  ",
          cevap4:"* % / - + = ",
          cvp:"s9"

        },
        {
          soru:"10.)Yandaki aritmetik ifadenin çıktısı ne olur ?(5+3*2%10-8*6) " ,
          cevap1:"-42",
          cevap2:"-37",
          cevap3:"-32",
          cevap4:"-28",
          cvp:"s10"
     
        },
      ]
      
    }
    else if(this.gelen=="Test 7"){
      this.example1=[
        {
          soru:"1.)CSS (Cascading Style Sheet) ile aşağıdakilerden hangisi yapılamaz.?",
          cevap1:"Bir tablonun border’ının rengi kırımızı yapılması",
          cevap2:"Bir sayfanın yeniden yüklenmesi",
          cevap3:"Bir link alt çizgisinin kaldırılması",
          cevap4:"Bir yazının fontunun Arial yapılması",
          cvp:"s1"
        },
        {
          soru:"2.)test.css dosyalarındaki style’leri kullanmak için hangi tag kullanılmalıdır ?",
          cevap1:"link",
          cevap2:"style",
          cevap3:"html",
          cevap4:"body",
          cvp:"s2"

        },
        {
          soru:" 3.)Aşağdaki kodlardan hangisiyle yazıyı ortalarız?",
          cevap1:"<body>",
          cevap2:"<left>",
          cevap3:"<center>",
          cevap4:"<align>",
          cvp:"s3"

        },
        {
          soru:"4.)<font face>….</font> etiketinin işlevi nedir?",
          cevap1:"Yazı tipini belirler",
          cevap2:"Yazı rengini belirler",
          cevap3:"Yazı boyutunu belirler",
          cevap4:"Yazıyı hizalamak içindir.",
          cvp:"s4"
        },
        {
          soru:"5.) 24.	Bir tablonun arkaplan rengini ayarlamak için hangisi kullanılır?",
          cevap1:"bgcolor",
          cevap2:"img",
          cevap3:"background",
          cevap4:"image",
          cvp:"s5"

        },
        {
          soru:"6.)Mouse ile resmin üzerine gelindiğinde istenilen bir mesajın çıkmasını sağlayan parametre nedir?",
          cevap1:"top",
          cevap2:"value",
          cevap3:"src",
          cevap4:"alt",
          cvp:"s6"

        },
        {
          soru:"7.)Bir sayfadaki tüm linklerin alt çizgisini kaldırmak için hangisi doğrudur?",
          cevap1:"a{text-decoration:none} ",
          cevap2:"a{text-style:none} ",
          cevap3:"link{text-line:none} ",
          cevap4:"a{text-line:none}",
          cvp:"s7"

        },
        {
          soru:"8.)FTP nedir?",
          cevap1:"İnternet protokolü",
          cevap2:"Dosya Transfer protokolü",
          cevap3:"Alan adı",
          cevap4:"Web sunucusu",
          cvp:"s8"

        },
        {
          soru:"9.)Css de asağıdaki konumlandırma parametlerinden hangisi sayfaya göre konum alır?",
          cevap1:"position",
          cevap2:"relative",
          cevap3:"static ",
          cevap4:"fixed",
          cvp:"s9"

        },
        {
          soru:"10.)Genel css kodları hangi tag arasına yazılır " ,
          cevap1:"<link>",
          cevap2:"<head>",
          cevap3:"<script>",
          cevap4:"<style>",
          cvp:"10"
        },
      ]
      
    }
  }
  hesapla(degeri,degeri2){
    var dogru=0,yanlis,giren=0;
    var puan =10;
    if(degeri2=="s1"){
     if(degeri=="B"){
      (this.puan)=(this.puan)+10;
     }
     else{
       yanlis++;
     }
    }
    else if(degeri2=="s2"){
      if(degeri=="A"){
        (this.puan)=(this.puan)+10;
      }
      else{
        yanlis++;
      }
     }
     else if(degeri2=="s3"){
      if(degeri=="C"){
        (this.puan)=(this.puan)+10;
      }
      else{
        yanlis++;
      }
     }
     else if(degeri2=="s4"){
      if(degeri=="A"){
        (this.puan)=(this.puan)+10;
      }
      else{
        yanlis++;
      }
     }
     else if(degeri2=="s5"){
      if(degeri=="A"){
        (this.puan)=(this.puan)+10;
      }
      else{
        yanlis++;
      }
     }
     else if(degeri2=="s6"){
      if(degeri=="D"){
        (this.puan)=(this.puan)+10;
      }
      else{
        yanlis++;
      }
     }
     else if(degeri2=="s7"){
      if(degeri=="A"){
        (this.puan)=(this.puan)+10;
      }
      else{
        yanlis++;
      }
     }
     else if(degeri2=="s8"){
      if(degeri=="B"){
     (this.puan)=(this.puan)+10;
      }
      else{
        yanlis++;
      }
     }
     else if(degeri2=="s9"){
      if(degeri=="A"){
       (this.puan)=(this.puan)+10;
      }
      else{
        yanlis++;
      }
     }
     else if(degeri2=="s10"){
      if(degeri=="B"){
       (this.puan)=(this.puan)+10;
      }
      else{
        yanlis++;
      }
     }
     if(degeri=="sonucyaz"){
     document.getElementById("son").innerHTML=this.adi2+" "+this.soyad2+" Puanı:"+this.puan;

    }
     if(degeri=="bitis"){
      document.getElementById('soru1').innerHTML="Sınav başarı ile tamamlandı.";
     }
     
    }
    kaydet(){
      this.navCtrl.push(UsergirisPage,{
       puangonder:this.puan,
       soyadgonder:this.soyad2
        
      })
    }
    
}
