import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import React from 'react'

function TelaDietaEdit() {
  const navigate = useNavigate()

  function voltar(){
    //processo da validação do usuario
    navigate(-1);
  }

  return (
    <div className='container-exer-edit'>
    <Navbar />

    <div className='div-grup-exer-edit'>
     <div className='div-topo-edit'>

       <div className='topo-es-edit'>
         <h1 className='texto-exer-edit'>Editar Dieta</h1>
       </div>

       <div className='topo-me-edit'></div>

       <div className='topo-di-edit' onClick={voltar}>
         <button className='butoon-voltar-edit'>
           <h1 className='texto-exer-edit'>Voltar</h1>
           </button>
       </div>

     </div>
     <div className='div-baixo-edit'>

     </div>


    </div>
</div>

  )
}

export default TelaDietaEdit