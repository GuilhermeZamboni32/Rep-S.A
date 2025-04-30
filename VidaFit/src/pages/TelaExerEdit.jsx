import React, { useState } from 'react'
import './telaExerEdit.css'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import ExercicioEdit from './ExercicioEdit'

function TelaExerEdit() {
  const navigate = useNavigate()
  const [exercicios, setExercicios] = useState([
    {
      id: Date.now(),
      nome: "Supino",
      descricao: "3 Series de 12 Repetições",
      img: "./supino.gif"
    },
    {
      id: Date.now() + 1,
      nome: "Crossover",
      descricao: "3 Series de 12 Repetições",
      img: "./crossover.gif"
    },
    {
      id: Date.now() + 2,
      nome: "Flexão",
      descricao: "3 Series de 12 Repetições",
      img: "./flexao.webp"
    },
    {
      id: Date.now() + 3,
      nome: "crucifixo",
      descricao: "3 Series de 12 Repetições",
      img: "./crusifixo.gif"
    }
  ])

  function voltar(){
    navigate('/perfil');
  }

  const handleSave = (id, updatedExercicio) => {
    setExercicios(exercicios.map(exercicio => 
      exercicio.id === id ? { ...exercicio, ...updatedExercicio } : exercicio
    ));
  };

  const handleDelete = (id) => {
    setExercicios(exercicios.filter(exercicio => exercicio.id !== id));
  };

  const handleAdd = () => {
    const newExercicio = {
      id: Date.now(),
      nome: "Novo Exercício",
      descricao: "3 Series de 12 Repetições",
      img: "./supino.gif"
    };
    setExercicios([...exercicios, newExercicio]);
  };

  return (
    <div className='container-exer-edit'>
      <Navbar />
      <div className='div-grup-exer-edit'>
        <div className='div-topo-edit'>
          <div className='topo-es-edit'>
            <h1 className='texto-exer-edit'>Editar Exercícios</h1>
          </div>

          <div className='topo-me-edit'></div>

          <div className='topo-di-edit'>
            <button className='butoon-add-edit' onClick={handleAdd}>
              <h1 className='texto-exer-edit'>+</h1>
            </button>
            <button className='butoon-voltar-edit' onClick={voltar}>
              <h1 className='texto-exer-edit'>Voltar</h1>
            </button>
          </div>
        </div>

        <div className='div-baixo-edit'>
          <div className='lista-cards-exer-edit'>
            {exercicios.map((exercicio) => (
              <ExercicioEdit
                key={exercicio.id}
                id={exercicio.id}
                nome={exercicio.nome}
                descricao={exercicio.descricao}
                img={exercicio.img}
                onSave={(updatedExercicio) => handleSave(exercicio.id, updatedExercicio)}
                onDelete={() => handleDelete(exercicio.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelaExerEdit