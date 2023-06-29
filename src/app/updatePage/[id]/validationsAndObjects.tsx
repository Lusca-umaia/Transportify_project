import * as yup from 'yup';

export default function validationsAndObjects() {
    const Cliente = {
        "nome": "",
        "logradouro": "",
        "numero": "",
        "bairro": "",
        "cidade": "",
        "uf": ""
    }

    const ClienteType = {
        "nome": "text",
        "logradouro": "text",
        "numero": "text",
        "bairro": "text",
        "cidade": "text",
        "uf": "text"
    }

    const Condutor = {
        "categoriaHabilitacao": "",
        "vencimentoHabilitacao": ""
    }

    const CondutorType = {
        "categoriaHabilitacao": "text",
        "vencimentoHabilitacao": "datetime-local"
    }

    const Veiculo = {
        "marcaModelo": "",
        "anoFabricacao": undefined,
        "kmAtual": undefined
    }

    const VeiculoType = {
        "marcaModelo": "text",
        "anoFabricacao": "number",
        "kmAtual": "number"
    }

    const Deslocamento = {
        "kmFinal": undefined,
        "fimDeslocamento": "",
        "observacao": ""
    }

    const DeslocamentoType = {
        "kmFinal": "number",
        "fimDeslocamento": "datetime-local",
        "observacao": "text"
    }

    const schemaRegisterClient = yup.object().shape({
        "nome": yup.string().required('Preencha este campo'),
        "logradouro": yup.string().required('Preencha este campo'),
        "numero": yup.string().required('Preencha este campo'),
        "bairro": yup.string().required('Preencha este campo'),
        "cidade": yup.string().required('Preencha este campo'),
        "uf": yup.string().required('Preencha este campo')
    })

    const schemaRegisterCondutor = yup.object().shape({
        "categoriaHabilitacao": yup.string().required('Preencha este campo'),
        "vencimentoHabilitacao": yup.string().required('Preencha este campo'),
    })

    const schemaRegisterDeslocamento = yup.object().shape({
        "kmFinal": yup.number().required('Preencha este campo'),
        "fimDeslocamento": yup.string().required('Preencha este campo'),
        "observacao": yup.string().required('Preencha este campo')
    })

    const schemaRegisterVeiculo = yup.object().shape({
        "marcaModelo": yup.string().required('Preencha este campo'),
        "anoFabricacao": yup.number().required('Preencha este campo'),
        "kmAtual": yup.number().required('Preencha este campo')
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