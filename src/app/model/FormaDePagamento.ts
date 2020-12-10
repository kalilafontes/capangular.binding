export class FormaDePagamento{
    tipo: number;
    parcelamento: number;
    constructor(tipoPagamento: number, parcelamentoPagamento: number) {
        this.tipo = tipoPagamento;
        this.parcelamento = parcelamentoPagamento;
    }
    
}

export interface FormaDePagamento{
    tipo: number,
    parcelamento: number,
}