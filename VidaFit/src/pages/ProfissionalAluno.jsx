import React from 'react'
import Navbar from '../Components/Navbar'
import './ProfissionalAluno.css'
//import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProfissionalAluno() {
    const navigate = useNavigate()

    function exercicio(){
      //processo da validação do usuario
      navigate('/telaexer');
    }
  
  
  
    return (
     
      <div className="container-perfil">
        <Navbar />
          <div className="div-grupo">
            
           
            <div className="div-grupo-usuario">
  
              <div className='div-img'>
              <img className='img' src="the-crock.jpeg" alt="" />
              </div>
  
              <div className="espaco"></div>
  
              <div className="perfil-input">
                <input className='texto-perfil' type="text" placeholder='Nome :'/>
                <input className='texto-perfil' type="text" placeholder='Data de nascimento :'/>
                <input className='texto-perfil' type="text" placeholder='Email :'/>
                <div className="espaco"></div>
              </div>
  
                
            </div>
  
          
  
           
  
            <div className="div-grupo-exercicio">
              <div className="titulo">
                <h1>  
                Nome do aluno
                </h1>
              </div>
  
              <div className="exercicios">
                <button onClick={exercicio}>Treino A</button>
                <button onClick={exercicio}>Treino B</button>
                <button onClick={exercicio}>Treino C</button>
                <button onClick={exercicio}>Treino D</button>
              </div>
            </div>
  
           
  
           
  
          </div>
        </div>
  
    )
}

export default ProfissionalAluno