import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Home() {
    const {usuarioLogado, bairro, setBairro} = useContext(GlobalContext)

    function mudarendereco (){

      setBairro(prompt("Onde você mora ? "))
    }
 

  return (
    <div>
        <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {usuarioLogado}</p>
      <p>bairro: {bairro}</p>

      <button onClick={mudarendereco}>Mudar endereço</button>

    </div>
  )
}

export default Home
