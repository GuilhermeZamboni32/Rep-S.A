import React from 'react'
import "./Avaliacao.css"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'


function Avaliacao() {
  return (
    <div className="container-Ava">
    <Navbar />
      <div className="div-grupo-Ava">
        
       
        <div className="div-grupo-usuario-Ava">

          <div className='div-img'>
          {/*<img className='img' src="foto-rock.jpg" alt="" />*/}
          </div>

          <div className="espaco"></div>

          <div className="perfil-input-1-ava">
            <input className='texto-inp' type="text" placeholder='Nome :'/>
          </div> 
            <div className="perfil-input-2-ava">
            <input className='texto-inp' type="text" placeholder='email'/>
           </div> 
           <div className="perfil-input-3-ava">
            <input className='texto-inp' type="text" placeholder='Data de nascimento :'/>
          </div>
            <div className="espaco"></div>
          
        </div>

       

        <div className="div-grupo-Avaliacao">
          <div className="titulo-Ava">
            <h1>  
            Avaliar Usuario
            </h1>
          </div>

          <div className="Ava-estrela">
        
           
            
          </div>
          <div className="Ava-coment">
          <div className="titulo-Ava-coment">
            <h2>  
            Adicionar Comentario
            </h2>
           
            </div>
          </div>
        </div>

       

       

      </div>
    </div>
  )
}

export default Avaliacao