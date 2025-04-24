import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import './Home.css'
//import Funcionario from './Funcionario'
import Ad_Funci from './Ad_Funci'


function Home() {
  const [filter, setFilter] = useState('')
  const [pesquisa, setpesquisa] = useState('')

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  };

  const handlepesquisaChange = (e) => {
    setpesquisa(e.target.value)
  };

  return (
    <div className='container-home'>
    <Navbar />
    
    <div className='div-atras-visual'>
      <div className='div-visual-prof'>

        <div className='div-visual-prof-topo'>

        <div className='barra-filtro'>
          <img className='filtro' src="./Icons/Filtro-2.png" alt="Filtro" />
          <select 
            value={filter}
            onChange={handleFilterChange}
            className='select-filtro'
          >
            <option value="">Todos os Profissionais</option>
            <option value="nutricionista">Profissional de Nutrição 🍃</option>
            <option value="fitness">Profissional de Educação Física 💪</option>     
            <option value="educacao_fisica">Profissional Fitness 🍃💪</option>         
          </select>
        </div>
        
        <div className='barra-pesquisa'>
          <img className='lupa' src="./Icons/Lupa-2.png" alt="Pesquisar" />
          <input 
            type="text" 
            placeholder="Pesquisar profissionais..." 
            className='input-pesquisa'
            value={pesquisa}
            onChange={handlepesquisaChange}
          />
        </div>
        </div>


        <Ad_Funci filter={filter} searchTerm={pesquisa} />
        {/** 
         * ./Icons/folha-2.png
         * ./Icons/folha-1.png
         * ./Icons/halter-1.png
         * ./Icons/halter-2.png
         * */}
        

        
      </div>
     

    </div>
   
</div>
  )
}

export default Home