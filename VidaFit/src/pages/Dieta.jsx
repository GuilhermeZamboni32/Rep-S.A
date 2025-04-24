import React, { useEffect } from 'react'
import './Dieta.css'
import { useState } from 'react';

function Dieta({img, nome, descricao}) {
  const [clik, setClik] = useState('')
  let clik1 = (+1)
  let clik2 = (-1)
  


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

      <button className='button-x'><img className='icone-x' src="./Icons/icone-X.png" alt="" onClick={clik}/></button>
      <button className='button-l'><img className='icone-l' src="./Icons/icon-L.png" alt="" onClick={clik}/></button>


        
        
    
    </div>
  )
}

export default Dieta