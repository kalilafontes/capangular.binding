import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['../app.component.css']
})
export class EnderecoComponent implements OnInit {
  endereco:endereco = {rua: " ", numero: 0, bairro: " ", cep: 0,};  
  constructor() { }

  ngOnInit(): void {
  }

}

export interface endereco{
  rua: string,
  numero: number,
  bairro: string,
  cep: number,
}