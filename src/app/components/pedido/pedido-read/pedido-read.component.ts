import{ Pedido } from './../pedido.model';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from './../pedido.service';

@Component({
  selector: 'app-pedido-read',
  templateUrl: './pedido-read.component.html',
  styleUrls: ['./pedido-read.component.css']
})
export class PedidoReadComponent implements OnInit {

  pedidos: Pedido[]

  displayedColumns = ['id', 'dataPedido', 'statusPedido', 'usuario_Id', 'itemsPedido', 'pagamento', 'total', 'action']

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.read().subscribe(pedidos => {
      this.pedidos = pedidos
      console.log(pedidos)
    })
  }
}
