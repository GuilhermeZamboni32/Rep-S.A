import { useState } from 'react'
import './App.css'
import './Pages/Pagina_Inicial'
import Pagina_Inicial from './Pages/Pagina_Inicial'
import './Pages/Cadastro'

function App() {
  const [pagina, setPagina] = useState('')

  return (
    <>
    <nav>

     <button onClick={() => setPagina(<Pagina_Inicial />)}>Pagina_Inicial</button>
     <button onClick={() => setPagina(<Cadastro />)}>Cadastro</button>

    </nav>
     { pagina }
    </>
  )
}

export default App
