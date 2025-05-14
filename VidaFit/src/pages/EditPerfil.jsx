import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import './EditPerfil.css'
import { useState, useEffect, userData, useContext} from 'react'
import { GlobalContext } from "../Context/GlobalContext"
import axios from 'axios'

import Modal from '../Components/modalConfirmProficional'
function EditPerfil() {

  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const { user, setUser} = useContext(GlobalContext)
  const [UserData, setUserData] = useState({})



  // data para formato BR 
  const formatDate = (date) => {
    if (!date) return '';
    const parsedDate = new Date(date); 
    const day = String(parsedDate.getDate()).padStart(2, '0'); 
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); 
    const year = parsedDate.getFullYear(); 
    return `${day}/${month}/${year}`; 
};


  async function submitEditProfile(form) {
    try {
      const response = await axios.post('http://localhost:3000/users/edit', {
        email_user: form.email_user,
        username: form.username,
        hashedPassword: bcrypt.hashSync(form.password_user, 10),
        age_user: form.age_user,
        first_name: form.first_name,
        last_name: form.last_name, 
        image: form.image,
        gender_user: form.gender_user, 
        horario_disponivel: form.horario_disponivel, 
        comorbidades: form.comorbidades, 
        endereco: form.endereco, 
        cpf: form.cpf, 
        problems_user: form.problems_user,
        professional_confirm: form.professional_confirm,
      });
      console.log('Profile updated successfully:', response.data);
    }catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async function deleteAccount(deleteAccount) {
    try {
      const response = await axios.post(`http://localhost:3000/disable`);
      console.log('Account deleted successfully:', response.data);
  }catch (error) {
      console.error('Error deleting account:', error);
    }
  }




 


  function voltar(){
    
    navigate(-1);
  }
  
  return (
   <div className='container-editperfil'>
            <Navbar />

      <div className="div-grupo-1">
          

          <div className="div-grupo-usuario-1">

            <div className='div-img'>

            <img className='img' src="the-glock.jpeg" alt="" />
            
            </div>

            <div className="espaco"></div>

            <div className="perfil-input">
          
            <input
                className='texto-inp-edit'
                type="text"
                placeholder='Nome :'
                value={user?.username}
                onChange={(e) => setUserData({ ...UserData, username: e.target.value })}
            />

            <input
                className='texto-inp-edit'
                type="text"
                placeholder='Data de nascimento :'
                value={formatDate(user?.age_user)}
                onChange={(e) => setUserData({ ...UserData, age_user: e.target.value })}
            />

            <input
                className='texto-inp-edit'
                type="text"
                placeholder='Email :'
                value={user?.email_user}
                onChange={(e) => setUserData({ ...UserData, email_user: e.target.value })}
            />
            
             
            <div className="espaco"></div>

            </div>
          
              <div className='botoes-edit'>

              <button className="Salvar" onClick={() => submitEditProfile(userData)}>
                Salvar
              </button>

              <button className='Voltar' onClick={voltar}>
                <p className='texto-ed'>Voltar</p>
                </button>

                 
                <button className='Excluir'onClick={() => {
                  const confirmDelete = window.confirm('Deseja mesmo excluir a sua conta ?');
                  if (confirmDelete) {
                    deleteAccount();
                  }
                }}>
                <p className='texto-ed'>Excluir conta</p>
                </button>
            </div>
              

            </div>

        <div className='container-inputs'>
           <div className='div-inputs1'>
           <select className='selectEditPerfil'>
              <option value="">Horários Disponiveis</option>
              <option value="1">Manhã</option>
              <option value="2">Tarde</option>     
              <option value="3">Noite</option>         
            </select>

            <select className='selectEditPerfil'>
              <option value="">comorbidades</option>
              <option value="1">Sim</option>
              <option value="2">Não</option>              
            </select>
            <input className='texto-inp-inf' type="text" placeholder="Senha Atual:"/>
            <input className='texto-inp-inf' type="text" placeholder="Nova Senha:"/>
           </div>  
  

          <div className='div-inputs2'>
            <select className='selectEditPerfil'>
              <option value="">Genero</option>
              <option value="1">Masculino</option>
              <option value="2">Femimino</option>     
              <option value="3">Croissant</option>  
              <option value="4">Outro</option>  
              <option value="5">Prefiro não responder</option>           
            </select>
            <input className='texto-inp-inf' type="text" placeholder="Endereço:"/>
            <input className='texto-inp-inf' type="text" placeholder="CPF:"/>
           
          
            <div className='container-buttom'>
            <h2>deseja ser um profisional ?</h2>
            
            <button className="butoon-click-1" onClick={() => setOpenModal(true)}>clique aqui</button>
            </div>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <img  className='imagemfeliz' src="carafeliz.webp" alt="" />
      </Modal>
      
          </div>

        </div>

      </div>

  </div>
  )

}

export default EditPerfil