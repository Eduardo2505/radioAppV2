import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactoPage } from '../pages/contacto/contacto';
import { PistasPage } from '../pages/pistas/pistas';
import { RadioPage } from '../pages/radio/radio';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RadioPlayersProvider } from '../providers/radio-players/radio-players';

import { HttpModule } from '@angular/http';
import { ReproductorComponent } from '../components/reproductor/reproductor';

@NgModule({
  declarations: [
    MyApp,
    ContactoPage,
    PistasPage,
    RadioPage,
    TabsPage,
    ReproductorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactoPage,
    PistasPage,
    RadioPage,
    ReproductorComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RadioPlayersProvider
  ]
})
export class AppModule {}
