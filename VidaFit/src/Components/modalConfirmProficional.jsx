import React from 'react'
import './ModalConfirmProficional.css'




export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className='container-modal' >
        <div className='conteudo-modal' >
          <div className='conteudo-modal-topo'>
            <div className='topo-modal-es'></div>
            <div className='topo-modal-di'>
              <div className='sair-modal' onClick={setModalOpen}>
                <img className='X' src="./Icons/icone-X.png" alt="" />
              </div>
            </div>
          </div>
            <div className='conteudo-modal-meio'>
              <div className='texto-modal'>{children}</div>
            </div>
            <div className='conteudo-modal-baixo'>
              <button className='button-modal' onClick={setModalOpen}><h2>Fechar</h2></button>
            </div>
        </div>
      </div>
    )
  }

  return null
}



{/**<div className='container-modal' style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div style={{ cursor: 'pointer'}} onClick={setModalOpen}>
            x
          </div>
          <div>{children}</div>
          <button onClick={setModalOpen}>Fechar</button>
        </div>
      </div> */}