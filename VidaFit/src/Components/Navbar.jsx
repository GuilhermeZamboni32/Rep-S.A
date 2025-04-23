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
<<<<<<< HEAD
        <Link className="texto" to="/telaexeredit">Tela Exerci edit</Link>
        <Link className="texto" to="/avaliacao">Avaliação</Link>
=======
        <Link className="texto" to="/telaexeredit">Tela Exerci Edit</Link>
        <Link className="texto" to="/teladieta">Tela Dieta</Link>
        <Link className="texto" to="/teladietaedit">Tela Dieta Edit</Link>
        <Link className="texto" to="/Avaliacao">Avaliação</Link>
        <Link className="texto" to="/Ad_Funci">Ad funci</Link>
        <Link className="texto" to="/perfilprofissional">Perfil Profissional</Link>
        <Link className="texto" to="/profissionalaluno">Profissional Aluno</Link>
>>>>>>> de21fe4f775f0a574724e173144b54aa85d2fe50

    </div>
  )
}

export default Navbar