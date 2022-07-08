import Head from 'next/head'
import styles from '../styles/Container.module.scss'

import Link from 'next/link'

const cors = require ('cors')

import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Home() {
    const [edit, setEdit] = useState ('')
    const [nome, setNome] = useState ('')
    const [email, setEmail] = useState ('')
    const [telefone, setTelefone] = useState ('')
    const [obs, setObs] = useState ('')

      

    

  return (
    

    <main className={styles.container}>
    <form>
        <div className={styles.content}>
          <h1 className='megTit'>Adicione <br/> Novos Contatos</h1>
        <input type="text" placeholder="Nome Completo" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="tel" placeholder="Telefone" value={telefone} onChange={(e)=>setTelefone(e.target.value)} />
        <input className={styles.observ} placeholder="observacões" value={obs} onChange={(e)=>setObs(e.target.value)} />
        <button type="button" onClick={() => atualizar()}>Salvar</button>
        </div>
    </form>

</main>


    )
}
