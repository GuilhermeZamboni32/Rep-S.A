import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import React from 'react'
import './TelaDieta.css'
import Ad_Dieta from './Ad_Dieta'
import { useState } from 'react';

function TelaDieta() {
  const navigate = useNavigate()

  function voltar(){
    navigate(-1);
  }

  return (
    <div className='container-dieta'>
         <Navbar />

         <div className='div-grup-dieta'>
          <div className='div-topo'>

            <div className='topo-es-dieta'>
              <h1 className='texto-dieta'>Dietas</h1>
            </div>

            <div className='topo-me-dieta'></div>

            <div className='topo-di-dieta'>
              <button className='butoon-voltar' onClick={voltar}>
                <h1 className='texto-dieta'>Voltar</h1>
                </button>
            </div>

          </div>
          <div className='div-baixo-dieta'>
          <Ad_Dieta />

          </div>


         </div>
    </div>
  )
}

export default TelaDieta