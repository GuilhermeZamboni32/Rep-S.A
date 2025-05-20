import React from 'react'
import './Ad_Exer.css'
import { useState } from 'react'
import Exercicio from './Exercicio'


function Ad_Exer() {
    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')


    const [exer, setexer] = useState([
      {
        id: Date.now(),
        nome: "Supino",
        descricao: "3 Series de 12 Repetições",
        img: "./supino.gif",
      },
      {
        id: Date.now() + 1,
        nome: "Crossover",
        descricao: "3 Series de 12 Repetições",
        img: "./crossover.gif",
      },
      {
        id: Date.now() + 2,
        nome: "Flexão",
        descricao: "3 Series de 12 Repetições",
        img: "./flexao.webp",
      },
      {
        id: Date.now() + 3,
        nome: "crucifixo",
        descricao: "3 Series de 12 Repetições",
        img: "./crusifixo.gif",
      },
      {
        id: Date.now() + 4,
        nome: "Peck Deck",
        descricao: "3 Séries de 12 Repetições",
        img: "./peckdeck.gif",
      },
      {
        id: Date.now() + 5,
        nome: "Flexão com apoio",
        descricao: "3 Séries de 12 Repetições",
        img: "./flexao-apoio.gif",
      },
      {
        id: Date.now() + 6,
        nome: "Paralelas",
        descricao: "3 Séries de 10 Repetições",
        img: "./paralelas.gif",
      },
      {
        id: Date.now() + 7,
        nome: "Pullover",
        descricao: "3 Séries de 12 Repetições",
        img: "./pullover.gif",
      },
      {
        id: Date.now() + 8,
        nome: "Flexão inclinada",
        descricao: "3 Séries de 12 Repetições",
        img: "./flexao-inclinada.gif",
      },
      {
        id: Date.now() + 9,
        nome: "Supino Inclinado com Halteres",
        descricao: "3 Séries de 12 Repetições",
        img: "./supino-inclinado.gif",
      },

      



      {
        id: Date.now() + 10,
        nome: "Puxada Frente",
        descricao: "3 Séries de 12 Repetições",
        img: "./puxada-frente.gif",
      },
      {
        id: Date.now() + 11,
        nome: "Puxada Atrás",
        descricao: "3 Séries de 12 Repetições",
        img: "./puxada-atras.gif",
      },
      {
        id: Date.now() + 12,
        nome: "Remada Curvada",
        descricao: "3 Séries de 10 Repetições",
        img: "./remada-curvada.gif",
      },
      {
        id: Date.now() + 13,
        nome: "Remada Cavalinho",
        descricao: "3 Séries de 12 Repetições",
        img: "./remada-cavalinho.gif",
      },
      {
        id: Date.now() + 14,
        nome: "Remada Máquina",
        descricao: "3 Séries de 12 Repetições",
        img: "./remada-maquina.gif",
      },
      {
        id: Date.now() + 15,
        nome: "Pulldown",
        descricao: "3 Séries de 12 Repetições",
        img: "./pulldown.gif",
      },
      {
        id: Date.now() + 16,
        nome: "Levantamento Terra",
        descricao: "3 Séries de 8 Repetições",
        img: "./terra.gif",
      },
      {
        id: Date.now() + 17,
        nome: "Barra Fixa",
        descricao: "3 Séries de 8-10 Repetições",
        img: "./barra-fixa.gif",
      },
      {
        id: Date.now() + 18,
        nome: "Remada Unilateral",
        descricao: "3 Séries de 12 Repetições",
        img: "./remada-unilateral.gif",
      },
      {
        id: Date.now() + 19,
        nome: "Face Pull",
        descricao: "3 Séries de 12 Repetições",
        img: "./facepull.gif",
      },





      {
        id: Date.now() + 20,
        nome: "Agachamento Livre",
        descricao: "3 Séries de 10 Repetições",
        img: "./agachamento-livre.gif",
      },
      {
        id: Date.now() + 21,
        nome: "Leg Press",
        descricao: "3 Séries de 12 Repetições",
        img: "./leg-press.gif",
      },
      {
        id: Date.now() + 22,
        nome: "Cadeira Extensora",
        descricao: "3 Séries de 12 Repetições",
        img: "./cadeira-extensora.gif",
      },
      {
        id: Date.now() + 23,
        nome: "Cadeira Flexora",
        descricao: "3 Séries de 12 Repetições",
        img: "./cadeira-flexora.gif",
      },
      {
        id: Date.now() + 24,
        nome: "Stiff",
        descricao: "3 Séries de 10 Repetições",
        img: "./stiff.gif",
      },
      {
        id: Date.now() + 25,
        nome: "Avanço com Halteres",
        descricao: "3 Séries de 12 Passos",
        img: "./avanco.gif",
      },
      {
        id: Date.now() + 26,
        nome: "Agachamento Smith",
        descricao: "3 Séries de 12 Repetições",
        img: "./agachamento-smith.gif",
      },
      {
        id: Date.now() + 27,
        nome: "Elevação de Quadril",
        descricao: "3 Séries de 15 Repetições",
        img: "./elevacao-quadril.gif",
      },
      {
        id: Date.now() + 28,
        nome: "Cadeira Abdutora",
        descricao: "3 Séries de 12 Repetições",
        img: "./cadeira-abdutora.gif",
      },
      {
        id: Date.now() + 29,
        nome: "Panturrilha em Pé",
        descricao: "3 Séries de 20 Repetições",
        img: "./panturrilha.gif",
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