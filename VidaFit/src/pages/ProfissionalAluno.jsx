import React from 'react'
import Navbar from '../Components/Navbar'
import './ProfissionalAluno.css'
//import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProfissionalAluno() {
    const navigate = useNavigate()

    function exercicio(){
      navigate('/telaexer');
    }
  
  
  
    return (
     
      <div className="container-prof-aluno">
        <Navbar />
          <div className="div-grupo-prof-aluno">
            
           
            <div className="div-grupo-usuario-prof-aluno">
  
              <div className='div-img-prof-aluno'>
              <img className='img-prof-aluno' src="the-crock.jpeg" alt="" />
              </div>
  
              <div className="espaco-prof-aluno"></div>
  
              <div className="perfil-input-prof-aluno">
                <input className='texto-perfil-prof-aluno' type="text" placeholder='Nome :'/>
                <input className='texto-perfil-prof-aluno' type="text" placeholder='Data de nascimento :'/>
                <input className='texto-perfil-prof-aluno' type="text" placeholder='Email :'/>
                <div className="espaco-prof-aluno"></div>
              </div>
  
                
            </div>
  
          
  
           
  
            <div className="div-grupo-exercicio-prof-aluno">
              <div className="titulo-prof-aluno">
                <h1>  
                Nome do aluno
                </h1>
              </div>
  
              <div className="exercicios-prof-aluno">
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