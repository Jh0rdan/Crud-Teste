import Head from 'next/head'
import styles from '../styles/Container.module.scss'

import Link from 'next/link'

const cors = require ('cors')

import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'


export default function Home() {
    const [list, setList] = useState ([])
    const [nome, setNome] = useState ('')
    const [email, setEmail] = useState ('')
    const [telefone, setTelefone] = useState ('')
    const [obs, setObs] = useState ('')



  function save(){
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

    axios.post('http://localhost:3333/tasks', {nome:nome, email:email, telefone:telefone, obs:obs }).then((resp) => {
      console.log({resp});
    })
    
   
  }

  axios.get('http://localhost:3333/tasks')
  .then((response)=>{

    setList(response.data)
  })
  
  function get(){
    axios.get('http://localhost:3333/tasks')
  .then((response)=>{

    setList(response.data)
  })
  
  }
  
  function del(id){
    axios.delete(`http://localhost:3333/tasks/${id}`)

    setList(list.filter(list => list.id !==id))
    
  }

 
  useEffect(()=>{
   
    axios.get('http://localhost:3333/tasks')
    .then((response)=>{

      setList(response.data)
    })
  
    
},[])


   
    
    

  return (
    

    <main className={styles.container}>
    <form>
        <div className={styles.content}>
          <h1 className='megTit'>Adicione <br/> Novos Contatos</h1>
        <input type="text" placeholder="Nome Completo" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="tel" placeholder="Telefone" value={telefone} onChange={(e)=>setTelefone(e.target.value)} />
        <input className={styles.observ} placeholder="observacões" value={obs} onChange={(e)=>setObs(e.target.value)} />
        <button type="button" onClick={() => save()}>Salvar</button>
        </div>
    </form>
    ~
    <div className={styles.caixacontatos}>
        <h1>Contatos</h1>
            {list.map((list, id)=>{
              return(

                <div className={styles.indCartao} key={id}>
              <div className={styles.boxtitulo}>
              
                <div className={styles.dados}>
                  
                  <div className={styles.contato}>
                  <p className={styles.titulo}>{list.nome}</p>
                   <div className={styles.box}>
                      <p className={styles.tit}>->   {list.email}</p>
                      <p className={styles.tit}>->   {list.telefone}</p>
                      <p className={styles.tit}>->   {list.obs}</p>
                   </div>
                  
                  </div>
               
                </div>
    
                <div className={styles.option}>
                 <Link href={`/edit/${list.id}`}>
                  <button className={styles.but} onAuxClick={() => get()} > Editar</button>
                 </Link>
                  <button className={styles.but} onClick={()=> del(list.id)}>Excluir</button>
                </div>
            
            
              </div>
    
          </div>
              )
            })}
            
        
      
  </div>
</main>


    )
}
