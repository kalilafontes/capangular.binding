import { Component, Input, OnInit } from '@angular/core';
import { Produto, IProduto } from 'src/app/model/Produto';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['../app.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() itens: Array<item> = [];
  
  constructor() { }
  
  ngOnInit(): void {
    let produtos = [
      {
        id: 1,
        categoria: "Hardware",
        descricao: "Teclado Gamer",
        preco: 300.00,
        quantidade:0
      }, 
      {
        id: 2,
        categoria: "Hardware",
        descricao: "Mouse Sem Fio",
        preco: 100.00,
        quantidade:0
      }, 
      {
        id: 3,
        categoria: "Software",
        descricao: "Super Defender",
        preco: 200.00,
        quantidade:0
      }
    ];

    for (let produto of produtos){
      this.itens.push(produto);
    } 
  }   
}
export interface item {
  descricao: string,
  categoria: string,
  preco: number,
  id: number,
  quantidade: number,
}