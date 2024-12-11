import React, { useState , useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaPerfil.css';
import BarraPesquisa from './BarraPesquisa/BarraPesquisa';
import { GlobalContext } from "../contexts/GlobalContext"
import axios from 'axios';


function TelaPerfil() {
  
  //const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nome_completo: "",
    cpf: "",
    data_nascimento: "",
    endereco: "",
    senha_usuario: "",
  });

  const [Selecteduser, setSelecteduser] = useState (null)

  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (e) => setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const navigate = useNavigate();

  const {usuarioLogado, setUsuarioLogado} = useContext(GlobalContext)

  //console.log(usuarioLogado)

  useEffect( async ()=>{
    const data = await fetchuserbycpf(usuarioLogado)
    console.log('oii')
    console.log(data.find((user)=> user.cpf === usuarioLogado))
}, [usuarioLogado])
 

  const fetchuserbycpf = async (cpf) => {
    try {
        const response = await axios.get(`http://localhost:3000/usuarios/${cpf}`);
        setSelecteduser(response.data); // Seleciona o cliente para edição
        setUserInfo(response.data); // Preenche o formulário com os dados do cliente
        return response.data
    } catch (error) {
        console.error('Erro ao buscar usuarios por cpf:', error);
    }
};

  const handleDelete = () => {
    if (window.confirm("Tem certeza de que deseja excluir este perfil?")) {
      // Aqui você pode integrar com o backend para excluir o perfil
      console.log("Perfil excluído:", userInfo);
      setUserInfo(null); // Limpa os dados do perfil
    }
  };

  if (!userInfo) {
    return  window.location.href = "/";
  }


  return (
    <div className='perfil-Body'>
    <div className="perfil-container">

      <div className='perfil-topo'>
        <div className='perfiltopo-esquerda'>
         <img 
            src="logo-agenda.png" 
            alt="Logo" 
            className="header-icon" 
            onClick={() => window.location.href = "/TelaInicial"} 
  />
  </div>

        <div className='perfil-topo-meio'>
          {/** espaço vazio */}
        </div>
        <div className='perfil-topo-direita'>
        
         
        </div>
      </div>
        
      <div className='perfil-meio'>
        <div className='perfil-meio-esquerda'>

           <div className="secao-perfil">
          <div className='foto-perfil'>
          <img src="icone-perfil-2.png" alt="Usuário" className="big-image" />
          </div>

          <form className="perfil-info-user">
            <input className='input-user' type="text" name="nome" value={userInfo.nome_completo} onChange={handleChange} disabled={fetchuserbycpf} placeholder="Nome completo" />
            <input className='input-user' type="date" name="nascimento" value={userInfo.data_nascimento} onChange={handleChange} disabled={fetchuserbycpf} />
            <input className='input-user' type="text" name="cpf" value={userInfo.cpf} onChange={handleChange} disabled={fetchuserbycpf} placeholder="CPF" />
            <input className='input-user' type="text" name="endereco" value={userInfo.endereco} onChange={handleChange} disabled={fetchuserbycpf} placeholder="Endereço" />
            <input className='input-user' type="password" name="senha" value={userInfo.senha_usuario} onChange={handleChange} disabled={fetchuserbycpf} placeholder="Senha" />
          </form>




          <div className="button-group">
            <button className="button" onClick={handleEdit}>
              {fetchuserbycpf ? "Salvar" : "Editar"}
            </button>
            <button className="button" onClick={handleDelete}>Excluir</button>
            </div>





        </div>
        </div>
        <div className='perfil-meio-direita'>
        <div className="cards-section">
          <BarraPesquisa />
        </div>
        </div>
      </div>

      <div className='perfil-baixo'></div>
      
    </div>
    </div>
  );
}

export default TelaPerfil;
