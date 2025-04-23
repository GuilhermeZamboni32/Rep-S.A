import React from 'react'
import Navbar from '../Components/Navbar'
import './PerfilProfissional.css'
//import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function PerfilProfissional() {
    const navigate = useNavigate()

    function exercicio(){
      //processo da validação do usuario
      navigate('/telaexer');
    }
  
    function dieta(){
      //processo da validação do usuario
      navigate('/teladieta');
    }
  
    function edit(){
      //processo da validação do usuario
      navigate('/editperfil');
    }
  
    return (
     
      <div className="container-perfil-prof">
        <Navbar />
          <div className="div-grupo-prof">
            
           
            <div className="div-grupo-usuario-prof">
  
              <div className='div-img'>
              <img className='img' src="the-log.jpg" alt="" />
              </div>
  
              <div className="espaco-prof"></div>
  
              <div className="perfil-input-prof">
                <input className='texto-perfil-prof' type="text" placeholder='Nome :'/>
                <input className='texto-perfil-prof' type="text" placeholder='Data de nascimento :'/>
                <input className='texto-perfil-prof' type="text" placeholder='Email :'/>
                
                <div className="espaco-prof"></div>
              </div>
  
                
            </div>
  
          
  
           
  
            <div className="div-grupo-exercicio-prof">
              <div className="titulo-prof">
                <h1>  
                Alunos - Exercicios
                </h1>
              </div>
  
              <div className="exercicios-prof">
                <button onClick={exercicio}>Gabriel Souza</button>
                <button onClick={exercicio}>Lucas Oliveira</button>
                <button onClick={exercicio}>Mariana Costa</button>
                <button onClick={exercicio}>Fernanda Alves</button>
              </div>
            </div>
  
           
  
            <div className="div-grupo-dieta-prof">
            <div className="titulo-prof">
                <h1>  
                Alunos - Dietas
                </h1>
              </div>
              <div className="dieta-prof">
                <button onClick={dieta}>Thiago Martins</button>
                <button onClick={dieta}>Camila Rocha</button>
                <button onClick={dieta}>Eduardo Lima</button>
              </div>
            </div>
  
          </div>
        </div>
  
    )
}

export default PerfilProfissional