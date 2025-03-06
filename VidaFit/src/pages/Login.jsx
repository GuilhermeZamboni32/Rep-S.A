import React from 'react'
import Navbar from '../Components/Navbar'
import "./Login.css"
import axios from 'axios'

function Login() {

  const [usuario, setUsuario] = useState([])
  const [form, setForm] = useState({username: '', password_user: ''})
  const [showPassword, setShowPassword] = useState(false)
  const { setUser } = useUser() || {}

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }


  return (
    
    <div className='container-login'>
      <Navbar />
     <center><h1>Login</h1></center>

    </div>

  
  )
}

export default Login