import { Component, OnInit } from '@angular/core';
import { FormaDePagamento } from '../model/formaDePagamento.model';

@Component({
  selector: 'app-formadepagamento',
  templateUrl: './formadepagamento.component.html',
  styleUrls: ['../app.component.css']
})
export class FormadepagamentoComponent implements OnInit {
  pagamento:FormaDePagamento = {}
  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    console.log('pagamento')
  }

}
