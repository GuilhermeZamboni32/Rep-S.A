import React from 'react'
import './Ad_Exer.css'
import { useState } from 'react'
import Exercicio from './Exercicio'


function Ad_Exer() {
    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')


    const [exer, setexer] = useState([
      //################################################# treinos de peito #################################################
      {
        id: Date.now(),
        nome: "Supino",
        descricao: "3 Series de 12 Repetições",
        img: "./exercicios/supino.gif",
      },
      {
        id: Date.now() + 1,
        nome: "Crossover",
        descricao: "3 Series de 12 Repetições",
        img: "./exercicios/crossover.gif",
      },
      {
        id: Date.now() + 2,
        nome: "Flexão",
        descricao: "3 Series de 12 Repetições",
        img: "./exercicios/flexao.webp",
      },
      {
        id: Date.now() + 3,
        nome: "crucifixo",
        descricao: "3 Series de 12 Repetições",
        img: "./exercicios/crusifixo.gif",
      },
      {
        id: Date.now() + 4,
        nome: "Peck Deck",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/peck-deck.gif",
      },
      {
        id: Date.now() + 5,
        nome: "Flexão com apoio",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/flexao.gif",
      },
      {
        id: Date.now() + 6,
        nome: "Paralelas",
        descricao: "3 Séries de 10 Repetições",
        img: "./exercicios/Paralelas.gif",
      },
      {
        id: Date.now() + 7,
        nome: "Pullover",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/pullover.gif",
      },
      {
        id: Date.now() + 8,
        nome: "Flexão inclinada",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/flexao-inclinada.gif",
      },
      {
        id: Date.now() + 9,
        nome: "Supino Inclinado com Halteres",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/supino-inclinado-com-halteres.gif",
      },

      

//################################################# treinos de costas #################################################

      {
        id: Date.now() + 10,
        nome: "Puxada Frente",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/puxada-frente.gif",
      },
      {
        id: Date.now() + 11,
        nome: "Puxada Supinada",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/puxada-supinada.webp",
      },
      {
        id: Date.now() + 12,
        nome: "Remada Curvada",
        descricao: "3 Séries de 10 Repetições",
        img: "./exercicios/remada-curvada.gif",
      },
      {
        id: Date.now() + 13,
        nome: "Remada Cavalinho",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/remada-cavalinho.gif",
      },
      {
        id: Date.now() + 14,
        nome: "Remada Máquina",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/remada-maquina.gif",
      },
      {
        id: Date.now() + 15,
        nome: "Pulldown",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/pulldown.gif",
      },
      {
        id: Date.now() + 16,
        nome: "Levantamento Terra",
        descricao: "3 Séries de 8 Repetições",
        img: "./exercicios/levantamento-terra.gif",
      },
      {
        id: Date.now() + 17,
        nome: "Barra Fixa",
        descricao: "3 Séries de 8-10 Repetições",
        img: "./exercicios/barra-fixa.gif",
      },
      {
        id: Date.now() + 18,
        nome: "Remada Unilateral",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/remada-unilateral.gif",
      },
      {
        id: Date.now() + 19,
        nome: "Face Pull",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/face-pull.webp",
      },



//################################################# treinos de perna #################################################

      {
        id: Date.now() + 20,
        nome: "Agachamento Livre",
        descricao: "3 Séries de 10 Repetições",
        img: "./exercicios/agachamento-livre.gif",
      },
      {
        id: Date.now() + 21,
        nome: "Leg Press",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/leg-press.gif",
      },
      {
        id: Date.now() + 22,
        nome: "Cadeira Extensora",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/cadeira-extensora.gif",
      },
      {
        id: Date.now() + 23,
        nome: "Cadeira Flexora",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/cadeira-flexora.gif",
      },
      {
        id: Date.now() + 24,
        nome: "Stiff",
        descricao: "3 Séries de 10 Repetições",
        img: "./exercicios/stiff.gif",
      },
      {
        id: Date.now() + 25,
        nome: "Avanço com Halteres",
        descricao: "3 Séries de 12 Passos",
        img: "./exercicios/avanco-com-halteres.gif",
      },
      {
        id: Date.now() + 26,
        nome: "Agachamento Smith",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/agachamento-smith.gif",
      },
      {
        id: Date.now() + 27,
        nome: "Elevação de Quadril",
        descricao: "3 Séries de 15 Repetições",
        img: "./exercicios/elevacao-de-quadril.gif",
      },
      {
        id: Date.now() + 28,
        nome: "Cadeira Abdutora",
        descricao: "3 Séries de 12 Repetições",
        img: "./exercicios/cadeira-abdutora.gif",
      },
      {
        id: Date.now() + 29,
        nome: "Panturrilha em Pé",
        descricao: "3 Séries de 20 Repetições",
        img: "./exercicios/panturrilha-em-pe.gif",
      }
      
      
      
    ])

    function CadastrarExercicio(){
        const Exercicio = {
      
          id: Date.now(),
          nome: inputNome,
          descricao: inputDescricao,
          img: inputImagem
      
        }
      
        setexer([...exer, Exercicio])
      }

return (
    

    <div className='container-corpo-exer'>
    
    
     <div className='lista-cards-exer'>
       {exer.map((exercicio) => (
             <Exercicio key={exercicio.id} nome={exercicio.nome} descricao={exercicio.descricao} img={exercicio.img}/>
    
       ))}
     </div>
    
   {/**
    * 
     <div className='formCadastro-exer'>
         <div className="input-contaner-exer">
            <label htmlFor="">Produto:</label>
            <input type="text" 
            value={inputNome}
            onChange={(Event) => setInputNome(Event.target.value)}
            />
         </div>
    
    
         <div className="input-contaner-exer">
             <label htmlFor="">Descrição:</label>
             <input type="text" 
            value={inputDescricao}
            onChange={(Event) => setInputDescricao(Event.target.value)}
            />
         </div>
    
         <div className="input-contaner-exer">
             <label htmlFor="">Imagem:</label>
             <input type="text" 
            value={inputImagem}
            onChange={(Event) => setInputImagem(Event.target.value)}
            />
         </div>
         <button onClick={CadastrarExercicio}>Cadastrar Exercicio</button>
            
    </div>
    */}
        
    
     </div>
      )
}

export default Ad_Exer