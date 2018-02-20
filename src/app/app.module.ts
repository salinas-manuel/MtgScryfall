import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { CardSearchPage } from '../pages/card-search/card-search';
import { CardViewPage } from '../pages/card-view/card-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CardsProvider } from '../providers/cards/cards';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    CardSearchPage,
    CardViewPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    CardSearchPage,
    CardViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CardsProvider
  ]
})
export class AppModule {}
