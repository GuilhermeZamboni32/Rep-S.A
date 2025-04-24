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
  // const { updateUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Submitting form:', form)
    
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email_user: form.email_user,
        password_user: form.password_user
      });

      console.log('Login response:', response.data)
      
      updateUser({
        id: response.data.id_user,
        username: response.data.username,
        email: response.data.email_user,
        age: response.data.age_user,
        token: response.data.token
      });
      
      navigate('/');
    } catch (err) {
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
            Don't have an account? <Link to="/cadastro">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

// * Codigo do gui
// import React, { useState, useContext } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../Components/Navbar';
// import "./Login.css";
// import { GlobalContext } from '../Context/GlobalContext';

// function Login() {
//   const [form, setForm] = useState({ username: '', password_user: '' });
//   const [formErrors, setFormErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const { setUser } = useContext(GlobalContext);
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const errors = {};
//     if (!form.username.trim()) {
//       errors.username = 'Email ou nome é obrigatório';
//     }
//     if (!form.password_user) {
//       errors.password_user = 'Senha é obrigatória';
//     } else if (form.password_user.length < 6) {
//       errors.password_user = 'A senha deve ter pelo menos 6 caracteres';
//     }
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validateForm();
//     setFormErrors(errors);
    
//     if (Object.keys(errors).length > 0) {
//       return;
//     }

//     setLoading(true);
//     setError('');
    
//     try {
//       const response = await axios.post('http://localhost:3000/login', form);
//       setUser(response.data);
//       localStorage.setItem('user', JSON.stringify(response.data));
//       navigate('/');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Erro ao realizar o login. Por favor, tente novamente.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user starts typing
//     if (formErrors[name]) {
//       setFormErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   return (
//     <div className='container-login'>
//       <Navbar />
//       <div className='center-site'>
//         <div className="container-card">
//           <h2 className="login-txt">Login</h2>
//           {error && <div className="error-message">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <input
//                 className={`inputs ${formErrors.username ? 'input-error' : ''}`}
//                 name="username"
//                 placeholder="Email ou nome"
//                 value={form.username}
//                 onChange={handleChange}
//               />
//               {formErrors.username && <span className="error-text">{formErrors.username}</span>}
//             </div>
//             <div className="input-group">
//               <input
//                 className={`inputs ${formErrors.password_user ? 'input-error' : ''}`}
//                 name="password_user"
//                 placeholder="Senha"
//                 type={showPassword ? 'text' : 'password'}
//                 value={form.password_user}
//                 onChange={handleChange}
//               />
//               {formErrors.password_user && <span className="error-text">{formErrors.password_user}</span>}
//             </div>
//             <div className="checkbox-container">
//               <input
//                 type="checkbox"
//                 id="showPassword"
//                 checked={showPassword}
//                 onChange={(e) => setShowPassword(e.target.checked)}
//               />
//               <label htmlFor="showPassword">Mostrar senha</label>
//             </div>
//             <button 
//               className="botao-login" 
//               type="submit" 
//               disabled={loading}
//             >
//               {loading ? 'Carregando...' : 'Login'}
//             </button>
//           </form>
//           <div className="register-link">
//             Não tem uma conta? <Link to="/register">Registre-se</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;