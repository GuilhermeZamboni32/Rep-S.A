import React from 'react'
import Navbar from '../Components/Navbar'
import "./Avaliacao.css"
import { Link, useNavigate } from 'react-router-dom'
import { react, useContext } from 'react'
import { GlobalContext } from "../Context/GlobalContext"
import {useState} from 'react'

function Avaliacao() {
const [avaliacao, setAvaliacao] = useState(0);
const [rating, setRating] = useState(0);

  const navigate = useNavigate()

  function voltar(){
    
    navigate(-1);
  }
  function avaliacoes(){
    navigate('/Av_notas')
  }

  
  const { user, setUser} = useContext(GlobalContext)
  const { updateUser } = useContext(GlobalContext)
  const { logout } = useContext(GlobalContext)


  const formatDate = (date) => {
    if (!date) return '';
    const parsedDate = new Date(date); 
    const day = String(parsedDate.getDate()).padStart(2, '0'); 
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); 
    const year = parsedDate.getFullYear(); 
    return `${day}/${month}/${year}`; 
}

  // Função para enviar a avaliação ao backend
  const enviarAvaliacao = async () => {
    const dados = {
      nota: avaliacao, // Nota da avaliação
      comentario, // Comentário do usuário
    };

    try {
      const response = await fetch('http://localhost:5000/avaliacoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Token JWT do usuário
        },
        body: JSON.stringify(dados),
      });

      if (response.ok) {
        alert('Avaliação enviada com sucesso!');
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  
  const Starclick = (index) => {
    setAvaliacao(index); // Atualiza a nota com base no clique
  };

const handleStarClick = (index, isLeft) => {
  const newRating = isLeft ? index + 0.5 : index + 1;
  if (index === 0 && newRating === rating) {
    setRating(0);
  } else {
    setRating(newRating);
  }
};

const getStarImage = (index) => {
  if (rating >= index + 1) return '/star-cheia.png';
  if (rating >= index + 0.5) return '/star-meia.png';
  return '/star-vazia.png';
};

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
          <input
                className='texto-inp'
                type="text"
                placeholder='Nome :'
                value={user?.username || ''}
                readOnly
            />
          </div> 

            <div className="perfil-input-2-ava">
            <input
                className='texto-inp'
                type="text"
                placeholder='Data de nascimento :'
                value={formatDate(user?.age_user)}
                readOnly
            />
           </div> 

           <div className="perfil-input-3-ava">
             <input
                className='texto-inp'
                type="text"
                placeholder='Email :'
                value={user?.email_user || ''}
                readOnly
            />
          </div>
            <div className="espaco"></div>


            <div className='botoes-av'>
            <button className='avaliar-usuario' onClick={avaliacoes}>avaliaçoes</button>
            <button className='voltar' onClick={voltar}>voltar</button>
            </div>

          
        </div>

      
        <div className="div-grupo-Avaliacao">
          <div className="titulo-Ava">
            <h1>  
            Avaliar Usuario
            </h1>
          </div>

          <div className="Ava-estrela">
            <div className="star-rating">
            {[0, 1, 2, 3, 4].map((index) => (
              <button key={index} className="star-button">
                <span
                  className="star-half left"
                  onClick={() => handleStarClick(index, true)} // Clique na metade esquerda (meia estrela)
                />
                <span
                  className="star-half right"
                  onClick={() => handleStarClick(index, false)} // Clique na metade direita (estrela inteira)
                />
                <img
                  src={getStarImage(index)} // Obtém a imagem da estrela com base na nota
                  alt="star"
                  className="star-img"
                />
              </button>
            ))}
            </div>
          </div>

          <div className="Ava-coment">
          <div className="titulo-Ava-coment">
            <h2>  
            Adicionar Comentario
            </h2>
            </div>
            <textarea className='comentario' 
            placeholder='escreva de comentario aqui'
            cols="100" 
            rows="100" 
            ></textarea>
          </div>
         <button className='btn-av' onClick={enviarAvaliacao}>enviar</button>
        </div>

       

       

      </div>
    </div>
  )
}

export default Avaliacao ;