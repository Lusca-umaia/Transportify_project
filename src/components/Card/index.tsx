'use client'
import './style.scss'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CardComponent({ objectData, index, deleteItem }: { objectData: Iclient | Icondutor | Iveiculo | Ideslocamento, index: number, deleteItem: (id: number) => void }) {
    const [namesObject, setNamesObject] = useState<string[]>([])
    // const listIcons = [<AccountCircleIcon />, <AirlineSeatReclineNormalIcon />, <DirectionsCarIcon />, <ContentPasteSearchIcon />]
    const router = useParams()

    useEffect(() => {
        let names = Object.keys(objectData)
        setNamesObject(names)
    }, [])


    return (
        <Card sx={{ maxWidth: '380px' }} className='card' style={{overflow: 'visible'}}>
            <CardContent className='card_Content'>
                <Typography gutterBottom variant="h5" component="div" className='inforTitle'>
                    Informações Gerais
                    {/* {listIcons[parseInt(router.id)]} */}
                </Typography>
                <div className='informations'>
                    {namesObject.length > 0 &&
                        namesObject.map((item: string, index: number) => (
                            <React.Fragment key={`key${namesObject[index]}`}>
                                <div>
                                    {item != 'id' && (
                                        <div>
                                            <div className='groupInfor'>
                                                <label>{item.split(/(?=[A-Z])/)[0]} {item.split(/(?=[A-Z])/)[1] ? item.split(/(?=[A-Z])/)[1] : ''} -</label>
                                                <p>{objectData[item as keyof typeof objectData]}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </React.Fragment>
                        ))}
                </div>
            </CardContent>
            <CardActions className='card_Actions'>
                <Link href={`/updatePage/${router.id}-${objectData.id}`} style={{ textDecoration: 'none' }}>
                    <button className='buttonCard'>
                        <EditIcon />
                        Editar
                    </button>
                </Link>
                <button className='buttonCard' onClick={() => objectData.id ? deleteItem(objectData.id) : ''}>
                    <DeleteIcon />
                    Deletar
                </button>
            </CardActions>
            <div className='index'>
                <span>{index + 1}</span>
            </div>
        </Card>
    );
}