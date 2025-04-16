import { useState } from 'react';
import React from 'react'
import Funcionario from './Funcionario'
import './Ad_Funci.css'
//import Navbar from '../Components/Navbar'
//import { Link } from 'react-router-dom'

function Ad_Funci() {

    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')
    const [inputProfi, setInputProfi] = useState('')


    const [funci, setfunci] = useState([
        {
          id: Date.now(),
          nome: "Sauvino da Silva",
          descricao: "Coach de saúde focado em performance e bem-estar, integrando estratégias de treino funcional e nutrição personalizada.",
          img: "./fisica-2.jpg",
          profi: "Coach de saúde"
        },
        {
          id: Date.now() + 1,
          nome: "Maria Machado",
          descricao: "Nutricionista especializada em reeducação alimentar e dietas balanceadas para otimizar a saúde e o rendimento físico.",
          img: "./nutri-0.jpg",
          profi: "Nutricionista"
        },
        {
          id: Date.now() + 2,
          nome: "Manuela Gomes",
          descricao: "Personal Trainer com foco em condicionamento físico, emagrecimento e fortalecimento muscular.",
          img: "./fisica-11.jpg",
          profi: "Personal Trainer"
        },
        {
          id: Date.now() + 3,
          nome: "Victor das Neves",
          descricao: "Nutricionista esportivo, trabalha com dietas específicas para atletas e praticantes de atividade física.",
          img: "./nutri-6.jpg",
          profi: "Nutricionista"
        },
        {
          id: Date.now() + 4,
          nome: "Gustavo Garcia",
          descricao: "Coach de saúde com abordagem holística, combinando exercícios, hábitos saudáveis e motivação diária.",
          img: "./fisica-0.jpg",
          profi: "Coach de saúde"
        },
        {
          id: Date.now() + 5,
          nome: "Julia Machado",
          descricao: "Especialista em bem-estar físico, unindo conhecimento em treinamento funcional e alimentação consciente.",
          img: "./fisica-4.jpg",
          profi: "Coach de saúde"
        },
        {
          id: Date.now() + 6,
          nome: "Miguel Duarte",
          descricao: "Personal Trainer dedicado à transformação corporal por meio de treinos personalizados e acompanhamento constante.",
          img: "fisica-5.jpeg",
          profi: "Personal Trainer"
        },
        {
          id: Date.now() + 7,
          nome: "Enzo Carvalho",
          descricao: "Nutricionista com foco em dietas adaptadas a diferentes estilos de vida e objetivos físicos.",
          img: "nutri-1.jpg",
          profi: "Nutricionista"
        },
        {
          id: Date.now() + 8,
          nome: "Lucas Almeida",
          descricao: "Coach motivacional de saúde, especialista em promover equilíbrio entre mente, corpo e alimentação.",
          img: "fisica-1.jpg",
          profi: "Coach de saúde"
        },
        {
          id: Date.now() + 9,
          nome: "Lara Monteir",
          descricao: "Nutricionista clínica com foco em alimentação funcional e prevenção de doenças crônicas.",
          img: "nutri-2.png",
          profi: "Nutricionista"
        },
        {
          id: Date.now() + 10,
          nome: "Valentina Costa",
          descricao: "Nutricionista apaixonada por transformar hábitos alimentares em estilo de vida saudável e sustentável.",
          img: "nutri-3.jpg",
          profi: "Nutricionista"
        },
        {
          id: Date.now() + 11,
          nome: "Bianca Souza",
          descricao: "Personal Trainer com experiência em musculação, HIIT e treinos para fortalecimento feminino.",
          img: "fisica-3.jpg",
          profi: "Personal Trainer"
        },
        {
          id: Date.now() + 12,
          nome: "Isadora Lima",
          descricao: "Nutricionista focada em performance esportiva, com planos alimentares para cada fase do treino.",
          img: "nutri-4.jpg",
          profi: "Nutricionista"
        },
        {
          id: Date.now() + 13,
          nome: "Rafael Barros",
          descricao: "Coach de saúde voltado para desenvolvimento físico e mental, incentivando a disciplina e foco.",
          img: "fisica-6.jpg",
          profi: "Coach de saúde"
        },
        {
          id: Date.now() + 14,
          nome: "Arthur Nogueira",
          descricao: "Consultor de saúde e bem-estar, especialista em orientar rotinas alimentares e físicas eficazes.",
          img: "nutri-5.jpg",
          profi: "Nutricionista"
        },
        {
          id: Date.now() + 15,
          nome: "Pedro Gonçalves",
          descricao: "Coach integrativo que alia nutrição esportiva e treino de alta performance para resultados reais.",
          img: "nutri-7.webp",
          profi: "Coach de saúde"
        },
        {
          id: Date.now() + 16,
          nome: "Caio Antunes",
          descricao: "Personal Trainer com foco em treinos personalizados para emagrecimento, hipertrofia e resistência.",
          img: "fisica-7.jpg",
          profi: "Personal Trainer"
        },
        {
          id: Date.now() + 17,
          nome: "Felipe Moreira",
          descricao: "Nutricionista especializado em alimentação natural, detox e dietas anti-inflamatórias.",
          img: "nutri-8.jpeg",
          profi: "Nutricionista"
        },
        {
          id: Date.now() + 18,
          nome: "Isadora Lima",
          descricao: "Coach de saúde com foco em nutrição comportamental e evolução contínua do bem-estar físico.",
          img: "fisica-8.jpg",
          profi: "Coach de saúde"
        },
        {
          id: Date.now() + 19,
          nome: "Marina Silveira",
          descricao: "Consultora de saúde integrativa, une práticas alimentares equilibradas com treinos adaptativos.",
          img: "nutri-9.avif",
          profi: "Nutricionista"
        },
        {
          id: Date.now() + 20,
          nome: "Elisa Freitas",
          descricao: "Nutricionista funcional voltada para qualidade de vida, controle de peso e energia diária.",
          img: "nutri-10.avif",
          profi: "Nutricionista"
        },
        {
          id: Date.now() + 21,
          nome: "Manuela Rocha",
          descricao: "Personal Trainer focada em treinos para iniciantes, recuperação física e longevidade ativa.",
          img: "fisica-9.webp",
          profi: "Personal Trainer"
        },
        {
          id: Date.now() + 22,
          nome: "Tainá Vasconcelos",
          descricao: "Instrutora de treinamento funcional com ênfase em saúde da mulher e condicionamento físico.",
          img: "fisica-10.jpg",
          profi: "Personal Trainer"
        }
      
      
      
        
        
          
          
          
      ])

      function CadastrarFuncionario(){
        const Funcionario = {
      
          id: Date.now(),
          nome: inputNome,
          descricao: inputDescricao,
          img: inputImagem,
          profi: inputProfi
      
        }
      
        setfunci([...funci, Funcionario])
      }


     
     

  return (
    
    
    <div className='container-corpo'>



 <div className='lista-cards'>
   {funci.map((funcionario) => (
         <Funcionario key={funcionario.id} nome={funcionario.nome} profi={funcionario.profi} descricao={funcionario.descricao} img={funcionario.img} />

   ))}
 </div>


 <div className='formCadastro'>
     <div className="input-contaner">
        <label htmlFor="">Nome:</label>
        <input type="text" 
        value={inputNome}
        onChange={(Event) => setInputNome(Event.target.value)}
        />
     </div>
     <div className="input-contaner">
         <label htmlFor="">tipo:</label>
         <input type="text" 
        value={inputProfi}
        onChange={(Event) => setInputImagem(Event.target.value)}
        />
     </div>


     <div className="input-contaner">
         <label htmlFor="">Descrição:</label>
         <input type="text" 
        value={inputDescricao}
        onChange={(Event) => setInputDescricao(Event.target.value)}
        />
     </div>

     <div className="input-contaner">
         <label htmlFor="">Imagem:</label>
         <input type="text" 
        value={inputImagem}
        onChange={(Event) => setInputImagem(Event.target.value)}
        />
     </div>

     <button onClick={CadastrarFuncionario}>Cadastrar</button>
    </div>



 </div>
  )
}

export default Ad_Funci