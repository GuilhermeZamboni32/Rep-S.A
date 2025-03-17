import { Link } from "react-router-dom"
import "./Navbar.css"


function Navbar() {
  return (
    <div className="container-navbar">
        <Link className="texto" to="/">Home</Link>
        <Link className="texto" to="/cadastro">Cadastro</Link>
        <Link className="texto" to="/login"> Login</Link>
        <Link className="texto" to="/perfil">Perfil</Link>
        <Link className="texto" to="/editperfil">Edit Perfil</Link>
        <Link className="texto" to="/telaexer">Tela Exerci</Link>
        <Link className="texto" to="/telaexeredit">Tela Exerci edit</Link>
        <Link className="texto" to="/Avaliacao">Avaliação</Link>

    </div>
  )
}

export default Navbar