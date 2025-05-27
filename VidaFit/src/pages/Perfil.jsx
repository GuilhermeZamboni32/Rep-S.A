import React from 'react'
import Navbar from '../Components/Navbar'
import './Perfil.css'
//import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { react, useContext } from 'react';
import { GlobalContext } from "../Context/GlobalContext"
import bcrypt from 'bcryptjs';

function Perfil() {
const { user, setUser} = useContext(GlobalContext)
const { updateUser } = useContext(GlobalContext)
const { logout } = useContext(GlobalContext)
const navigate = useNavigate()
  

const formatDate = (date) => {
    if (!date) return '';
    const parsedDate = new Date(date); 
    const day = String(parsedDate.getDate()).padStart(2, '0'); 
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); 
    const year = parsedDate.getFullYear(); 
    return `${day}/${month}/${year}`; 
};

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
            <img 
              className='img'
              src={user?.image || 'the-glock.png'}
              alt="Profile"
            />
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
                value={formatDate(user?.age_user)}
                readOnly
            />
            <input
                className='texto-perfil'
                type="text"
                placeholder='Email :'
                value={user?.email_user || ''}
                readOnly
            />
            
              <div className="espaco"></div>
            </div>

            <div className='botoes-perfil'>

              <button className='button-perfil' onClick={edit}>Editar</button>
              <button className='button-perfil' onClick={avaliar}>Avaliar Usuario</button>
              <button className='button-perfil' onClick={logout}>Sair</button>
            </div>

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