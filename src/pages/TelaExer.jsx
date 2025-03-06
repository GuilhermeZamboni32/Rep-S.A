import React from 'react'
import './TelaExer.css'
import Navbar from '../Components/Navbar'

function TelaExer() {
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
              <button className='butoon-voltar'>Voltar</button>
            </div>

          </div>
          <div className='div-baixo'>

          </div>


         </div>
    </div>
  )
}

export default TelaExer