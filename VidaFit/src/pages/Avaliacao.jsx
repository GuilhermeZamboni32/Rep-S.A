import React from 'react'
import "./Avaliacao.css"
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import {useState} from 'react'


function Avaliacao() {
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    const handleStarClick = (index) => {
      const newClicked = clicked.map((_, i) => i <= index); // Atualiza o estado das estrelas
      setClicked(newClicked);
    };
    function voltar(){
    
      navigate(-1);
    }

  return (
    <div className="container-Ava">
    <Navbar />
      <div className="div-grupo-Ava">
        
       
        <div className="div-grupo-usuario-Ava">

          <div className='div-img'>
          {<img className='img' src="the-rock.jpg" alt="" />}
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
            <button className='butoon-voltar' onClick={voltar}>
                <h1 className='texto-exer'>Voltar</h1>
                </button>
          
        </div>

      
        <div className="div-grupo-Avaliacao">
          <div className="titulo-Ava">
            <h1>  
            Avaliar Usuario
            </h1>
          </div>

          <div className="Ava-estrela">
          <div className="rating">
            {clicked.map((star, index) => (
              <img
                
                key={index}
                src={star ? "/star-inteira.png" : "/star-vazia.png"} // Caminho das imagens
                alt={`Estrela ${index + 1}`}
                className="star-img"
                onClick={() => handleStarClick(index)} // Atualizando o estado
              />
            ))}
          </div>
          </div>

          <div className="Ava-coment">
          <div className="titulo-Ava-coment">
            <h2>  
            Adicionar Comentario
            </h2>
            </div>
            <input className='comentario' ></input>

          </div>
        </div>

       

       

      </div>
    </div>
  )
}


export default Avaliacao