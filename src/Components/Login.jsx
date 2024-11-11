import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CssNovo.css';

function Login() {
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar o popup
  const navigate = useNavigate();

  const handleCadastroRedirect = () => {
    navigate('/cadastro');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação, se necessário

    setShowPopup(true); // Exibe o popup de sucesso do login
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Fecha o popup
    navigate('/perfil'); // Redireciona para a tela de perfil
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-topo">
          <div className="login-topo-esquerda">
            <div className="imagem">
              <img src="logo-agenda.png" alt="Logo" className="logo" onClick={() => navigate('/')} />
            </div>
          </div>
          <div className="login-topo-meio">
            <h2>Login de Usuário</h2>
          </div>
          <div className="login-topo-direita">
            <button className="login-botao-voltar" onClick={handleBack}>Voltar</button>
          </div>
        </div>

        <div className="login-meio">
          <div className="login-info">
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                className="input"
                type="text"
                placeholder="CPF"
                required
              />
              <input
                className="input"
                type="password"
                placeholder="Senha"
                required
              />
              <button type="submit" className="login-botao-login">Login</button>
            </form>
          </div>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3>Login realizado com sucesso!</h3>
              <p>Você será redirecionado para o seu perfil.</p>
              <button onClick={handlePopupClose}>OK</button>
            </div>
          </div>
        )}
        
        <div className="login-baixo">
          {/**espaço em branco */}
        </div>
      </div>
    </div>
  );
}

export default Login;
