import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { item } from '../produto/produto.component';
import { pedido } from '../pedido/pedido.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['../app.component.css']
})
export class ClienteComponent implements OnInit {
   public model:cliente = {nome: " ", endereco: "", entrega: false};  
   @Input() nome:string="";
   @Input() endereco:string="";
   @Input() entrega:string="";

   @Output() submitEvent = new EventEmitter();



  constructor() { }
  
  ngOnInit(): void {
    this.model.nome = this.nome;
    this.model.endereco = this.endereco;
    this.model.entrega = true;
  }
  
  onEnviar(){
    this.submitEvent.emit(this.model);
  }
}

export interface cliente {
  nome: string,
  endereco: string,
  entrega: boolean,
}