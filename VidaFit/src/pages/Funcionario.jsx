import React, { useEffect } from 'react'
import './Funcionario.css'
import { useState } from 'react';
//import { Link } from 'react-router-dom'

function Funcionario({img, nome, descricao, profi}) {
  
const  [shadow, setShadow] = useState('container-produtos')

useEffect(() => {
  if (profi === 'Coach de saúde') {
    setShadow('container-produtos box-ef')
  } else if (profi === 'Nutricionista') {
    setShadow('container-produtos box-nut')
  } else if (profi === 'Personal Trainer') {
    setShadow('container-produtos box-amb')
  }
}, [profi])

  return (
    <div  className={shadow}>
      
         <h2>{nome}</h2>
         
         <img src={img} className='img-produto'/>
         
         {profi == 'Coach de saúde' &&
           <div className='emoji'> 
           <img src="./Icons/folha-2.png" className='icones'/><img src="./Icons/halter-1.png" className='icones'/>
         </div>}
      
         {profi == 'Nutricionista' &&
           <div className='emoji'> 
           <img src="./Icons/folha-1.png" className='icones'/><img src="./Icons/halter-2.png" className='icones'/>
         </div>}
      
         {profi == 'Personal Trainer' &&
           <div className='emoji'> 
           <img src="./Icons/folha-1.png" className='icones'/><img src="./Icons/halter-1.png" className='icones'/>
         </div>}
      
         <p>{descricao}</p>

        

</div>
  )
}

export default Funcionario