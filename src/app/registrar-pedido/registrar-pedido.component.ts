import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Router } from '@angular/router';
import { Pedido } from '../pedido';
import { Categoria } from '../categoria';
import { Estado } from '../estado';

@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrl: './registrar-pedido.component.css'
})
export class RegistrarPedidoComponent implements OnInit{
  pedidos:Pedido = new Pedido();
  categoria:Categoria[];
  estado:Estado[];

  generarID:number;

  constructor(private service:PedidoService, private router:Router) {}

  irAlListadoPedido() {
    this.router.navigate(['/pedidos']);
  }

  onSumit() {
    this.regPedidoHecho();
  }

  regPedidoHecho() {
    this.service.regPedido(this.pedidos).subscribe(data => {
      this.irAlListadoPedido();
    });
  }

  ngOnInit(): void {
    this.obtCategoria();
    this.obtEstado()
    this.obtId();
    this.pedidos.idcategoria = 0; // Establecer el valor predeterminado para idcategoria
    this.pedidos.idestado = 0;
  }

  obtCategoria() {
    this.service.obtenerCategorias().subscribe(data => {
      this.categoria = data;
    });
  }

  obtEstado() {
    this.service.obtenerEstado().subscribe(data => {
      this.estado = data;
    });
  }

  obtId() {
    this.service.obtenerIdPedido().subscribe(data => {
      this.generarID = data;
      this.pedidos.idpedido = this.generarID; // Asignar el ID al campo idpedido del objeto pedidos
    });
  }
}
