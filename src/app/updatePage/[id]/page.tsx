'use client'
import './style.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grow from '@mui/material/Grow';
import EditIcon from '@mui/icons-material/Edit';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import FormComponent from './FormComponent/index'
export default function UpdatePage() {
    const [loading, setLoading] = useState<boolean>(true)
    const [edit, setEdit] = useState<boolean>(false)
    const [data, setData] = useState<Iclient | Icondutor | Iveiculo | Ideslocamento>({})
    const [namesObject, setNamesObject] = useState<string[]>([])
    const namesGet = ['Cliente/', 'Condutor/', 'Veiculo/', 'Deslocamento/']
    const params = useParams()

    async function getData() {
        axios.get(`https://api-deslocamento.herokuapp.com/api/v1/${namesGet[parseInt(params.id.split('-')[0])]}${params.id.split('-')[1]}`)
            .then(response => {
                console.log(response.data)
                setData(response.data)
                getNamesObject(response.data)
            })
            .catch(error => {
                console.log(error);
                window.location.href = `/cardPage/${params.id.split('-')[0]}`
                setLoading(false)
            });
    }

    function getNamesObject(object: Iclient | Icondutor | Iveiculo | Ideslocamento) {
        let names = Object.keys(object)

        setNamesObject(names)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='containerUpdate'>
            <div className='groupHeader'>
                <h1>{namesGet[parseInt(params.id.split('-')[0])].split('/')[0]}</h1>
                <button disabled={loading} onClick={() => setEdit(!edit)}>
                    {!edit ? (
                        <>
                            Editar {namesGet[parseInt(params.id.split('-')[0])].split('/')[0]} <EditIcon />
                        </>

                    ) : 'Ver Informações'}
                </button>
            </div>
            {!edit ? (
                <>
                    {!loading ?
                        <Grow
                            in={true}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(true ? { timeout: 500 } : {})}
                        >
                            <div className='groupInfors'>
                                <h2>Informações Gerais</h2>
                                <>
                                    {namesObject.length > 0 && namesObject.map((item: string) => (
                                        <>
                                            {item != 'id' && (
                                                <div className='boxInfors' key={item}>
                                                    <label>
                                                        {item.split(/(?=[A-Z])/)[0]}{item.split(/(?=[A-Z])/)[1] ? ' ' + item.split(/(?=[A-Z])/)[1] : ''}:
                                                    </label>
                                                    <p>{data[item as keyof typeof data]}</p>
                                                </div>
                                            )}
                                        </>
                                    ))}
                                </>
                            </div>
                        </Grow>
                        : <div className='loading'><CircularProgress color='inherit' /></div>}

                </>
            ) : <FormComponent idElement={params.id.split('-')[1]} />}
        </div>
    )
}