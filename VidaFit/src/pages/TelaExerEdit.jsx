import React from 'react'
import './TelaExerEdit.css'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

function TelaExerEdit() {
  const navigate = useNavigate()

  function voltar(){
    navigate('/perfil');
  }

  return (
    <div className='container-exer-edit'>
         <Navbar />

         <div className='div-grup-exer-edit'>
          <div className='div-topo-edit'>

            <div className='topo-es-edit'>
              <h1 className='texto-exer-edit'>Editar Exercícios</h1>
            </div>

            <div className='topo-me-edit'></div>

            <div className='topo-di-edit'>
              <button className='butoon-voltar-edit' onClick={voltar}>
                <h1 className='texto-exer-edit'>Voltar</h1>
                </button>
            </div>

          </div>
          <div className='div-baixo-edit'>

          </div>


         </div>
    </div>
  )
}

export default TelaExerEdit