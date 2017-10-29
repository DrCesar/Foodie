import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { InicioPage } from '../pages/inicio/inicio';
import { PedidoActualPage } from '../pages/pedido-actual/pedido-actual';
import { PedidoAnteriorPage } from '../pages/pedido-anterior/pedido-anterior';
import { RestaurantesCercanosPage } from '../pages/restaurantes-cercanos/restaurantes-cercanos';
import { CategorAsPage } from '../pages/categor-as/categor-as';
import { PedidosRecientesPage } from '../pages/pedidos-recientes/pedidos-recientes';
import { PlatosPage } from '../pages/platos/platos';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { LoginPage } from '../pages/login/login';
import { AcercaDeFoodiePage } from '../pages/acerca-de-foodie/acerca-de-foodie';
import { RecuperarContraseAPage } from '../pages/recuperar-contrase-a/recuperar-contrase-a';
import { ResultadosDeBSquedaPage } from '../pages/resultados-de-bsqueda/resultados-de-bsqueda';
import { PerfilPage } from '../pages/perfil/perfil';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireDatabase} from 'angularfire2/database';

import { InformationProvider } from '../providers/information/information';
import { UserProvider } from '../providers/user/users';

const firebaseConfig = {
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
    PedidoActualPage,
    PedidoAnteriorPage,
    RestaurantesCercanosPage,
    CategorAsPage,
    PedidosRecientesPage,
    PlatosPage,
    RestaurantesPage,
    LoginPage,
    AcercaDeFoodiePage,
    RecuperarContraseAPage,
    ResultadosDeBSquedaPage,
    PerfilPage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    InicioPage,
    PedidoActualPage,
    PedidoAnteriorPage,
    RestaurantesCercanosPage,
    CategorAsPage,
    PedidosRecientesPage,
    PlatosPage,
    RestaurantesPage,
    LoginPage,
    AcercaDeFoodiePage,
    RecuperarContraseAPage,
    ResultadosDeBSquedaPage,
    PerfilPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InformationProvider,
    UserProvider
  ]
})
export class AppModule {}