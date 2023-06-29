"use client"
import './style.scss'
import { Formik, Form } from 'formik';
import Field from '../../../../components/Field';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react'
import Grow from '@mui/material/Grow';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Swal from 'sweetalert2';
import validationsAndObjects from '../validationsAndObjects';

export default function UpdateComponent({ idElement }: { idElement: string }) {
    const listNamesApi = [`Cliente/${idElement}`, `Condutor/${idElement}`, `Veiculo/${idElement}`, `Deslocamento/${idElement}/EncerrarDeslocamento`]
    const [namesObject, setNamesObject] = useState<string[]>([])
    const { arraySchema, initialValues, arrayTypesInputs } = validationsAndObjects()
    const params = useParams()
    const id = parseInt(params.id.split('-')[0])
    const typesInputs = arrayTypesInputs[id]

    function submit(values: Iclient | Icondutor | Iveiculo | Ideslocamento) {
        values.id = parseInt(idElement)
        axios.put(`https://api-deslocamento.herokuapp.com/api/v1/${listNamesApi[id]}`, values)
            .then(response => {
                console.log(response.data);
                window.location.href = `/cardPage/${id}`
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Coloque valores semânticas, conforme as exigências da API...!'
                })
            });
    }


    useEffect(() => {
        if (id >= 0 && id < 4) {
            let namesObject = Object.keys(initialValues[id])
            setNamesObject(namesObject)
        }

        else { window.location.href = "/404" }
    }, [])

    return (
        <section className='containerRegister'>
            {namesObject.length > 0 && (
                <>
                    <h2>Atualizar {listNamesApi[id].split('/')[0]}</h2>
                    <Grow
                        in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(true ? { timeout: 500 } : {})}
                    >
                        <div>
                            <Formik
                                onSubmit={submit}
                                initialValues={initialValues[id]}
                                validateOnChange={true}
                                validationSchema={arraySchema[id]}
                                render={({ values, errors, handleChange }) => {
                                    return (
                                        <Form>
                                            <section>
                                                <div className='groupInput'>
                                                    {namesObject &&
                                                        namesObject.map((item: string) => (
                                                            <Field
                                                                key={(item + listNamesApi[id])}
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
