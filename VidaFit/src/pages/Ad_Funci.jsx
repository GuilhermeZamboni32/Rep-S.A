import { useState } from 'react';
import React from 'react'
import Funcionario from './Funcionario'
import Navbar from '../Components/Navbar'
//import { Link } from 'react-router-dom'

function Ad_Funci() {

    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')


    const [funci, setfunci] = useState([
        {
          id: Date.now(),
          nome: "Sauvino da Silva",
          descricao: "Coach de saúde, unindo treino e nutrição para resultados completos. ",
          img: "./edu-fisica-2.jpg"
        },
        {
          id: Date.now() +1,
          nome: "Maria Machado",
          descricao: "Especialista em alimentação e dietas para saúde e desempenho.",
          img: "./nutri.jpg"
        },
        {
          id: Date.now() +2,
          nome: " Eduardo Varela",
          descricao: "Personal Trainer, especialista em exercícios físicos e condicionamento. ",
          img: "./edu-fisica.avif"
        },
        {
          id: Date.now() +3,
          nome: "Thiago das Neves",
          descricao: "Especialista em alimentação e dietas para saúde e desempenho.",
          img: "./nutri-2.jpg"

        },
        {
          id: Date.now() +4,
          nome: "Gustavo Garcia",
          descricao: "Especialista em alimentação e dietas para saúde e desempenho.",
          img: "./edu-fisica-3.jpg"
        }
          
      ])

      function CadastrarFuncionario(){
        const Funcionario = {
      
          id: Date.now(),
          nome: inputNome,
          descricao: inputDescricao,
          img: inputImagem
      
        }
      
        setfunci([...funci, Funcionario])
      }


     
     

  return (
    <div className='container-corpo'>
       {/** <Navbar />*/} 
    

 {/*<div className='container-cards'>

        <Produto nome={"Sapato"}  descricao={"A mais bela junção de sapato e carro já vista na historia!!!"} img={"./sapata.webp"}/>

        <Produto nome={"Sela"}  descricao={"A mais bela sela"} img={"./sela 3.jpg"}/>






   <div className='formCadastro'>
     <div className="input-contaner">
        <label htmlFor="">Produto:</label>
        <input type="text" 
        value={inputNome}
        onChange={(Event) => setInputNome(Event.target.value)}
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




   </div>*/}

  



 <div className='lista-cards'>
   {funci.map((funcionario) => (
         <Funcionario key={funcionario.id} nome={funcionario.nome} descricao={funcionario.descricao} img={funcionario.img}/>

   ))}
 </div>


 <div className='formCadastro'>
     <div className="input-contaner">
        <label htmlFor="">Produto:</label>
        <input type="text" 
        value={inputNome}
        onChange={(Event) => setInputNome(Event.target.value)}
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