import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fornecedor} from 'src/app/model/fornecedor.model';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['../app.component.css']
})
export class FornecedorComponent implements OnInit {
  fornecedor:Fornecedor = {nome:"",cnpj:"", endereco:""};  
  error:boolean = false;
  errorDesc:string = "";
  constructor() { }

  fornecedores: Array<Fornecedor> = [
    { nome: "John", endereco: "Rua ABC", cnpj: "12345678", },
    { nome: "Mary", endereco: "Rua XPTO", cnpj: "09876543" },
    { nome: "Laura", endereco: "Rua Capgemini", cnpj: "54654645" }
  ];

  
  onSubmitFornecedor(form: NgForm){
    console.log(form.value)
   // let nomeForn = form.value.nome;

    if (form.value.nome == "" || form.value.endereco == "" || form.value.cnpj == "") {
      this.error = true;
      this.errorDesc = "Preencha os campos"
    } else{
      this.error = false;
      alert("Fornecedor Cadastrado!");
    }
    
  }

  ngOnInit(): void {
  }

}
