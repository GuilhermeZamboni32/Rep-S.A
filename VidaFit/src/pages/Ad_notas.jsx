import React from 'react'
import { useState } from 'react';
import './Ad_notas.css'
import Av_notas from './Av_notas'
import Navbar from '../Components/Navbar'


function Ad_notas() {
    const [inputNome, setInputNome] = useState('')
    const [inputComentario, setInputComentario] = useState('')
    

    const [nots, setnots] = useState([
        {
          id: Date.now(),
          nome: "matheus",
          descricao: `profissional horrivel`,
        },
        {
          id: Date.now() + 1,
          nome: "germeson",
          descricao: `"amei super bom esse profissional"`,
        },
        {
          id: Date.now() + 2,
          nome: "jairo",
          comentario: `"sim bom demais"`,
     
        },
    ])

    function CadastrarNotas(){
        const Notas = {
          id: Date.now(),
          nome: inputNome,
          comentario: inputComentario,
       
        }
      
        setnots([...nots, Notas])
     
    }

  return (
    <div className='container-corpo-dieta'>

     <div className='Av-cards'>
       {notas.map((notas) => (
             <Notas key={notas.id} nome={notas.nome} descricao={notas.comentario}/>
    
       ))}
     </div>

     </div>
  )
}

export default Ad_notas;