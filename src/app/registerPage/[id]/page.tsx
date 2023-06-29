"use client"
import './style.scss'
import { Formik, Form } from 'formik';
import Field from '../../../components/Field';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react'
import Grow from '@mui/material/Grow';
import axios from 'axios';
import validationsAndObjects from './validationsAndObjects';
import Swal from 'sweetalert2';

export default function PageRegister({ params }: { params: { id: number } }) {
    const [namesObject, setNamesObject] = useState<string[]>([])
    const { arraySchema, initialValues, arrayTypesInputs } = validationsAndObjects()
    const listNamesApi = ['Cliente', 'Condutor', 'Veiculo', 'Deslocamento/IniciarDeslocamento']
    const typesInputs = arrayTypesInputs[params.id]

    function submit(values: Iclient | Icondutor | Iveiculo | Ideslocamento) {
        axios.post(`https://api-deslocamento.herokuapp.com/api/v1/${listNamesApi[params.id]}`, values)
            .then(response => {
                console.log(response.data);
                Swal.fire(
                    'Hmmm, tudo certo!',
                    'Item adicionado com sucesso!',
                    'success'
                )
                window.location.href = `/cardPage/${params.id}`
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Reveja os valores preenchidos no input...'
                })
            });
    }

    useEffect(() => {
        if (params.id >= 0 && params.id < 4) {
            let namesObject = Object.keys(initialValues[params.id])
            setNamesObject(namesObject)
        }

        else { window.location.href = "/404" }
    }, [])

    return (
        <section className='containerRegister'>
            {namesObject.length > 0 && (
                <>
                    <h1>Cadastrar {listNamesApi[params.id].split('/')[0]}</h1>
                    <Grow
                        in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(true ? { timeout: 500 } : {})}
                    >
                        <div>
                            <Formik
                                onSubmit={submit}
                                initialValues={initialValues[params.id]}
                                validateOnChange={true}
                                validationSchema={arraySchema[params.id]}
                                render={({ values, errors, handleChange }) => {
                                    return (
                                        <Form>
                                            <section>
                                                <div className='groupInput'>
                                                    {namesObject &&
                                                        namesObject.map((item: string) => (
                                                            <Field
                                                                key={(item + listNamesApi[params.id])}
                                                                type={typesInputs[item as keyof typeof typesInputs]}
                                                                erro={errors[item as keyof typeof errors]}
                                                                id={item}
                                                                label={item}
                                                                name={item} />
                                                        ))}
                                                </div>
                                            </section>
                                            <button
                                                disabled={(Object.keys(errors).length === 0 ? false : true)}
                                                type='submit'
                                                className='buttonSubmit'
                                            >
                                                Enviar
                                            </button>
                                        </Form>
                                    )
                                }}
                            >
                            </Formik >
                        </div>
                    </Grow>
                </>
            )}
        </section >
    )
}
