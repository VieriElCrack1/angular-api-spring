import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from './pedido';
import { Categoria } from './categoria';
import { Estado } from './estado';
import { Consulta } from './consulta';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(private httpClient:HttpClient) { }

  obtenerConsulta() : Observable<Consulta[]> {
    var url = "http://localhost:9090/api/v1/consulta";
    return this.httpClient.get<Consulta[]>(`${url}`);
  }

  obtenerIdPedido() : Observable<number> {
    var url = "http://localhost:9090/api/v1/idpedido";
    return this.httpClient.get<number>(`${url}`); 
  }

  obtenerPedidos() : Observable<Pedido[]> {
    var baseUrl = "http://localhost:9090/api/v1/pedidos";
    return this.httpClient.get<Pedido[]>(`${baseUrl}`);
  }

  obtenerCategorias() : Observable<Categoria[]>{
    var url = "http://localhost:9090/api/v1/categorias";
    return this.httpClient.get<Categoria[]>(`${url}`);
  }

  obtenerEstado() : Observable<Estado[]> {
    var url = "http://localhost:9090/api/v1/estados";
    return this.httpClient.get<Estado[]>(`${url}`);
  }

  regPedido(pedido:Pedido) : Observable<Object> {
    var url = "http://localhost:9090/api/v1/registrar";
    return this.httpClient.post(`${url}`,pedido);
  }

  buscarPedido(idpedido:number) : Observable<Pedido> {
    var url = "http://localhost:9090/api/v1/pedido";
    return this.httpClient.get<Pedido>(`${url}/${idpedido}`);
  }

  actualizarPedido(idpedido:number,pedido:Pedido) : Observable<Object> {
    var url = "http://localhost:9090/api/v1/actualizar";
    return this.httpClient.put(`${url}/${idpedido}`,pedido);
  }

  eliminarPedido(idpedido:number) : Observable<Object> {
    var url = "http://localhost:9090/api/v1/eliminar";
    return this.httpClient.delete(`${url}/${idpedido}`);
  }
}
