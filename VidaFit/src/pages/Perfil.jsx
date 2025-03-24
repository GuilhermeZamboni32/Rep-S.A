import React from 'react'
import Navbar from '../Components/Navbar'
import './Perfil.css'

function Perfil() {
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
              <input className='texto-inp' type="text" placeholder='Nome :'/>
              <input className='texto-inp' type="text" placeholder='Data de nascimento :'/>
              <input className='texto-inp' type="text" placeholder='Email :'/>
              <input className='texto-inp' type="text" placeholder='Senha :'/>
              <div className="espaco"></div>
            </div>

              <button className='button'>Editar</button>
          </div>

         

          <div className="div-grupo-exercicio">
            <div className="titulo">
              <h1>  
              Grupo de Exercícios
              </h1>
            </div>

            <div className="exercicios">
              <button>Treino A</button>
              <button>Treino B</button>
              <button>Treino C</button>
              <button>Treino D</button>
            </div>
          </div>

         

          <div className="div-grupo-dieta">
          <div className="titulo">
              <h1>  
              Grupo de Dietas
              </h1>
            </div>
            <div className="dieta">
              <button>Dieta A</button>
              <button>Dieta B</button>
              <button>Dieta C</button>
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