import React from 'react'
import './Ad_Exer.css'
import { useState } from 'react'

function Ad_Exer() {
    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')


    const [exer, setexer] = useState([
      {
        id: Date.now(),
        nome: "Supino",
        descricao: "Coach de saúde focado em performance e bem-estar, integrando estratégias de treino funcional e nutrição personalizada.",
        img: "./supino.webp",
      },
      {
        id: Date.now() + 1,
        nome: "Crossover",
        descricao: "Nutricionista especializada em reeducação alimentar e dietas balanceadas para otimizar a saúde e o rendimento físico.",
        img: "./crossover.gif",
      },
      {
        id: Date.now() + 2,
        nome: "Flexão",
        descricao: "Personal Trainer com foco em condicionamento físico, emagrecimento e fortalecimento muscular.",
        img: "./flexao.webp",
      },
      {
        id: Date.now() + 3,
        nome: "crucifixo",
        descricao: "Nutricionista esportivo, trabalha com dietas específicas para atletas e praticantes de atividade física.",
        img: "./crucifixo.webp",
      }
    ])

    function CadastrarExercicio(){
        const exercicio = {
      
          id: Date.now(),
          nome: inputNome,
          descricao: inputDescricao,
          img: inputImagem
      
        }
      
        setfunci([...exer, exercicio])
      }

return (
    

    <div className='container-corpo-exer'>
    
    
     <div className='lista-cards-exer'>
       {exer.map((exercicio) => (
             <exercicio key={exercicio.id} nome={exercicio.nome} descricao={exercicio.descricao} img={exercicio.img}/>
    
       ))}
     </div>
    
   
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
         <button onClick={CadastrarExercicio}>Cadastrar</button>
            
        
    
    </div>
     </div>
      )
}

export default Ad_Exer