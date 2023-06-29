import * as yup from 'yup';

export default function validationsAndObjects() {
    const Cliente = {
        numeroDocumento: "",
        tipoDocumento: "",
        nome: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: ""
    }

    const ClienteType = {
        numeroDocumento: "text",
        tipoDocumento: "text",
        nome: "text",
        logradouro: "text",
        numero: "text",
        bairro: "text",
        cidade: "text",
        uf: "text"

    }

    const Condutor = {
        nome: "",
        numeroHabilitacao: "",
        categoriaHabilitacao: "",
        vencimentoHabilitacao: ""
    }

    const CondutorType = {
        nome: "text",
        numeroHabilitacao: "text",
        categoriaHabilitacao: "text",
        vencimentoHabilitacao: "datetime-local"
    }

    const Veiculo = {
        placa: "",
        marcaModelo: "",
        anoFabricacao: undefined,
        kmAtual: undefined
    }

    const VeiculoType = {
        placa: "text",
        marcaModelo: "text",
        anoFabricacao: 'number',
        kmAtual: 'number'
    }

    const Deslocamento = {
        kmInicial: undefined,
        inicioDeslocamento: "",
        checkList: "",
        motivo: "",
        observacao: "",
        idCondutor: undefined,
        idVeiculo: undefined,
        idCliente: undefined
    }

    const DeslocamentoType = {
        kmInicial: 'number',
        inicioDeslocamento: "datetime-local",
        checkList: "text",
        motivo: "text",
        observacao: "text",
        idCondutor: 'number',
        idVeiculo: 'number',
        idCliente: 'number'
    }

    const schemaRegisterClient = yup.object().shape({
        numeroDocumento: yup.string().required('Preencha este campo'),
        tipoDocumento: yup.string().required('Preencha este campo'),
        nome: yup.string().required('Preencha este campo'),
        logradouro: yup.string().required('Preencha este campo'),
        numero: yup.string().required('Preencha este campo'),
        bairro: yup.string().required('Preencha este campo'),
        cidade: yup.string().required('Preencha este campo'),
        uf: yup.string().required('Preencha este campo')
    })

    const schemaRegisterCondutor = yup.object().shape({
        nome: yup.string().required('Preencha este campo'),
        numeroHabilitacao: yup.string().required('Preencha este campo'),
        categoriaHabilitacao: yup.string().required('Preencha este campo'),
        vencimentoHabilitacao: yup.string().required('Preencha este campo')
    })

    const schemaRegisterDeslocamento = yup.object().shape({
        kmInicial: yup.number().required('Preencha este campo'),
        inicioDeslocamento: yup.string().required('Preencha este campo'),
        checkList: yup.string().required('Preencha este campo'),
        motivo: yup.string().required('Preencha este campo'),
        observacao: yup.string().required('Preencha este campo'),
        idCondutor: yup.number().required('Preencha este campo'),
        idVeiculo: yup.number().required('Preencha este campo'),
        idCliente: yup.number().required('Preencha este campo')
    })

    const schemaRegisterVeiculo = yup.object().shape({
        placa: yup.string().required('Preencha este campo'),
        marcaModelo: yup.string().required('Preencha este campo'),
        anoFabricacao: yup.number().required('Preencha este campo'),
        kmAtual: yup.number().required('Preencha este campo')
    })

    let initialValues = [Cliente, Condutor, Veiculo, Deslocamento]
    let arraySchema = [schemaRegisterClient, schemaRegisterCondutor, schemaRegisterVeiculo, schemaRegisterDeslocamento,]
    let arrayTypesInputs = [ClienteType, CondutorType, VeiculoType, DeslocamentoType]

    return {
        arraySchema,
        initialValues,
        arrayTypesInputs
    }
}