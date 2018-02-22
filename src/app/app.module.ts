import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { CardSearchPage } from '../pages/card-search/card-search';
import { CardViewPage } from '../pages/card-view/card-view';
import { CardSetsPage } from '../pages/card-sets/card-sets';
import { SetViewPage } from '../pages/set-view/set-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CardsProvider } from '../providers/cards/cards';

@NgModule({
  declarations: [
    MyApp,
    CardSearchPage,
    CardViewPage,
    CardSetsPage,
    SetViewPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardSearchPage,
    CardViewPage,
    CardSetsPage,
    SetViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CardsProvider
  ]
})
export class AppModule {}
