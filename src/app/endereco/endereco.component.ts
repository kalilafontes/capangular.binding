import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['../app.component.css']
})
export class EnderecoComponent implements OnInit {
  endereco:endereco = {rua: " ", numero: 0, bairro: " ", cep: 0,};  
  @Input() rua:string="";
  @Input() numero:number=0;
  @Input() bairro:string="";
  @Input() cep:number=0;

  constructor() { }

  ngOnInit(): void {
    this.endereco.rua = this.rua;
    this.endereco.numero = this.numero;
    this.endereco.bairro = this.bairro;
    this.endereco.cep = this.cep;
  }

}

export interface endereco{
  rua: string,
  numero: number,
  bairro: string,
  cep: number,
}