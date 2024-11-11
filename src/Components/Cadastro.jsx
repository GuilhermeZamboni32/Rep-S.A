import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CssNovo.css';

function Cadastro() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar o popup
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    const dadosCadastro = {
      nomeCompleto,
      dataNascimento,
      cpf,
      endereco,
      senha,
    };

    console.log('Dados de Cadastro:', dadosCadastro);

    setShowPopup(true); // Exibe o popup de confirmação
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Fecha o popup
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className="cadastro-body">
      <div className="cadastro-container">
        <div className="cadastro-topo">
          <div className="cadastro-topo-esquerda">
            <div className="imagem">
              <img src="logo-agenda.png" alt="Logo" className="logo" onClick={() => navigate('/')} />
            </div>
          </div>
          <div className="cadastro-topo-meio">
            <h2>Cadastro de Usuário</h2>
          </div>
          <div className="cadastro-topo-direita">
            <button onClick={() => navigate('/')} className="cadastro-botao-voltar">Voltar</button>
          </div>
        </div>

        <div className="cadastro-meio">
          <div className="cadastro-info">
            <form className="cadastro-form" onSubmit={handleSubmit}>
              <input
                className="input"
                type="text"
                placeholder="Nome Completo"
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
                required
              />
              <input
                className="input"
                type="date"
                placeholder="Data de Nascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                required
              />
              <input
                className="input"
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <input
                className="input"
                type="password"
                placeholder="Confirmar Senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
              />
              <button type="submit" className="cadastro-botao-cadastro">Cadastrar</button>
            </form>
          </div>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3>Cadastro realizado com sucesso!</h3>
              <p>Seu cadastro foi concluído. Você será redirecionado para a página de login.</p>
              <button onClick={handlePopupClose}>OK</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cadastro;
