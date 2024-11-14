import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CssNovo.css';
import './TelaADM';

function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visualização da senha
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();

  const handleCadastroRedirect = () => {
    navigate('/cadastro');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha === "ADM") {
      navigate('/TelaADM'); 
    } else {
      setShowPopup(true); 
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false); 
    navigate('/perfil'); 
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
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
              <input
                className="input"
                type={showPassword ? "text" : "password"} // Alterna o tipo de input entre texto e senha
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <div className="div-senha">
                <input
                  className='mostrar-senha'
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label>Mostrar Senha</label>
              </div>
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
          {/** espaço em branco */}
        </div>
      </div>
    </div>
  );
}

export default Login;
