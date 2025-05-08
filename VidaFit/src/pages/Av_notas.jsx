import React from 'react'
import "./Av_notas.css"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import {useState} from 'react'

function Av_notas({estrelas,comentarios}) {
  return (
    <div className="container-Ava">
    <Navbar />
      <div className="div-grupo-Ava">
        <div className="Av_notas">

          <div className="titulo_av_notas">
            <h1>  
            Avaliaçoes
            </h1>

          </div>
        
      <div className='cards_av'>
        <div className='nome-dieta-b'>
          <h1>{estrelas}</h1>
        </div>
      </div>

      <div className='Av_descriçao'>
        <h2>{comentarios}</h2>
      </div>

       
        </div>

       

       

      </div>
    </div>
  )
}


export default Av_notas