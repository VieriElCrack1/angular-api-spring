import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { RegistrarPedidoComponent } from './registrar-pedido/registrar-pedido.component';
import { ActualizarPedidoComponent } from './actualizar-pedido/actualizar-pedido.component';

const routes: Routes = [
  {path:'pedidos',component:ListaPedidoComponent},
  {path:'',redirectTo:'pedidos',pathMatch:'full'}, 
  {path:'registrar-pedido', component:RegistrarPedidoComponent},
  {path:'actualizar-pedido/:idpedido', component:ActualizarPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
