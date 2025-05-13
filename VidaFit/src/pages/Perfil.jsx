import React from 'react'
import Navbar from '../Components/Navbar'
import './Perfil.css'
//import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { react, useContext } from 'react';
import { GlobalContext } from "../Context/GlobalContext"


function Perfil() {
  const { user, setUser} = useContext(GlobalContext)
const navigate = useNavigate()

  function exercicio(){
    navigate('/telaexer');
  }

  function dieta(){
    navigate('/teladieta');
  }

  function edit(){
    navigate('/editperfil');
  }

  function avaliar(){
    navigate('/avaliacao');
  }

  return (
   
    <div className="container-perfil">
      <Navbar />
        <div className="div-grupo">
          
         
          <div className="div-grupo-usuario">

            <div className='div-img'>
            <img className='img' src="the-rok.jpg" alt="" />
            </div>

            <div className="espaco"></div>

            <div className="perfil-input">
            <input
                className='texto-perfil'
                type="text"
                placeholder='Nome :'
                value={user?.username || ''}
                readOnly
            />

            <input
                className='texto-perfil'
                type="text"
                placeholder='Data de nascimento :'
                value={user?.age || ''}
                readOnly
            />
            <input
                className='texto-perfil'
                type="text"
                placeholder='Email :'
                value={user?.email || ''}
                readOnly
            />
            
              <div className="espaco"></div>
            </div>

              <button className='button-perfil' onClick={edit}>Editar</button>
              <button className='button-perfil' onClick={avaliar}>Avaliar Usuario</button>
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

export default Perfil



/*
    <div className='container-perfil'>
      <div className='div-grupo'>

      <div className='div-grupo-use'></div>

      <div className='div-grupo-exe'></div>

      <div className='div-grupo-die'></div>
      </div>
      

    </div>*/