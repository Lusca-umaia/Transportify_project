interface Iclient {
    id?: number,
    numeroDocumento?: string,
    tipoDocumento?: string,
    nome?: string,
    logradouro?: string,
    numero?: string,
    bairro?: string,
    cidade?: string,
    uf?: string
}

interface Iveiculo {
    id?: number,
    placa?: string,
    marcaModelo?: string,
    anoFabricacao?: number,
    kmAtual?: number
}

interface Icondutor {
    id?: number,
    nome?: string,
    numeroHabilitacao?: string,
    catergoriaHabilitacao?: string,
    vencimentoHabilitacao?: string
}

interface Ideslocamento {
    id?: number,
    kmInicial?: number,
    kmFinal?: number,
    inicioDeslocamento?: string,
    fimDeslocamento?: string,
    checkList?: string,
    motivo?: string,
    observacao?: string,
    idCondutor?: number,
    idVeiculo?: number,
    idCliente?: number
}
