import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import './EditPerfil.css'
import { useState, useEffect, userData, useContext} from 'react'
import { GlobalContext } from "../Context/GlobalContext" 
import axios from 'axios'
import Modal from '../Components/modalConfirmProficional'

function EditPerfil() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const { user, setUser} = useContext(GlobalContext)
  const [form, setForm] = useState({        
    email_user:'',
    username:'',
    password_user:'',
    age_user:'',
    first_name:'',
    last_name:'',
    gender_user:'',
    horario_disponivel:'',
    comorbidades:'',
    endereco:'',
    problems_user:'',
    professional_confirm:'',
    profile_image:''
  });

  // data para formato BR 
  const formatDate = (date) => {
    if (!date) return '';
    const parsedDate = new Date(date); 
    const day = String(parsedDate.getDate()).padStart(2, '0'); 
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); 
    const year = parsedDate.getFullYear(); 
    return `${day}/${month}/${year}`; 
};

  async function fetchUserData() {
    try {
      const response = await axios.get('http://localhost:3000/users/profile');
      const userData = response.data;
      setUserData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }


  async function submitEditProfile(form) {
    try {
      if (!form.email_user || !form.username || !form.age_user || !form.first_name || !form.last_name) {
        setForm({
          ...form, email_user: user.email_user,
          username: user.username,
          hashedPassword: user.password_user,
          age_user: user.age_user,
          first_name: user.first_name,
          last_name: user.last_name, 
          gender_user: user.gender_user,
          horario_disponivel: user.horario_disponivel, 
          problems_user: user.problems_user,
          professional_confirm: user.professional_confirm,
          comments_user: user.comments_user,
          user_rating: user.user_rating,
          avaliability: user.avaliability,
          address: form.address 
        })
      }
      const response = await axios.put('http://localhost:3000/users/edit/${clienteSelecionado.id}', {
        email_user: form.email_user, 
        username: form.username,
        hashedPassword: form.password_user,
        age_user: form.age_user,
        first_name: form.first_name,
        last_name: form.last_name, 
        gender_user: form.gender_user,
        horario_disponivel: form.horario_disponivel, 
        problems_user: form.problems_user,
        professional_confirm: form.professional_confirm,
        comments_user: form.comments_user,
        user_rating: form.user_rating,
        avaliability: form.avaliability,
        address: form.address
      });
      console.log('Profile updated successfully:', response.data);
    }catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  console.dir(user)
  console.dir(form)

  async function updateProfileImage(form) {
    try {
      const formData = new FormData();
      formData.append('profile_image', form.profile_image);
      const response = await axios.post('http://localhost:3000/upload', {
        image: form.profile_image,
      });
      console.dir(response.data);
      console.log('Profile image updated successfully:', response.data);
    }catch (error) {
      console.error('Error updating profile image:', error);
    }
  }

  async function profileImage() {
    try {
      const response = await axios.get('http://localhost:3000/profile_image');
      console.log('Profile image fetched successfully:', response.data);
    }catch (error) {
      console.error('Error fetching profile image:', error);
    }
  }

  async function deleteAccount(deleteAccount) {
    try {
      const response = await axios.post(`http://localhost:3000/disable`);
      console.log('Account deleted successfully:', response.data);
      navigate('/');
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
              <form>
                 <input type="file" name="file" /*value={form.image}*/
                onChange={(e) => setForm({ ... form, image: e.target.value })}/>
                <button onClick={updateProfileImage}>Upload</button>
              </form>

            <img 
              className='img' 
              type="file"
              src={user?.image || './Icons/perfil-branco.png'} 
              alt="Profile"
              />
            </div>

            <div className="espaco"></div>

            <div className="perfil-input">
          
            <p>Nome novo</p>
            <input
                className='texto-inp-edit'
                type="text"
                placeholder='Nome :'
                // value={user?.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
            />

            <p>Nascimento novo</p>
            <input
                className='texto-inp-edit'
                type="date"
                placeholder='Data de nascimento :'
                // value={formatDate(user?.age_user)}
                onChange={(e) => setForm({ ...form, age_user: e.target.value })}
            />

            <p>Email novo</p>
            <input
                className='texto-inp-edit'
                type="text"
                placeholder='Email :'
                // value={user?.email_user}
                onChange={(e) => setForm({ ...form, email_user: e.target.value })}
            />
            
             
            <div className="espaco"></div>

            </div>
          
              <div className='botoes-edit'>

              <button className="Salvar" onClick={() => submitEditProfile(form)}>
                Salvar
              </button>

              <button className='Voltar' onClick={voltar}>
                <p className='texto-ed'>Voltar</p>
                </button>

                 
                <button className='Excluir'onClick={() => {
                  const confirmDelete = window.confirm('Deseja mesmo excluir a sua conta ?');
                  if (confirmDelete === true) {
                    deleteAccount(deleteAccount);
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
              <option value="4">Variado</option>   
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
      </Modal>
      
          </div>

        </div>

      </div>

  </div>
  )

}

export default EditPerfil