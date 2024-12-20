import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CssNovo.css';

function Cadastro() {
  const [usuario, setusuario] = useState({
    nome_completo: '',
    data_nascimento: '',
    senha_usuario: '',
    cpf: '',
    endereco: ''
  });
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (confirmarSenha !== usuario.senha_usuario) {
      setPopupMessage('As senhas não conferem! Confira se as senhas estão corretas.');
      setShowPopup(true);
      return;
    }

    try {
      await axios.post('http://localhost:3000/usuarios', usuario);
      setPopupMessage('Cadastro realizado com sucesso! Você será redirecionado para o perfil.');
      setShowPopup(true);
    } catch (error) {
      console.error('Erro durante o cadastro:', error.response?.data || error.message);
      setPopupMessage(error.response?.data?.mensagem || 'Ocorreu um erro durante o cadastro. Por favor, tente novamente.');
      setShowPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    if (popupMessage.includes('sucesso')) {
      navigate('/login'); 
    }
  };

  return (
    <div className="cadastro-body">
      <div className="cadastro-container">
        <div className="cadastro-topo">
          <div className="cadastro-topo-esquerda">
            <div className="cadastro-topo-esquerda-esquerda">
            <div className="imagem">
              <img src="logo-agenda.png" alt="Logo" className="logo" onClick={() => navigate('/TelaInicial')} />
             </div>
            </div>
          </div>
          <div className="cadastro-topo-meio">
            <h2>Cadastro de Usuário</h2>
          </div>
          <div className="cadastro-topo-direita">
          <button className='button' onClick={() => navigate('/TelaInicial')} >Voltar</button>
            <div className="cadastro-topo-direita-direita"></div>
          </div>
        </div>

        <div className="cadastro-meio">
          <div className="cadastro-info">
            <form className="cadastro-form" onSubmit={handleSubmit}>
              <input
                className="input"
                type="text"
                placeholder="Nome Completo"
                value={usuario.nome_completo}
                onChange={(e) => setusuario({ ...usuario, nome_completo: e.target.value })}
                required
              />
              <input
                className="input"
                type="date"
                value={usuario.data_nascimento}
                onChange={(e) => setusuario({ ...usuario, data_nascimento: e.target.value })}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="CPF"
                value={usuario.cpf}
                onChange={(e) => setusuario({ ...usuario, cpf: e.target.value })}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="Endereço"
                value={usuario.endereco}
                onChange={(e) => setusuario({ ...usuario, endereco: e.target.value })}
                required
              />
              <div className="inputs-senhas">
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  value={usuario.senha_usuario}
                  onChange={(e) => setusuario({ ...usuario, senha_usuario: e.target.value })}
                  required
                />
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirmar Senha"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  required
                />
                <label className="label-senha">
                  <input
                    className="mostra-senha"
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  Mostrar senha
                </label>
              </div>
              <button type="submit" className="cadastro-botao-cadastro"  onClick={() => navigate('/Cadastro')} >Cadastrar</button>
            </form>
          </div>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3>{popupMessage.includes('sucesso') ? 'Cadastro realizado com sucesso!' : 'Erro!'}</h3>
              <p>{popupMessage}</p>
              <button onClick={() => navigate('/Login')}>OK</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cadastro;
