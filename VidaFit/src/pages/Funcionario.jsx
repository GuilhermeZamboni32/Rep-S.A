import React, { useEffect } from 'react'
import './Funcionario.css'
import { useState } from 'react';
//import { Link } from 'react-router-dom'

function Funcionario({img, nome, descricao, profi}) {
  /*if (profi == 'Coach de saúde'){
    <div className='container-produtos'></div>
  }*/
const  [shadow, setShadow] = useState('container-produtos')

//useEffect({},[])

  return (
    <div  className={shadow}>
      
         <h2>{nome}</h2>
         
         <img src={img} className='img-produto'/>
         
         {profi == 'Coach de saúde' &&
           <div className='emoji'> 
           <img src="folha-1.png" className='icones'/><img src="halter-1.png" className='icones'/>
         </div>}
      
         {profi == 'Nutricionista' &&
           <div className='emoji'> 
           <img src="folha-1.png" className='icones'/><img src="halter-2.png" className='icones'/>
         </div>}
      
         {profi == 'Personal Trainer' &&
           <div className='emoji'> 
           <img src="folha-2.png" className='icones'/><img src="halter-1.png" className='icones'/>
         </div>}
      
         <p>{descricao}</p>

         <button onClick={() => setShadow('container-produtos box-ef')}>ef-vermelho</button>
         <button onClick={() => setShadow('container-produtos box-nut')}>nut-verde</button>
         <button onClick={() => setShadow('container-produtos box-amb')}>amb-azul</button>


{/**   
      <div className='container-p1'>
      <h2>{nome}</h2>
      <img src={img} className='img-produto'/>
      {profi == 'Coach de saúde' &&
      <div className='emoji'> 
      <img src="folha-1.png" className='icones'/><img src="halter-1.png" className='icones'/>
      </div>}
      <p>{descricao}</p>
      </div>


      <div className='container-p2'>
      <h2>{nome}</h2>
      <img src={img} className='img-produto'/>
      {profi == 'Nutricionista' &&
      <div className='emoji'> 
      <img src="folha-1.png" className='icones'/><img src="halter-2.png" className='icones'/>
      </div>}
      <p>{descricao}</p>
      </div>


      <div className='container-p3'>
      <h2>{nome}</h2>
      <img src={img} className='img-produto'/>
      {profi == 'Personal Trainer' &&
      <div className='emoji'> 
      <img src="folha-2.png" className='icones'/><img src="halter-1.png" className='icones'/>
      </div>}
      <p>{descricao}</p>
      </div>
*/}

</div>
  )
}

export default Funcionario