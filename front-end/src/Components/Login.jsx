import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CssNovo.css';
import './TelaADM';

function Login() {
  const [usuario, setusuario] = useState([]);
  const [logar, setlogar] = useState({ cpf: '', senha: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const fetchusuario = async () => {
    try {
      const response = await axios.get('http://localhost:3000/usuarios');
      setusuario(response.data);
    } 
    catch (error) {
      console.error('Erro ao buscar Usuarios:', error);
    }
  };

  useEffect(() => {
    fetchusuario();
  }, []);

  useEffect(() => {
    console.log(logar);
  }, [logar]);

  const handleCadastroRedirect = () => {
    const user = usuario.find((usuarios) => usuarios.cpf === logar.cpf && usuarios.senha_usuario === logar.senha)
    if (!user) {
      setShowPopup(true);
      navigate('/perfil');
      return;
    } else {
      alert('Usuário ou senha inválidos!');
      return
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (logar.senha === "ADM") {
      navigate('/TelaADM');
    } else {
      handleCadastroRedirect();
    }
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
                value={logar.cpf}
                onChange={(e) => setlogar({ ...logar, cpf: e.target.value})}
                required
              />
              <input
                className="input"
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={logar.senha}
                onChange={(e) => setlogar({ ...logar, senha: e.target.value})}
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
            </div>
          </div>
        )}

        <div className="login-baixo">
          {/* espaço em branco */}
        </div>
      </div>
    </div>
  );
}


export default Login;
