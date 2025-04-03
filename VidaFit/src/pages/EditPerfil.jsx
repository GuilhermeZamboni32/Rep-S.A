import Navbar from '../Components/Navbar'
import './EditPerfil.css'
import { useState } from 'react'
import Modal from '../Components/modalConfirmProficional'
function EditPerfil() {
  const [openModal, setOpenModal] = useState(false)
  
  return (
   <div className='container-editperfil'>
            <Navbar />

      <div className="div-grupo-1">
          

          <div className="div-grupo-usuario-1">

            <div className='div-img'>

            <img className='img' src="foto-rock.jpg" alt="" />
            
            </div>

            <div className="espaco"></div>

            <div className="perfil-input">
          
              <input className='texto-inp-edit' type="text" placeholder='Nome :'/>
              <input className='texto-inp-edit' type="text" placeholder='Data de nascimento :'/>
              <input className='texto-inp-edit' type="text" placeholder='Email :'/>
              
             
            <div className="espaco"></div>

            </div>
          
              <button className='button-editar'>editar</button>

            </div>

        <div className='container-inputs'>
           <div className='div-inputs1'>
            <input className='texto-inp-inf' type="" placeholder="Input 1"/>
            <input className='texto-inp-inf' type="text" placeholder="Input 2"/>
            <input className='texto-inp-inf' type="text" placeholder="Input 3"/>
            <input className='texto-inp-inf' type="text" placeholder="Input 4"/>
           </div>  
  

          <div className='div-inputs2'>
            <input type="text" placeholder="Input 6"/>
            <input type="text" placeholder="Input 7"/>
            <input type="text" placeholder="Input 8"/>
          
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