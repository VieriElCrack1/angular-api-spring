import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria';
import { Estado } from '../estado';

@Component({
  selector: 'app-actualizar-pedido',
  templateUrl: './actualizar-pedido.component.html',
  styleUrl: './actualizar-pedido.component.css'
})
export class ActualizarPedidoComponent implements OnInit{
  idpedido:number;
  pedidos:Pedido = new Pedido();

  categoria:Categoria[];
  estado:Estado[];
  
  constructor(private service : PedidoService, private router : Router, private route : ActivatedRoute) {}
  
  ngOnInit(): void {
    this.categorias();
    this.estados();
    this.idpedido = this.route.snapshot.params['idpedido'];
    this.service.buscarPedido(this.idpedido).subscribe(data => {
      this.pedidos = data;
    });
  }

  onSubmit() {
    this.service.actualizarPedido(this.idpedido, this.pedidos).subscribe(data => {
      this.irAlListadoPedido();
    }, error => console.log(error));
  }

  irAlListadoPedido() {
    this.router.navigate(['/pedidos']);
  }

  categorias() {
    this.service.obtenerCategorias().subscribe(data => {
      this.categoria = data;
    });
  }

  estados() {
    this.service.obtenerEstado().subscribe(data => {
      this.estado = data;
    });
  }
}
