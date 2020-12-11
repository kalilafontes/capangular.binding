import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['../app.component.css']
})
export class ProdutoComponent implements OnInit {
  itens: Array<item> = new Array<item>();
  listProdutos: Array<item> = new Array<item>();
  error:boolean = false;
  errorDesc:string = "";

  constructor(private router: Router) { }
  
  onSend(){
    this.listProdutos = this.itens.filter((item) => { return item.quantidade > 0; });

    console.log(this.listProdutos);

    if(!this.listProdutos[0]){
      this.error = true;
      this.errorDesc = "Escolha pelo menos um produto"
    } else{
      this.error = false;
      this.router.navigate(['/pedido']);
    }
  }

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