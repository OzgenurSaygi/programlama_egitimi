import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{ HtmlkonuanlatimPage} from'../pages/htmlkonuanlatim/htmlkonuanlatim';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{JslistePage} from '../pages/jsliste/jsliste';
import{KonujsPage} from'../pages/konujs/konujs';
import{CpluslistePage} from '../pages/cplusliste/cplusliste';
import{CpluskonuPage} from '../pages/cpluskonu/cpluskonu';
import{OrnekuygulamalarPage} from'../pages/ornekuygulamalar/ornekuygulamalar';
import{HtmlorneklerPage}from'../pages/htmlornekler/htmlornekler';
import{JsorneklerPage}from'../pages/jsornekler/jsornekler';
import{CplusornekPage}from'../pages/cplusornek/cplusornek';
import{KayitolPage}from'../pages/kayitol/kayitol';
import{UsergirisPage}from'../pages/usergiris/usergiris';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HtmlkonuanlatimPage,
    JslistePage,
    KonujsPage,
    CpluslistePage,
    CpluskonuPage,
    OrnekuygulamalarPage,
    HtmlorneklerPage,
    JsorneklerPage,
    CplusornekPage,
    KayitolPage,
    UsergirisPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp ,{
      backButtonText:'GERİ'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HtmlkonuanlatimPage,
    JslistePage,
    KonujsPage,
    CpluslistePage,
    CpluskonuPage,
    OrnekuygulamalarPage,
    HtmlorneklerPage,
    JsorneklerPage,
    CplusornekPage,
    KayitolPage,
    UsergirisPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
