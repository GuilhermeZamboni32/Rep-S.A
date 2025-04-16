import React from 'react'

function Exercicio({img, nome, descricao}) {
    return (

        <div className='container-produto'>

        <h2>{nome}</h2>
        
        <img src={img} className='img-produto'/>
        
        <p>{descricao}</p>
        
    
    </div>
  )
}

export default Exercicio