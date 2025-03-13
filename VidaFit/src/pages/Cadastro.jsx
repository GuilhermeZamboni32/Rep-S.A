import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import "./Cadastro.css"
import { Link } from 'react-router-dom'
import axios from  'axios'

function Cadastro() {

  const [users, setUsers] = useState({username:'', password_user:'', email_user:'', age_user:''})
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleReister = async (e) => {
    if (confirmPassword != users.password_user){
      alert('Senhas não conferem!')
      return
    }else if (users.password_user >= 5 ||  !/[A-Z]/.test(users.password_user) || !/[0-9]/.test(users.password_user)) {
      alert('Senha fraca, adicione letras maiusculas e numeros!')
      return
    }else{
      e.preventDefault()
        try {
          const response = await axios.post('http://localhost:3000/users', users)
            if (response.status === 201) {
              setUsers(response.data) 
              alert('Usuário cadastrado com sucesso!')
        }
        } catch (error) {
            console.error('Error:', error)
          alert('Erro ao cadastrar usuário, tente novamente!', error)
        }
      }
    }

  return (
    
    <div className='container-cadastro'>
      <Navbar />
        <div className='div-cadas'>
        <div className="espaco"></div>
        
        <div className='cadas-inf'>
          <div className="cadas-input">
              <input className='texto-cadas' type="text" placeholder='Nome :' value={users.username} onChange={(e) => setUsers({ ...users, username: e.target.value })}/>
              <input className='texto-cadas' type="text" placeholder='Data de nascimento :' value={users.age_user} onChange={(e) => setUsers({ ...users, age_user: e.target.value })} />
              <input className='texto-cadas' type="text" placeholder='Email :' value={users.email_user} onChange={(e) => setUsers({ ...users, email_user: e.target.value })} />
              <input className='texto-cadas' type={showPassword ? 'text' : 'password'} placeholder='Senha :' value={users.password_users} onChange={(e) => setUsers({ ...users, password_user: e.target.value })} />
              <input className='texto-cadas' type={showPassword ? 'text' : 'password'} placeholder='Comfirmar Senha :' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <div className="espaco"></div>
            </div>
<<<<<<< HEAD

              <button className='button-cadastro'>cadastrar</button>
=======
            <div className="checkbox-container">
              <input type="checkbox" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)}/>
              <label>Mostrar senha</label>
            </div>
              <button className='button' onClick={handleReister}>cadastrar</button>
>>>>>>> eb6948e4fccb04c4626e7314daa9bfdec3231092
          
          </div>
        </div>
      </div>
    
  )
}

export default Cadastro