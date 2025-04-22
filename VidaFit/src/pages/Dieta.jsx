import React, { useEffect } from 'react'
import './Dieta.css'
import { useState } from 'react';

function Dieta({img, nome, descricao}) {
  return (
    
    <div className='container-produto-dieta'>

      <div className='imagem-dieta'>
        <img src={img} className='img-produto-dieta'/>
      </div>


      <div className='nome-dieta-t'>
        <div className='nome-dieta-b'>
          <h1>{nome}</h1>
        </div>
      </div>

      <div className='descricao-dieta'>
        <h2>{descricao}</h2>
      </div>


        
        
    
    </div>
  )
}

export default Dieta