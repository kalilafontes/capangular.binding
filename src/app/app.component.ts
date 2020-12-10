import { Component, OnInit, Input } from '@angular/core';
import { item } from './produto/produto.component';
import { cliente } from './cliente/cliente.component';
import { pedido } from './pedido/pedido.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular2';
  constructor() { }
 
  public listProdutos: Array<item> = new Array<item>();
  itens: Array<item> = [];
  pedido:pedido = {numero:1, valor:0, entrega: false, itens: new Array<item>() };  
  pedidoConcluido = false;  
  model:cliente = {nome: "", endereco: "", entrega: false};   

  somaProdutos(itens: Array<item>): number {
    let somaProdutos = 0;

      itens.forEach(item => {
        somaProdutos += item.preco*item.quantidade;
    });
    return somaProdutos;
  } 

  onSubmit() { 
    console.log(this.model);
    /* console.log(this.itens);
    this.listProdutos = this.itens.filter((item) => { return item.quantidade > 0; });
    
    this.pedido.valor = this.somaProdutos(this.listProdutos)*1.08;
    
    if(this.model.entrega){
      this.pedido.valor = this.pedido.valor*1.15;
    }
   
    this.pedido.valor = Number.parseFloat(this.pedido.valor.toFixed(2));
    
    if(this.pedido.valor > 0){
      this.pedidoConcluido = true;
    } */
  }

  ngOnInit(): void { 
    
  }

}