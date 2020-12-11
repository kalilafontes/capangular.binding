import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Cliente} from 'src/app/model/cliente.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from '../model/endereco.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['../app.component.css']
})
export class ClienteComponent implements OnInit {
  model:Cliente = {nome: " ", telefone: "", entrega: false};  
  endereco:Endereco = {}
  error:boolean = false;

  constructor(private router: Router) { }
  
  onSend(event: any){
    console.log(this.model);
    console.log(event);
    if (this.model.nome == "" || event.rua ==  " " ) {
      this.error = true;      
      alert("Preencha os campos");
    } 
    
     else{
      this.error = false;
      this.router.navigate(['/produto']);
    }
  }

  ngOnInit(): void {

  }

}
