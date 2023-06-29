'use client'
import './style.scss'

import Logo from '../../assets/logoTwo.png'
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DashboardIcon from '@mui/icons-material/Dashboard';

import Link from 'next/link';
import { useState } from 'react'
import { useParams } from 'next/navigation'

export default function Navbar() {
    const [effectButton, setEffectButton] = useState<boolean>(false)
    const params = useParams()
    return (
        <nav id={effectButton ? 'Nav_active' : ''}>
            <div className='groupHeader'>
                <span>Transportify</span>
                <div className='menuButton'>
                    <div onClick={() => setEffectButton(!effectButton)}>
                        <ArrowBackIosNewIcon id={effectButton ? 'Arrow_active' : ''} />
                    </div>
                </div>
                <div className='groupLinks'>
                    <ul>
                        <Link href={'/'}>
                            <div id={params.id ? '' : 'activeNavLink'}>
                                <li><DashboardIcon /></li>
                                <label>Dashboard</label>
                            </div>
                        </Link>
                        <Link href={'/cardPage/0'}>
                            <div id={params.id ? params.id.split('-')[0] == '0' ? 'activeNavLink' : '' : ''}>
                                <li><AccountCircleIcon /></li>
                                <label>Clientes</label>
                            </div>
                        </Link>
                        <Link href={'/cardPage/1'}>
                            <div id={params.id ? params.id.split('-')[0] == '1' ? 'activeNavLink' : '' : ''}>
                                <li><AirlineSeatReclineNormalIcon /></li>
                                <label>Condutores</label>
                            </div>
                        </Link>
                        <Link href={'/cardPage/2'}>
                            <div id={params.id ? params.id.split('-')[0] == '2' ? 'activeNavLink' : '' : ''}>
                                <li><DirectionsCarIcon /></li>
                                <label>Veículos</label>
                            </div>
                        </Link>
                        <Link href={'/cardPage/3'}>
                            <div id={params.id ? params.id.split('-')[0] == '3' ? 'activeNavLink' : '' : ''}>
                                <li><ContentPasteSearchIcon /></li>
                                <label>Deslocamentos</label>
                            </div>
                        </Link>
                    </ul>
                </div>
            </div >
            <Image src={Logo} alt='Logo' className='Logo' />
        </nav >
    )
}
