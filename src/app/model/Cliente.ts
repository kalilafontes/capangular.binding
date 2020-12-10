import { Endereco } from "./Endereco";


export class Cliente extends Endereco{
    nome: string;
    preco: number;
    entrega: boolean;
    constructor(nomeProduto: string, precoProduto: number, quantidadeProduto: number,
                 ruaEndereco: string, numeroEndereco: number, bairroEndereco: string, cepEndereco: number) {
      super(ruaEndereco, numeroEndereco, bairroEndereco, cepEndereco);
      this.nome = nomeProduto;
      this.preco = precoProduto;
      this.entrega = true;
    } 


}

export interface ICliente{
    nome: string,
    endereco: string,
    entrega: boolean,
}

