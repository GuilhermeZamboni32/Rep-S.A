import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">TelaInicial</Link>
        <Link to="/Cadastro">Cadastro</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Perfil">Perfil</Link>
    </nav>
  )
}

export default Navbar;