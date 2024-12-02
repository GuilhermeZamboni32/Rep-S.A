import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaPerfil.css';
import BarraPesquisa from './BarraPesquisa/BarraPesquisa';

function TelaPerfil() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nome: "",
    cpf: "",
    nascimento: "",
    endereco: "",
    senha: "",
  });

  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  return (
    <div className='perfil-Body'>
    <div className="perfil-container">

      <div className='perfil-topo'>
        <div className='perfiltopo-esquerda'>
          <img 
            src="logo-agenda.png" 
            alt="Logo" 
            className="header-icon" 
            onClick={() => window.location.href = "/"} 
          />
        </div>

        <div className='perfil-topo-meio'>
          {/** espaço vazio */}
        </div>
        <div className='perfil-topo-direita'>

          <button className='perfil-botao-login' onClick={() => navigate('/login')}>Voltar</button>
        </div>
      </div>
        
      <div className='perfil-meio'>
        <div className='perfil-meio-esquerda'>

           <div className="secao-perfil">
          <div className='foto-perfil'>
          <img src="icone-perfil-2.png" alt="Usuário" className="big-image" />
          </div>

          <form className="perfil-info-user">
            <input className='input-user' type="text" name="nome" value={userInfo.nome} onChange={handleChange} disabled={!isEditing} placeholder="Nome completo" />
            <input className='input-user' type="date" name="nascimento" value={userInfo.nascimento} onChange={handleChange} disabled={!isEditing} />
            <input className='input-user' type="text" name="cpf" value={userInfo.cpf} onChange={handleChange} disabled={!isEditing} placeholder="CPF" />
            <input className='input-user' type="text" name="endereco" value={userInfo.endereco} onChange={handleChange} disabled={!isEditing} placeholder="Endereço" />
            <input className='input-user' type="password" name="senha" value={userInfo.senha} onChange={handleChange} disabled={!isEditing} placeholder="Senha" />
          </form>

          <button className="button" onClick={handleEdit}>
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
      
    </div>
    </div>
  );
}

export default TelaPerfil;
