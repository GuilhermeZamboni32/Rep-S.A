import React, { useState } from 'react'
import './TelaDietaEdit.css'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import DietaEdit from './DietaEdit'

function TelaDietaEdit() {
  const navigate = useNavigate()
  const [dietas, setDietas] = useState([
    {
      id: Date.now(),
      nome: "Café da manhã",
      descricao: `1 copo de leite ou iogurte natural.||
      \n2 fatias de pão integral com queijo branco ou cottage.||
      \n1 porção de fruta (banana, mamão ou maçã).||
      \n1 colher de chá de mel ou geleia natural.`,
      img: "./Icons/cafe-colorido.png"
    },
    {
      id: Date.now() + 1,
      nome: "almoço",
      descricao: `"1 porção de arroz integral e feijão.||
      \n1 filé de frango grelhado ou peixe assado.||
      \n1 Salada variada com folhas verdes, tomate, cenoura e azeite de oliva.||
      \n1 suco natural sem açúcar."`,
      img: "./Icons/almoco-colorido.png"
    },
    {
      id: Date.now() + 2,
      nome: "jantar",
      descricao: `"Sopa de legumes com carne magra ou frango desfiado.||
      \n1 fatia de pão integral ou torrada.||
      \nChá de ervas sem açúcar."`,
      img: "./Icons/jantar-colorido.png"
    },
  ])

  function voltar(){
    navigate('/perfil');
  }

  const handleSave = (id, updatedDieta) => {
    setDietas(dietas.map(dieta => 
      dieta.id === id ? { ...dieta, ...updatedDieta } : dieta
    ));
  };

  const handleDelete = (id) => {
    setDietas(dietas.filter(dieta => dieta.id !== id));
  };



  return (
    <div className='container-dieta-edit'>
      <Navbar />
      <div className='div-grup-dieta-edit'>
        <div className='div-topo-edit'>
          <div className='topo-es-edit'>
            <h1 className='texto-dieta-edit'>Editar Dietas</h1>
          </div>

          <div className='topo-me-edit'></div>

          <div className='topo-di-edit'>
            <button className='butoon-voltar-edit' onClick={voltar}>
              <h1 className='texto-dieta-edit'>Voltar</h1>
            </button>
          </div>
        </div>

        <div className='div-baixo-edit'>
          <div className='lista-cards-dieta-edit'>
            {dietas.map((dieta) => (
              <DietaEdit
                key={dieta.id}
                id={dieta.id}
                nome={dieta.nome}
                descricao={dieta.descricao}
                img={dieta.img}
                onSave={(updatedDieta) => handleSave(dieta.id, updatedDieta)}
                onDelete={() => handleDelete(dieta.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelaDietaEdit