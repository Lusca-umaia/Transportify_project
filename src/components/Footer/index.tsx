'use client'
import './style.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import Logo from '../../assets/logoTwo.png'
import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <div className='headerFooter'>
                <span>Transportify</span>
                <Image src={Logo} alt="Logo" />
            </div>
            <div className='navigateLinks'>
                <Link href={'/cardPage/0'}><span>Clientes</span></Link>
                <Link href={'/cardPage/1'}><span>Condutores</span></Link>
                <Link href={'/cardPage/2'}><span>Veículos</span></Link>
                <Link href={'/cardPage/3'}><span>Deslocamento</span></Link>
            </div>
            <div className='socialMedia'>
                <a href='https://www.linkedin.com/in/lucas-maia-41b478214/' target="_blank"><LinkedInIcon /></a>
                <a href='https://github.com/Lusca-umaia' target="_blank"><GitHubIcon /></a>
                <a href='https://www.instagram.com/lucas_umaia/' target="_blank"><InstagramIcon /></a>
            </div>
            <p>@2023 Lucas Maia.</p>
        </footer>
    )
}