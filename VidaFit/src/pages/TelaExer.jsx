import React from 'react'
import './TelaExer.css'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

function TelaExer() {
  const navigate = useNavigate()

  function voltar(){
    //processo da validação do usuario
    navigate('/perfil');
  }

  return (
    <div className='container-exer'>
         <Navbar />

         <div className='div-grup-exer'>
          <div className='div-topo'>

            <div className='topo-es'>
              <h1 className='texto-exer'>Exercícios</h1>
            </div>

            <div className='topo-me'></div>

            <div className='topo-di'>
              <button className='butoon-voltar' onClick={voltar}>
                <h1 className='texto-exer'>Voltar</h1>
                </button>
            </div>

          </div>
          <div className='div-baixo'>

          </div>


         </div>
    </div>
  )
}

export default TelaExer