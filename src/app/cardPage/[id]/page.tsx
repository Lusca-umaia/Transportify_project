'use client'
import './style.scss'
import Card from '../../../components/Card/index'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Grow from '@mui/material/Grow';
import { CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function CardPage({ params }: { params: { id: number } }) {
    const [data, setData] = useState<Iclient[] | Iveiculo[] | Ideslocamento[] | Icondutor[]>([])
    const [loading, setLoading] = useState(true)
    const listNamesApi = ['Cliente', 'Condutor', 'Veiculo', 'Deslocamento']
    const Titles = ['Clientes', 'Condutores', 'Veículos', 'Deslocamentos']

    async function getData() {
        axios.get(`https://api-deslocamento.herokuapp.com/api/v1/${listNamesApi[params.id]}`)
            .then(response => {
                setData(response.data)
                setLoading(false)
                response.data.length == 0 ? Swal.fire(`Ainda não há ${Titles[params.id]} cadastrados :(`, 'Cadastre para usufruir da plataforma!!') : ''
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Os dados não foram carregador corretamente...'
                })
                setLoading(false)
            });
    }

    async function deleteItem(id: number) {
        axios({
            method: 'delete',
            url: `https://api-deslocamento.herokuapp.com/api/v1/${listNamesApi[params.id]}/${id}`,
            data: {
                'id': id
            }
        })
            .then(response => {
                console.log(response.data);
                setLoading(true)
                Swal.fire(
                    'Hmmm, tudo certo!',
                    'Item removido com sucesso!',
                    'success'
                )
                getData()
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'O elemento não foi deletado, reinicie a página e tente novamente...'
                })
            });
    }

    useEffect(() => {
        if (params.id >= 0 && params.id < 4) { getData() }

        else { window.location.href = "/404" }
    }, [])

    return (
        <main>
            <div className='header'>
                <h1>{Titles[params.id]}</h1>
                <Link href={`/registerPage/${params.id}`}><button className='buttonHeader'>Cadastrar {listNamesApi[params.id]}<AddIcon /></button></Link>
            </div>
            {loading ? (
                <CircularProgress color='inherit' />
            ) : (
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(true ? { timeout: 500 } : {})}
                >
                    <section className='sectionCards'>
                        {data &&
                            data.length > 0 &&
                            data.map((item: Iclient | Iveiculo | Ideslocamento | Icondutor, index: number) => (
                                <Card
                                    key={(item.id + listNamesApi[params.id]).toString()}
                                    objectData={item}
                                    index={index}
                                    deleteItem={deleteItem}></Card>
                            ))}
                    </section>
                </Grow>
            )}
            <>
                {data.length == 0 && !loading && (
                    <p className='notElements'>Ainda não há {Titles[params.id]} cadastrados :(</p>
                )}
            </>
        </main >
    )
}

