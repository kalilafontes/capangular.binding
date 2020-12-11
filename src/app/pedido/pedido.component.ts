import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { item } from '../produto/produto.component';
//import { cliente } from '../cliente/cliente.component';
import { Cliente} from 'src/app/model/cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['../app.component.css']
})
export class PedidoComponent implements OnInit {

  public listProdutos: Array<item> = new Array<item>();
  public itens: Array<item> = new Array<item>();  
  model:Cliente = {nome: " ", telefone: "", entrega: false};  
  pedido:pedido = {numero:1, valor:0, entrega: false, itens: new Array<item>() };  
  pedidoConcluido = false;  

  constructor(private router: Router) { }

  somaProdutos(itens: Array<item>): number {
    let somaProdutos = 0;

      itens.forEach(item => {
        somaProdutos += item.preco*item.quantidade;
    });
    return somaProdutos;
  }

  onSend(){
    
    this.router.navigate(['/pagamento']);

  }

  ngOnInit(): void {
    this.itens;
  }


}

export interface pedido {
  numero: number,
  valor: number,
  itens:  Array<item>,
  entrega: boolean
}
