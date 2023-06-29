'use client'
import './styleHome.scss'
import Image from 'next/image'
import imgHome from '../assets/Car rental-amico.svg'
import Footer from '../components/Footer'
import Grow from '@mui/material/Grow';

export default function Home() {
  return (

    <div className='containerHome'>
      <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: 500 } : {})}
      >
        <section className='header'>
          <h1>Seja bem-vindo ao <span style={{ color: '#FFBB33' }}>Transportify</span></h1>
          <h2>Comece a gerenciar seus clientes, veículos, condutores e deslocamentos agora mesmo!!!</h2>
          <Image src={imgHome} alt='Imagem da home' />
        </section>
      </Grow>
      <Footer />
    </div >
  )
}
