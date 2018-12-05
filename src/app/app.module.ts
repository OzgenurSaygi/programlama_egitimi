import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{JskonuanlatimPage}from'../pages/jskonuanlatim/jskonuanlatim';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{ HtmlkonuanlatimPage} from'../pages/htmlkonuanlatim/htmlkonuanlatim';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    JskonuanlatimPage,
    HtmlkonuanlatimPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp ,{
      backButtonText:'GERİ'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    JskonuanlatimPage,
    HtmlkonuanlatimPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
