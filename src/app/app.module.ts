import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarPedidoComponent } from './registrar-pedido/registrar-pedido.component';
import { FormsModule } from '@angular/forms';
import { ActualizarPedidoComponent } from './actualizar-pedido/actualizar-pedido.component';
import { appconfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    ListaPedidoComponent,
    RegistrarPedidoComponent,
    ActualizarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appconfig.provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
