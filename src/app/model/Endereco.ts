export class Endereco{
    rua: string;
    numero: number;
    bairro: string;
    cep: number;
    constructor(ruaEndereco: string, numeroEndereco: number, bairroEndereco: string, cepEndereco: number) {
      this.rua = ruaEndereco;
      this.numero = numeroEndereco;
      this.bairro = bairroEndereco;
      this.cep = cepEndereco;
    }
  
}

export interface Endereco{
    rua: string,
    numero: number,
    bairro: string,
    cep: number,
}