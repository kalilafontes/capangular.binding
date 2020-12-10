import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { item } from '../produto/produto.component';
//import { cliente } from '../cliente/cliente.component';
import { Cliente, ICliente} from 'src/app/model/Cliente';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['../app.component.css']
})
export class PedidoComponent implements OnInit {

  public listProdutos: Array<item> = new Array<item>();
  public itens: Array<item> = new Array<item>();
  model:ICliente = {nome: " ", endereco: "", entrega: false};  
  pedido:pedido = {numero:1, valor:0, entrega: false, itens: new Array<item>() };  
  pedidoConcluido = false;  

  //@Output() onSubmit = new EventEmitter<any>();

  constructor() { }

  somaProdutos(itens: Array<item>): number {
    let somaProdutos = 0;

      itens.forEach(item => {
        somaProdutos += item.preco*item.quantidade;
    });
    return somaProdutos;
  }


  ngOnInit(): void {
    
    
  }


}

export interface pedido {
  numero: number,
  valor: number,
  itens:  Array<item>,
  entrega: boolean
}
