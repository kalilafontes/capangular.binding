import { Endereco } from "./Endereco";


export class Cliente extends Endereco{
    nome: string;
    preco: number;
    quantidade: number;
    constructor(nomeProduto: string, precoProduto: number, quantidadeProduto: number,
                 ruaEndereco: string, numeroEndereco: number, bairroEndereco: string, cepEndereco: number) {
      super(ruaEndereco, numeroEndereco, bairroEndereco, cepEndereco);
      this.nome = nomeProduto;
      this.preco = precoProduto;
      this.quantidade = quantidadeProduto;
    } 


}

export interface ICliente{
    nome: string,
    pedido: number,
}

