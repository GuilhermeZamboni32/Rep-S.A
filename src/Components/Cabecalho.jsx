import React from 'react'
import './Cabecalho.css'

function Cabecalho() {
  return (
    <div className='container-cabecalho'>
            <div className='cabe-esquerda'>
            <img className='logo' src="Vida+Fit.png" alt="" />

            </div>


            <div className='cabe-meio'>

            </div>


            <div className='cabe-direita'>
              <button className='cabe-button'>nada</button>
              <button className='cabe-button'>nada</button>
              <button className='cabe-button'>nada</button>
              <button className='cabe-button'>cadastro</button>

            </div>
    </div>
  )
}

export default Cabecalho