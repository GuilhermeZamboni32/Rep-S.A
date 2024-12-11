import React, { useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CssNovo.css';
import './TelaADM';
import { GlobalContext } from "../contexts/GlobalContext"

function Login() {
  const [usuario, setusuario] = useState([]);
  const [logar, setlogar] = useState({ cpf: '', senha: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  
  const {usuarioLogado, setUsuarioLogado} = useContext(GlobalContext)
  const fetchusuario = async () => {
    try {
      const response = await axios.get('http://localhost:3000/usuarios');
      setusuario(response.data);
    } 
    catch (error) {
      console.error('Erro ao buscar Usuarios:', error);
    }
  };

  const navigate = useNavigate();

  //console.log (usuarioLogado)

  useEffect(() => {
    fetchusuario();
  }, []);

  useEffect(() => {
    console.log(usuario);
    console.log(logar);
  }, [logar, usuario]);

  const handleCadastroRedirect = () => {
    const user = usuario.find((usuarios) => usuarios.cpf === logar.cpf && usuarios.senha_usuario === logar.senha)
    if (user) {
      localStorage.setItem('cpf_usuario', usuarioLogado.toString());
      setShowPopup(true);
      setUsuarioLogado(logar.cpf)
      navigate('/TelaPerfil');
      return;
    } else {
      alert('Usuário ou senha inválidos!');
      return
      
    }
  };


  const number = 42;

// Armazenar como string
localStorage.setItem('cpf_usuario', number.toString());

// Recuperar e converter de volta para número
const usuarioLogadocpf = parseInt(localStorage.getItem('cpf_usuario'), 10);

// Verificar o tipo e conteúdo recuperado
//console.log(retrievedNumber);  // 42
//console.log(typeof retrievedNumber); 


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
              <img src="logo-agenda.png" alt="Logo" className="logo" onClick={() => navigate('/TelaInicial')} />
             </div>
          </div>
          <div className="login-topo-meio">
           {/* <h2>Login de Usuário</h2>*/}
          </div>
          <div className="login-topo-direita">
            <button className='button' onClick={() => navigate('/TelaInicial')} >Voltar</button>
            
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
              <button className="login-botao-login">Login</button>
            </form>
          </div>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3>Login realizado com sucesso!</h3>
              <p>Você será redirecionado para o seu perfil.</p>
              <button className="login-botao-login" onClick={() => navigate('/TelaPerfil')}>Login</button>
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
