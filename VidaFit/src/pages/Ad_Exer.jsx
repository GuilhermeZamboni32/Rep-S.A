import React from 'react'

function Ad_Exer() {
    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')


    const [exer, setexer] = useState([
        {
          id: Date.now(),
          nome: "Sauvino da Silva",
          descricao: "Coach de saúde, unindo treino e nutrição para resultados completos. ",
          img: "./fisica-2.jpg"
        },
    ])

    function CadastrarFuncionario(){
        const Funcionario = {
      
          id: Date.now(),
          nome: inputNome,
          descricao: inputDescricao,
          img: inputImagem
      
        }
      
        setfunci([...funci, Funcionario])
      }

return (
    

    <div className='container-corpo'>
    
    
     <div className='lista-cards'>
       {funci.map((funcionario) => (
             <Funcionario key={funcionario.id} nome={funcionario.nome} descricao={funcionario.descricao} img={funcionario.img}/>
    
       ))}
     </div>
    
    
     <div className='formCadastro'>
         <div className="input-contaner">
            <label htmlFor="">Produto:</label>
            <input type="text" 
            value={inputNome}
            onChange={(Event) => setInputNome(Event.target.value)}
            />
         </div>
    
    
         <div className="input-contaner">
             <label htmlFor="">Descrição:</label>
             <input type="text" 
            value={inputDescricao}
            onChange={(Event) => setInputDescricao(Event.target.value)}
            />
         </div>
    
         <div className="input-contaner">
             <label htmlFor="">Imagem:</label>
             <input type="text" 
            value={inputImagem}
            onChange={(Event) => setInputImagem(Event.target.value)}
            />
         </div>
         <button onClick={CadastrarFuncionario}>Cadastrar</button>
        </div>
    
    
    
     </div>
      )
}

export default Ad_Exer