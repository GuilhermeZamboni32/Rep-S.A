import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../Components/Navbar'
import "./Login.css"
import axios from 'axios'
import { useUser } from '../Context/UserContext'



function Login() {

 /* const [form, setForm] = useState({username: '', password_user: ''})
  const [showPassword, setShowPassword] = useState(false)
  const { user, setUser } = useContext(useUser) || 
*/

// TODO: arrumar essa bagaça
//   *Bucar usuario
//   const fetchUsuario = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/users')
//       setFuncionarios(response.data);
//     } catch (error) {
//       console.error('Error fetching funcionarios:', error)
//     }
//   }

//   useEffect(() => {
//     fetchUsuario()
//   }, [])

//  *Verificar o login e atualiza o usuario no user
//   const handleLogin = () => {
//     //const u = user.find((user) => user.username === form.username && user.password_user === form.password_user)
//     if (!u) {
//       alert('Usuário ou senha inválidos!')
//     } else {
//       alert('Login efetuado com sucesso!')
//       navigate('/Home')
//     }
//     setUser(u)
//   }


  return (
    
    <div className='container-login'>
      <Navbar />
        <div className='center-site'>
          <div className="container-card">
              <label className="login-txt">Login</label>
                  {/*<input className="inputs" placeholder="Email ou nome" value={form.username} onChange={(e) => setForm( {...form, username: e.target.value} )}></input>
                  <input className="inputs" placeholder="Senha" type={showPassword ? 'text' : 'password'} value={form.user_password} onChange={(e) => setForm( {...form, user_password: e.target.value})}></input>*/}
                <div className="checkbox-container">
                 {/**
                  <input type="checkbox" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)}/>
                  * 
                  */} 
                  <label>Mostrar senha</label>
                </div>
             {/**
              * 
             <button className="botao-login" onClick={handleLogin}><h2>Login</h2></button>
              */}

          </div>
        </div>
    </div>

  
  )
}

export default Login