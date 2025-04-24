import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import "./Login.css";
import { GlobalContext } from '../Context/GlobalContext';

function Login() {
  const [form, setForm] = useState({ email_user: '', password_user: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { updateUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:3000/login', {
        email_user: form.email_user,
        password_user: form.password_user
      });
      
      // Update global context with user data
      updateUser({
        id: response.data.id_user,
        username: response.data.username,
        email: response.data.email_user,
        age: response.data.age_user,
        token: response.data.token
      });
      
      // Redirect to home page
      navigate('/');
    } catch (err) {
      // Handle error and set error message
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email_user"
              value={form.email_user}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password_user"
              value={form.password_user}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
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