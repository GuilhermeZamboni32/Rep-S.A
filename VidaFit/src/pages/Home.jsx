import React from 'react'
import Navbar from '../Components/Navbar'
import './Home.css'
//import Funcionario from './Funcionario'
import Ad_Funci from './Ad_Funci'


function Home() {
  return (
    <div className='container-home'>
    <Navbar />
    
    <div className='div-atras-visual'>
      <div className='div-visual-prof'>

        <div className='barra-pesquisa'>
          <img className='lupa' src="Lupa-2.png" alt="" />
        </div>

        <Ad_Funci />
        

        
      </div>
     

    </div>
   
</div>
  )
}

export default Home