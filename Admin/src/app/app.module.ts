import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { InicioPage } from '../pages/inicio/inicio';
import { PedidosRecientesPage } from '../pages/pedidos-recientes/pedidos-recientes';
import { LoginPage } from '../pages/login/login';
import { AcercaDeFoodiePage } from '../pages/acerca-de-foodie/acerca-de-foodie';4
import { EditarMenuPage } from '../pages/editar-menu/editar-menu';
import {PlatosPage} from '../pages/platos/platos';
import {RevisarPedidosPage} from '../pages/revisar-pedidos/revisar-pedidos';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import { InformationProvider } from '../providers/information/information';
import { UserProvider } from '../providers/user/user';

export const firebaseConfig = {
  apiKey: "AIzaSyDA6p3PaQ7yrdCYso5mjEY3zuQixX4uy3M",
  authDomain: "foodie-8373f.firebaseapp.com",
  databaseURL: "https://foodie-8373f.firebaseio.com",
  projectId: "foodie-8373f",
  storageBucket: "foodie-8373f.appspot.com",
  messagingSenderId: "850396954237"
};

@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    InicioPage,
    PedidosRecientesPage,
    LoginPage,
    AcercaDeFoodiePage,
    EditarMenuPage,
    PlatosPage,
    RevisarPedidosPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'demo104'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    InicioPage,
    PedidosRecientesPage,
    LoginPage,
    AcercaDeFoodiePage,
    EditarMenuPage,
    PlatosPage,
    RevisarPedidosPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    InformationProvider,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
