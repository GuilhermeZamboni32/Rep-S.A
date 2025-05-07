import React, { useEffect } from 'react'
import './Dieta.css'
import { useState } from 'react';

function Dieta({img, nome, descricao}) {
  const [DietaMarcada, setDietaMarcada] = useState(false);

  const DietaConcluida = () => {
    setDietaMarcada(true);
  };
  const DietaNaoConcluida = () => {
    setDietaMarcada(false); 
  };

  return (
    
    <div className={`container-produto-dieta ${DietaMarcada ? 'apagado' : ''}`}>

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

      <button className='button-x' onClick={DietaNaoConcluida}>
        <img className='icone-x' src="./Icons/icone-X.png" alt="" />
      </button>

      <button className='button-l' onClick={DietaConcluida}>
        <img className='icone-l' src="./Icons/icon-L.png" alt="" />
      </button>


        
        
    
    </div>
  )
}

export default Dieta