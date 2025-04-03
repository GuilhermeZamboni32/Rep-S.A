import React from 'react'
import Navbar from '../Components/Navbar'
import './Perfil.css'
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
     
      <div className="container-perfil">
        <Navbar />
          <div className="div-grupo">
            
           
            <div className="div-grupo-usuario">
  
              <div className='div-img'>
              <img className='img' src="foto-rock.jpg" alt="" />
              </div>
  
              <div className="espaco"></div>
  
              <div className="perfil-input">
                <input className='texto-perfil' type="text" placeholder='Nome :'/>
                <input className='texto-perfil' type="text" placeholder='Data de nascimento :'/>
                <input className='texto-perfil' type="text" placeholder='Email :'/>
                <input className='texto-perfil' type="text" placeholder='Senha :'/>
                <div className="espaco"></div>
              </div>
  
                <button className='button-perfil' onClick={edit}>Editar</button>
            </div>
  
          
  
           
  
            <div className="div-grupo-exercicio">
              <div className="titulo">
                <h1>  
                Grupo de Exercícios
                </h1>
              </div>
  
              <div className="exercicios">
                <button onClick={exercicio}>Treino A</button>
                <button onClick={exercicio}>Treino B</button>
                <button onClick={exercicio}>Treino C</button>
                <button onClick={exercicio}>Treino D</button>
              </div>
            </div>
  
           
  
            <div className="div-grupo-dieta">
            <div className="titulo">
                <h1>  
                Grupo de Dietas
                </h1>
              </div>
              <div className="dieta">
                <button onClick={dieta}>Dieta A</button>
                <button onClick={dieta}>Dieta B</button>
                <button onClick={dieta}>Dieta C</button>
              </div>
            </div>
  
          </div>
        </div>
  
    )
}

export default PerfilProfissional