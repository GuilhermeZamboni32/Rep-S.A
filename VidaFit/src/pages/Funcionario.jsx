import React from 'react'
import './Funcionario.css'
//import { Link } from 'react-router-dom'

function Funcionario({img, nome, descricao}) {
  return (
    <div className='container-produto'>

    <h2>{nome}</h2>
    
    <img src={img} className='img-produto'/>
    
    <p>{descricao}</p>
    

</div>
  )
}

export default Funcionario