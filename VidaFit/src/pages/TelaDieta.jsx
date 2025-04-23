import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import React from 'react'

function TelaDieta() {
  const navigate = useNavigate()

  function voltar(){
    //processo da validação do usuario
    navigate(-1);
  }

  return (
    <div className='container-exer'>
         <Navbar />

         <div className='div-grup-exer'>
          <div className='div-topo'>

            <div className='topo-es'>
              <h1 className='texto-exer'>Dietas</h1>
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

export default TelaDieta