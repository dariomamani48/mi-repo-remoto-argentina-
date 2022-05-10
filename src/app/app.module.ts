import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginaEntradaComponent } from './components/pagina-entrada/pagina-entrada.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ListadoTecnologiasComponent } from './components/listado-tecnologias/listado-tecnologias.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { InformacionComponent } from './components/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaEntradaComponent,
    PresentacionComponent,
    ListadoTecnologiasComponent,
    FooterComponent,
    LoginComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
