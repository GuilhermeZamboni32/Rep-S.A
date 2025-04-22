import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import "./Login.css";
import { GlobalContext } from '../Context/GlobalContext';

function Login() {
  const [form, setForm] = useState({ username: '', password_user: '' });
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!form.username.trim()) {
      errors.username = 'Email ou nome é obrigatório';
    }
    if (!form.password_user) {
      errors.password_user = 'Senha é obrigatória';
    } else if (form.password_user.length < 6) {
      errors.password_user = 'A senha deve ter pelo menos 6 caracteres';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:3000/login', form);
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Erro ao realizar o login. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className='container-login'>
      <Navbar />
      <div className='center-site'>
        <div className="container-card">
          <h2 className="login-txt">Login</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                className={`inputs ${formErrors.username ? 'input-error' : ''}`}
                name="username"
                placeholder="Email ou nome"
                value={form.username}
                onChange={handleChange}
              />
              {formErrors.username && <span className="error-text">{formErrors.username}</span>}
            </div>
            <div className="input-group">
              <input
                className={`inputs ${formErrors.password_user ? 'input-error' : ''}`}
                name="password_user"
                placeholder="Senha"
                type={showPassword ? 'text' : 'password'}
                value={form.password_user}
                onChange={handleChange}
              />
              {formErrors.password_user && <span className="error-text">{formErrors.password_user}</span>}
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor="showPassword">Mostrar senha</label>
            </div>
            <button 
              className="botao-login" 
              type="submit" 
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Login'}
            </button>
          </form>
          <div className="register-link">
            Não tem uma conta? <Link to="/register">Registre-se</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

//* Codigo antigo, usar como referencia caso necessario

// import React, { useState, useEffect, useContext } from 'react'
// import Navbar from '../Components/Navbar'
// import "./Login.css"
// import axios from 'axios'
// import { useUser } from '../Context/UserContext'
// import  { link } from 'react-router-dom'


// async function Login() {

//   const [form, setForm] = useState({username: '', password_user: ''})
//   const [showPassword, setShowPassword] = useState(false)
//   const { user, setUser } = useContext(useUser)
  


// // TODO: arrumar essa bagaça
// //   *Bucar usuario
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setError('');
//     try {
//     // Send login request to your backend
//     const response = await axios.post('http://localhost:5000/login', formData);

//     // Store user data (you might want to use context or redux for global state)

//     localStorage.setItem('user', JSON.stringify(response.data));
//     // Redirect to dashboard or home page
//     navigate(<Home/>);
//     } catch (err) {
//     setError(err.response?.data?.error || 'Erro ao realizar o login. Por favor, tente novamente.');
//     } finally {
//     setLoading(false);
//     }
// }



// //  *Verificar o login e atualiza o usuario no user
//   const handleLogin = () => {
//   if (!u) {
//     if (!u) {
//       alert('Usuário ou senha inválidos!')
//     } else {
//       alert('Login efetuado com sucesso!')
//       navigate('/Home')
//     }
//     setUser(u)
//   }
//   }  


//   return (
    
//     <div className='container-login'>
//       <Navbar />
//         <div className='center-site'>
//           <div className="container-card">
//               {/* <label className="login-txt">Login</label>
//                   <input className="inputs" placeholder="Email ou nome" value={form.username} onChange={(e) => setForm( {...form, username: e.target.value} )}></input>
//                   <input className="inputs" placeholder="Senha" type={showPassword ? 'text' : 'password'} value={form.user_password} onChange={(e) => setForm( {...form, user_password: e.target.value})}></input> */}
//                 {/* <div className="checkbox-container">
//                   <input type="checkbox" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)}/>
//                   <label>Mostrar senha</label>
//                 </div> */}
//               {/* <button className="botao-login" onClick={handleLogin}><h2>Login</h2></button> */}
//           </div>
//         </div>
//     </div>

  
//   )
// }

// export default Login