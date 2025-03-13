import React from 'react'
import Navbar from '../Components/Navbar'
import "./Cadastro.css"

function Cadastro() {
  return (
    
    <div className='container-cadastro'>
      <Navbar />
        <div className='div-cadas'>
        <div className="espaco"></div>
        
        <div className='cadas-inf'>
          <div className="cadas-input">
              <input className='texto-cadas' type="text" placeholder='Nome :'/>
              <input className='texto-cadas' type="text" placeholder='Data de nascimento :'/>
              <input className='texto-cadas' type="text" placeholder='Email :'/>
              <input className='texto-cadas' type="text" placeholder='Senha :'/>
              <input className='texto-cadas' type="text" placeholder='Comfirmar Senha :'/>
              <div className="espaco"></div>
            </div>

              <button className='button'>cadastrar</button>
          
          </div>
        </div>
      </div>
    
  )
}

export default Cadastro