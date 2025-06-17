import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import ExercicioEdit from './ExercicioEdit'
import './TelaExerEdit.css'
import axios from 'axios'

function TelaExerEdit() {
  const navigate = useNavigate()
  const [exercicios, setExercicios] = useState([]);
    const [exercicioSelecionado, setExercicioSelecionado] = useState(null);

    function voltar(){ 
    navigate('/perfil');
  }



    const [inputNomeExer, setInputNomeExer] = useState('');
    const [inputRepeticoesExer, setInputRepeticoesExer] = useState('');
    const [inputDescricaoExer, setInputDescricaoExer] = useState('');

    const fetchExercicios = async () => {
        try {
            const response = await axios.get('http://localhost:3000/exercicios');
            setExercicios(response.data);
        } catch (error) {
            console.error('Erro ao buscar exercícios:', error);
        }
    };

    useEffect(() => {
        fetchExercicios();
    }, []);

    useEffect(() => {
        console.log(exercicios);
    }, [exercicios]);

    const cadastrarExercicio = async () => {
        try {
            const exercicio = {
                nome_exer: inputNomeExer,
                repeticoes_exer: inputRepeticoesExer,
                descricao_exer: inputDescricaoExer
            };
            const response = await axios.post('http://localhost:3000/exercicios', exercicio);
            if (response.status === 201) {
                fetchExercicios();
                limparForm();
                alert('Exercicio cadastrado com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao adicionar exercício:', error);
        }
    };

    const salvarExercicio = async () => {
        try {
            const exercicio = {
                nome_exer: inputNomeExer,
                repeticoes_exer: inputRepeticoesExer,
                descricao_exer: inputDescricaoExer
            };
            const response = await axios.put(`http://localhost:3000/exercicios/${exercicioSelecionado.id_exer}`, exercicio);
            if (response.status === 200) {
                fetchExercicios();
                setExercicioSelecionado(null);
                limparForm();
                alert('Exercicio alterado com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao atualizar exercício:', error);
        }
    };

    const buscarExercicioPorId = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/exercicios/${id}`);
            setExercicioSelecionado(response.data);
            exibirExercicio(response.data);
        } catch (error) {
            console.error('Erro ao buscar exercício por ID:', error);
        }
    };

    const deletarExercicio = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/exercicios/${id}`);
            if (response.status === 200) {
                fetchExercicios();
                alert('Exercicio deletado com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao deletar exercício:', error);
        }
    };

    function limparForm() {
        setInputNomeExer('');
        setInputRepeticoesExer('');
        setInputDescricaoExer('');
    }

    function exibirExercicio(exercicio) {
        setInputNomeExer(exercicio.nome_exer || '');
        setInputRepeticoesExer(exercicio.repeticoes_exer || '');
        setInputDescricaoExer(exercicio.descricao_exer || '');
    }

  return (
    <div className='container-exer-edit'>
      <Navbar />
      <div className='div-grup-exer-edit'>
        

        <div className='div-baixo-edit-1'>
          

          <div className='container-exercicio'>
            <h1 className='titulo-exercicio'>Cadastro de exercicios</h1>

            <div className='form-exercicio'>
                <div className="input-container-exercicio">
                    <label htmlFor="nome_exer">Nome do Exercício</label>
                    <input
                        type="text"
                        placeholder="Agachamento"
                        value={inputNomeExer}
                        onChange={(event) => setInputNomeExer(event.target.value)}
                        required
                    />
                </div>
                <div className="input-container-exercicio">
                    <label htmlFor="repeticoes_exer">Repetições</label>
                    <input
                        type="number"
                        placeholder="10"
                        value={inputRepeticoesExer}
                        onChange={(event) => setInputRepeticoesExer(event.target.value)}
                        required
                    />
                </div>
                <div className="input-container-exercicio">
                    <label htmlFor="descricao_exer">Descrição</label>
                    <textarea
                        placeholder="Descrição do exercício"
                        value={inputDescricaoExer}
                        onChange={(event) => setInputDescricaoExer(event.target.value)}
                    />
                </div>
                {exercicioSelecionado && <button type="button-exercicio" onClick={salvarExercicio}>Salvar Alterações</button>}
                {!exercicioSelecionado && <button type="button-exercicio" onClick={cadastrarExercicio}>Cadastrar Exercício</button>}
            </div>

        </div>

         
        </div>

        <div className='div-baixo-edit-2'>
            <section className='exercicios-container'>
                {exercicios.map((exercicio) => (
                    <div key={exercicio.id_exer} className='exercicio'>
                        <h2>{exercicio.nome_exer}</h2>
                        <p>Repetições: {exercicio.repeticoes_exer}</p>
                        <p>Descrição: {exercicio.descricao_exer}</p>
                        <p>ID: {exercicio.id_exer}</p>
                        <button onClick={() => buscarExercicioPorId(exercicio.id_exer)}>Editar</button>
                        <button onClick={() => deletarExercicio(exercicio.id_exer)}>Deletar</button>
                    </div>
                ))}
            </section>

        </div>
      </div>
    </div>
  )
}



{/**<button className='butoon-voltar-edit' onClick={voltar}>
              <h1 className='texto-exer-edit'>Voltar</h1>
            </button> */}

export default TelaExerEdit