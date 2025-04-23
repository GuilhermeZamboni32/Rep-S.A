import React, { useState } from 'react'

const DietaCard = ({ nome, descricao, img }) => {
  return (
    <div className="card-dieta">
      <img src={img} alt={nome} />
      <h3>{nome}</h3>
      <div className="descricao-dieta">
        {descricao.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  )
}

function Ad_Dieta() {
    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')

    const [dieta, setDieta] = useState([
        {
          id: Date.now(),
          nome: "Café da manhã",
          descricao: "1 copo de leite ou iogurte natural.\n2 fatias de pão integral com queijo branco ou cottage.\n1 porção de fruta (banana, mamão ou maçã).\n1 colher de chá de mel ou geleia natural.",
          img: "./fisica-2.jpg"
        },
        {
          id: Date.now() + 1,
          nome: "Almoço",
          descricao: "1 porção de arroz integral e feijão.\n1 filé de frango grelhado ou peixe assado.\n1 Salada variada com folhas verdes, tomate, cenoura e azeite de oliva.\n1 suco natural sem açúcar.",
          img: "./fisica-2.jpg"
        },
        {
          id: Date.now() + 2,
          nome: "Jantar",
          descricao: "Sopa de legumes com carne magra ou frango desfiado.\n1 fatia de pão integral ou torrada.\nChá de ervas sem açúcar.",
          img: "./fisica-2.jpg"
        },
    ])

    function CadastrarDieta(){
        const novaDieta = {
          id: Date.now(),
          nome: inputNome,
          descricao: inputDescricao,
          img: inputImagem
        }
      
        setDieta([...dieta, novaDieta])
        setInputNome('')
        setInputDescricao('')
        setInputImagem('')
    }

  return (
    <div className='container-corpo-exer'>
      <div className='lista-cards-exer'>
        {dieta.map((dieta) => (
          <DietaCard 
            key={dieta.id}
            nome={dieta.nome}
            descricao={dieta.descricao}
            img={dieta.img}
          />
        ))}
      </div>
   
      <div className='formCadastro-exer'>
        <div className="input-contaner-exer">
          <label htmlFor="">Refeição:</label>
          <input 
            type="text" 
            value={inputNome}
            onChange={(Event) => setInputNome(Event.target.value)}
          />
        </div>
    
        <div className="input-contaner-exer">
          <label htmlFor="">Descrição:</label>
          <textarea 
            value={inputDescricao}
            onChange={(Event) => setInputDescricao(Event.target.value)}
            rows="4"
          />
        </div>
    
        <div className="input-contaner-exer">
          <label htmlFor="">Imagem:</label>
          <input 
            type="text" 
            value={inputImagem}
            onChange={(Event) => setInputImagem(Event.target.value)}
          />
        </div>
        <button onClick={CadastrarDieta}>Cadastrar Refeição</button>
      </div>
    </div>
  )
}

export default Ad_Dieta