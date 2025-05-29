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
      const response = await axios.post('http://localhost:3000/login', {
        email_user: form.email_user,
        password_user: form.password_user
      });

      updateUser({
        id: response.data.id_user,
        username: response.data.username,
        email_user: response.data.email_user,
        age_user: response.data.age_user,
        account_enable: response.data.account_enable,
        first_name: response.data.first_name,
        last_name: response.data.last_name, 
       // image: response.data.image,
        gender_user: response.data.gender_user,
        problems_user: response.data.problems_user,
        professional_confirm: response.data.professional_confirm,
        professional_type: response.data.professional_type,
        token: response.data.token
      });
      
      navigate('/perfil'); 

    } catch (err) {
      setError(err.response?.data?.message || 'Ocorreu um erro. Tente novamente');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="container-login">
      <div className='container-login-2'>

      <div className='div-login-esquerda'>
        <div className='espaco-0-l'></div>
        <img className='titulo-logo-l' src="logomarca_VF.png" alt="" />
        <p></p>
      </div>

      <div className='div-login-dirita'>
        <div className="cadas-inf-l">
          <form onSubmit={handleSubmit}>
            <h2 className="titulo-cadas">Login</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                name="email_user"
                value={form.email_user}
                onChange={handleChange}
                className={`inputs ${error ? 'input-error' : ''}`}
                required
              />
              <label>Password:</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password_user"
                value={form.password_user}
                onChange={handleChange}
                className={`inputs ${error ? 'input-error' : ''}`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="botao-login"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
           
            <button
              type="submit"
              disabled={loading}
              className="botao-login"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <p className="register-link">
              Don't have an account? <Link to="/cadastro">Register</Link>
            </p>
            </div>
            
          </form>
        </div>
      </div>

      
      
      </div>
    </div>
  );
}

export default Login;