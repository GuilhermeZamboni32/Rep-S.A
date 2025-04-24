import React, { useEffect } from 'react'
import './Exercicio.css'
import { useState } from 'react';

function Exercicio({img, nome, descricao}) {
    return (

    <div className='container-produto-exer'>

      <div className='imagem-exer'>
        <img src={img} className='img-produto-exer'/>
      </div>


      <div className='nome-exer-t'>
        <div className='nome-exer-b'>
          <h1>{nome}</h1>
        </div>
      </div>

      <div className='descricao-exer'>
        <h2>{descricao}</h2>
      </div>


        
        
    
    </div>
  )
}

export default Exercicio