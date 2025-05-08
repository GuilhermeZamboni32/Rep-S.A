import React from 'react'
import "./Avaliacao.css"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import {useState} from 'react'


function Avaliacao() {

  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const handleStarClick = (index) => {
    const clickedValue = index + 1; // Valor correspondente à estrela clicada (1 a 5)
    const halfStarValue = index + 0.5; // Valor de meia estrela

    if (index === 0) { // Lógica especial para a primeira estrela (index 0)
      if (rating === 1) { // Se a primeira estrela está cheia (nota 1)
        setRating(0);   // Torna vazia (nota 0)
      } else if (rating === 0.5) { // Se a primeira estrela está meia (nota 0.5)
        setRating(1);   // Torna cheia (nota 1)
      } else { // Se está vazia (0) ou outra nota > 1 foi selecionada
        setRating(0.5); // Torna meia (nota 0.5)
      }
    } else { // Lógica para as estrelas 2 a 5 (index 1 a 4)
      // Se clicar na estrela que já representa a meia avaliação atual, torna-a cheia
      if (rating === halfStarValue) {
        setRating(clickedValue);
      } else {
        // Caso contrário (clicar em nova estrela ou em uma já cheia/vazia), define como meia estrela
        setRating(halfStarValue);
      }
    }
  };

  // Define o valor de hover baseado no índice da estrela (0 a 4) -> valor (1 a 5)
  const handleHover = (index) => {
    setHoverRating(index + 1)
  };

  // Reseta o hover quando o mouse sai da área das estrelas
  const handleLeave = () => {
    setHoverRating(0)
  };

  // Função auxiliar para determinar qual imagem de estrela mostrar
  const getStarImage = (index) => {
    const starValue = index + 1 // Valor da estrela atual (1 a 5)

    // O estado de hover tem prioridade para feedback visual imediato
    if (hoverRating >= starValue) {
      // Mostra estrela cheia se o hover estiver nesta estrela ou à direita dela
      return "/star-inteira.png" // Ajuste o caminho se necessário
    }

    // Determina a estrela com base na avaliação permanente (rating)
    if (rating >= starValue) {
      // Estrela cheia se a avaliação for maior ou igual ao valor cheio desta estrela
      return "/star-inteira.png" // Ajuste o caminho se necessário
    } else if (rating === index + 0.5) {
      // Meia estrela se a avaliação for exatamente o valor meio desta estrela
      return "/star-meia.png" // Ajuste o caminho se necessário
    } else {
      // Estrela vazia nos outros casos
      return "/star-vazia.png" // Ajuste o caminho se necessário
    }
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
            <input className='texto-inp' type="text" value="" readonly placeholder='Nome :'/>
          </div> 
            <div className="perfil-input-2-ava">
            <input className='texto-inp' type="text" value="" readonly placeholder='email'/>
           </div> 
           <div className="perfil-input-3-ava">
            <input className='texto-inp' type="text" value="" readonly placeholder='Data de nascimento :'/>
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
          <div className="rating" onMouseLeave={handleLeave}>
              {[...Array(5)].map((_, index) => (
                <button
                  className='btn-star'
                  key={index}
                  onClick={() => handleStarClick(index)}
                  onMouseEnter={() => handleHover(index)}
                >
                  <img
                    className="star-img" // Certifique-se que esta classe define o tamanho da imagem
                    src={getStarImage(index)} // Usa a função para obter a imagem correta
                    alt={`Avaliação ${index + 1} de 5 estrelas`}
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
            oninput="autoRisize(this)"
            spellcheck="true"
            required = "true"

            ></textarea>
          </div>
        </div>

       

       

      </div>
    </div>
  )
}


export default Avaliacao