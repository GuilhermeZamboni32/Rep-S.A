import React, { useEffect } from 'react'
import './Exercicio.css'
import { useState } from 'react';

function Exercicio({img, nome, descricao}) {
    return (

        <div className='container-produto-exer'>

        <h2>{nome}</h2>
        
        <img src={img} className='img-produto-exer'/>
        
        <p>{descricao}</p>
        
    
    </div>
  )
}

export default Exercicio