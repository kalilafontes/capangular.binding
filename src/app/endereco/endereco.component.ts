import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Endereco } from '../model/endereco.model';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['../app.component.css']
})
export class EnderecoComponent implements OnInit {
  endereco:Endereco = {rua: " ", numero: 0, bairro: " ", cep: 0,};   

  @Output('salvar') submitEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {    
  }

  onEnviar(){
    this.submitEvent.emit(this.endereco);
  }

}
