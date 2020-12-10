export class Entrega{
    tarifado: boolean;
    constructor(tarifaEntrega: boolean) {
      this.tarifado = tarifaEntrega;
    }
}

export interface IEntrega{
    tarifado: boolean,
}

