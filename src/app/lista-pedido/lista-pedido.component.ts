import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';
import { Router } from '@angular/router';
import { Consulta } from '../consulta';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrl: './lista-pedido.component.css'
})
export class ListaPedidoComponent implements OnInit{
  pedidos:Pedido[];
  consulta:Consulta[];

  constructor(private service:PedidoService, private router : Router) {}

  ngOnInit(): void {
    this.listaPedios();
    this.listaConsulta();
  }

  listaConsulta() {
    this.service.obtenerConsulta().subscribe(data => {
      this.consulta = data;
    });
  }

  listaPedios() {
    this.service.obtenerPedidos().subscribe(data => {
      this.pedidos = data;
    });
  }
 
  irVistaInsertar() {
    this.router.navigate(['registrar-pedido']);    
  }

  actualizarPedido(idpedido: number) {
    this.router.navigate(['actualizar-pedido',idpedido]);
  }

  eliminarPedido(idpedido: number) {
      this.service.eliminarPedido(idpedido).subscribe(data => {
        this.listaConsulta();
      });
  }
}
