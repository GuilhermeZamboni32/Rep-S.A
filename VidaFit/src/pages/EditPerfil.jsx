import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import './EditPerfil.css'
import { useState } from 'react'

import Modal from '../Components/modalConfirmProficional'
function EditPerfil() {

  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
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
          
              <input className='texto-inp-edit' type="text" placeholder='Nome :'/>
              <input className='texto-inp-edit' type="text" placeholder='Data de nascimento :'/>
              <input className='texto-inp-edit' type="text" placeholder='Email :'/>
              <div className='topo-di'>
              <button className='Voltar' onClick={voltar}>
                <p className='texto-ed'>Voltar</p>
                </button>
            </div>
             
            <div className="espaco"></div>

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
        Conteúdo do modal
      </Modal>
      
          </div>

        </div>

      </div>

  </div>
  )

}

export default EditPerfil