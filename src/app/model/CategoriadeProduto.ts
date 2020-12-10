
export class Categoria{

    nome: string;
    produtos: Array<any>;
    constructor(nomeProduto: string, produtos: Array<any>) {
      this.nome = nomeProduto;
      this.produtos = produtos;
    }
    
}

export interface ICategoria{
    nome: string,
    produtos: Array<any>;
}