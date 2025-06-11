import React from 'react'
import "./Av_notas.css"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import {useState} from 'react'

function Av_notas () {
  const [filter, setFilter] = useState('')
  const [pesquisa, setpesquisa] = useState('')

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  };

  const handlepesquisaChange = (e) => {
    setpesquisa(e.target.value)
  };

  return (
    
    <div className="container-Ava">
    <Navbar />
      <div className="div-grupo-Ava-3">
        <div className="Av_notas">
          <div className="titulo_av_notas">
            <h1>  
            Avaliaçoes
            </h1>
          </div>
          <div className='filtro-Av'>
          <div className='barra-filtro-Av'>
          <img className='filtro' src="./Icons/Filtro-2.png" alt="Filtro" />
          <select 
            value={filter} 
            onChange={handleFilterChange}
            className='select-filtro'
          >
            <option value="">filtro</option>
            <option value="1.5_estrela">1 estrela meia </option>
            <option value="1_estrela">1 estrela inteira </option>
            <option value="2.5_estrela">2 estrela meia </option> 
            <option value="2_estrela">2 estrela inteira  </option>    
            <option value="3.5_estrela">3 estrela meia </option>
            <option value="3_estrela">3 estrela inteira  </option>   
            <option value="4.5_estrela">4estrela meia </option>
            <option value="4_estrela">4 estrela inteira </option> 
            <option value="5.5_estrela">5 estrela meia </option>    
            <option value="5 estrela">5 estrela inteira </option>       
          </select>
        </div>
        </div>

        <div className='card'>
            <p>nome</p>
           <h2>comentario</h2>
          

      </div>
     
      

        </div>
      </div>
    </div>
  )
}


export default Av_notas