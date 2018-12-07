import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OrnekuygulamalarPage } from '../pages/ornekuygulamalar/ornekuygulamalar';
import { KayitolPage } from '../pages/kayitol/kayitol';
import { UsergirisPage } from '../pages/usergiris/usergiris';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, category:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sonuç Öğrenme', component: UsergirisPage, category:"0"},
      { title: 'Kayıt Ol', component: KayitolPage , category:"1"},
      { title: 'Konu Anlatım', component: HomePage , category:"2"},
      { title: 'Örnek Uygulamalar', component:OrnekuygulamalarPage , category:"3"},
      { title: 'Kendini Test Et', component: HomePage , category:"4"}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {
      data:page
    });
  }
}
