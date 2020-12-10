import { Component, OnInit, Input } from '@angular/core';
import { item } from './produto/produto.component';
import { Cliente, ICliente} from 'src/app/model/Cliente';
import { Endereco, IEndereco} from 'src/app/model/Endereco';
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
  model:ICliente = {nome: "", endereco: "", entrega: false};   
  endereco:IEndereco = {rua: "", numero: 0,bairro: "", cep:0 }

  somaProdutos(itens: Array<item>): number {
    let somaProdutos = 0;

      itens.forEach(item => {
        somaProdutos += item.preco*item.quantidade;
    });
    return somaProdutos;
  } 

  onSubmit() { 
    console.log(this.model);
 
  }

  onSubmitEndereco(event: any) { 
    console.log(event);
 
  }

  ngOnInit(): void { 
    
  }

}