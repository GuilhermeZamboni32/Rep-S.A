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
        <Link className="texto" to="/telaexeredit">Tela Exerci Edit</Link>
        <Link className="texto" to="/teladieta">Tela Dieta</Link>
        <Link className="texto" to="/teladietaedit">Tela Dieta Edit</Link> 
        <Link className="texto" to="/perfilprofissional">Perfil Profissional</Link>
        <Link className="texto" to="/profissionalaluno">Profissional Aluno</Link>
        <Link className="texto" to="/Ad_Funci">Ad funci</Link>
        <Link className="texto" to="/Av_notas">notas_avaliaçao</Link>
        <Link className="texto" to="/Avaliacao">Avaliação</Link>
        <Link className="texto" to="/Ad_notas">Adnotas</Link>
       
    </div>
  )
}

export default Navbar