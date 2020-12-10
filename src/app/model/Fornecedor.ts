import { Endereco } from "./Endereco";

export class Fornecedor extends Endereco{
    
    codigo: number;
    nome: string;
    cnpj: number;

    constructor(codigoFornecedor: number, nomeFornecedor: string, cnpjFornecedor: number,
        ruaEndereco: string, numeroEndereco: number, bairroEndereco: string, cepEndereco: number) {
            
        super(ruaEndereco, numeroEndereco, bairroEndereco, cepEndereco);
        this.codigo = codigoFornecedor;
        this.nome = nomeFornecedor;
        this.cnpj = cnpjFornecedor;
    }
    
}

export interface IFornecedor{
    codigo: number,
    nome: string,
    cnpj: number,
}