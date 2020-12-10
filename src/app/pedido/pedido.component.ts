import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { item } from '../produto/produto.component';
import { cliente } from '../cliente/cliente.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['../app.component.css']
})
export class PedidoComponent implements OnInit {

  public listProdutos: Array<item> = new Array<item>();
  public itens: Array<item> = new Array<item>();
  model:cliente = {nome: " ", endereco: "", entrega: false};  
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

  onSubmit() { 
    console.log(this.model);
    console.log(this.itens);
    this.listProdutos = this.itens.filter((item) => { return item.quantidade > 0; });
    
    this.pedido.valor = this.somaProdutos(this.listProdutos)*1.08;
    
    if(this.model.entrega){
      this.pedido.valor = this.pedido.valor*1.15;
    }
   
    this.pedido.valor = Number.parseFloat(this.pedido.valor.toFixed(2));

    
    if(this.pedido.valor > 0){
      this.pedidoConcluido = true;
    }
    
  
  }

}

export interface pedido {
  numero: number,
  valor: number,
  itens:  Array<item>,
  entrega: boolean
}
