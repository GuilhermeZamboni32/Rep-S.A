import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaADM.css';
import BarraPesquisa from './BarraPesquisa/BarraPesquisa';

function TelaADM() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nome: "Nome Completo",
    cpf: "000.000.000-00",
    nascimento: "2000-01-01",
    endereco: "Endereço",
    senha: "******",
  });

  const handleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Aqui você pode adicionar a lógica para salvar as informações editadas, por exemplo, enviando para um backend
    setIsEditing(false);
    alert("Informações salvas com sucesso!");
  };

  return (
    <div className='perfil-adm-Body'>
      <div className="perfil-adm-container">
        {/* Topo */}
        <div className='perfil-topo'>
          <div className='perfil-topo-esquerda'>
            <img 
              src="logo-agenda.png" 
              alt="Logo" 
              className="header-icon" 
              onClick={() => navigate('/')} 
            />
          </div>
          <div className='perfil-topo-meio'>
            <h1>Tela de Administrador</h1>
          </div>
          <div className='perfil-topo-direita'>
            <button className='perfil-botao-login' onClick={() => navigate('/login')}>Voltar</button>
          </div>
        </div>

        {/* Meio */}
        <div className='perfil-meio'>
          <div className='perfil-meio-esquerda'>
            <div className="secao-perfil">
              <div className='foto-perfil'>
                <img src="perfil-adm.png" alt="Administrador" className="big-image" />
              </div>
              <form className="perfil-info-user" onSubmit={(e) => e.preventDefault()}>
                <input 
                  className='input-user' 
                  type="text" 
                  name="nome" 
                  value={userInfo.nome} 
                  onChange={handleChange} 
                  disabled={!isEditing} 
                  placeholder="Nome completo" 
                />
                <input 
                  className='input-user' 
                  type="date" 
                  name="nascimento" 
                  value={userInfo.nascimento} 
                  onChange={handleChange} 
                  disabled={!isEditing} 
                />
                <input 
                  className='input-user' 
                  type="text" 
                  name="cpf" 
                  value={userInfo.cpf} 
                  onChange={handleChange} 
                  disabled={!isEditing} 
                  placeholder="CPF" 
                />
                <input 
                  className='input-user' 
                  type="text" 
                  name="endereco" 
                  value={userInfo.endereco} 
                  onChange={handleChange} 
                  disabled={!isEditing} 
                  placeholder="Endereço" 
                />
                <input 
                  className='input-user' 
                  type="password" 
                  name="senha" 
                  value={userInfo.senha} 
                  onChange={handleChange} 
                  disabled={!isEditing} 
                  placeholder="Senha" 
                />
              </form>
              <button className="button" onClick={isEditing ? handleSave : handleEdit}>
                {isEditing ? "Salvar" : "Editar"}
              </button>
            </div>
          </div>

          <div className='perfil-meio-direita'>
            <div className="cards-section">
              <BarraPesquisa />
            </div>
          </div>
        </div>

        {/* Baixo */}
        <div className='perfil-baixo'></div>
      </div>
    </div>
  );
}

export default TelaADM;
