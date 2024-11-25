import React from 'react'
import'./agua.css'

import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'

function Agua() {
    const {bairro} = useContext(GlobalContext)
  return (
    <div className='agua-container'>
        <navbar />
        <h1>Água</h1>
        <p>uma Página com conteudo muito fluido,mas meio sem gosto na minha opnião.</p>
      <p>no bairro {bairro} tem muita Água</p>
    </div>
  )
}

export default Agua
