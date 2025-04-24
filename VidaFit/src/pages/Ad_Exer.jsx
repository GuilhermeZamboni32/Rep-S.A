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
        descricao: "Supino,Supino,Supino,Supino,Supino,Supino",
        img: "./supino.webp",
      },
      {
        id: Date.now() + 1,
        nome: "Crossover",
        descricao: "Crossover,Crossover,Crossover,Crossover,Crossover",
        img: "./crossover.gif",
      },
      {
        id: Date.now() + 2,
        nome: "Flexão",
        descricao: "Flexão,Flexão,Flexão,Flexão,Flexão,Flexão",
        img: "./flexao.webp",
      },
      {
        id: Date.now() + 3,
        nome: "crucifixo",
        descricao: "crucifixo,crucifixo,crucifixo,crucifixo,crucifixo",
        img: "./crucifixo.webp",
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