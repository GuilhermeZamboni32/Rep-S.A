import React from 'react'

function Ad_Dieta() {
    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')


    const [dieta, setdieta] = useState([
        {
          id: Date.now(),
          nome: "Sauvino da Silva",
          descricao: "Coach de saúde, unindo treino e nutrição para resultados completos. ",
          img: "./fisica-2.jpg"
        },
    ])

    function CadastrarExercicio(){
        const Funcionario = {
      
          id: Date.now(),
          nome: inputNome,
          descricao: inputDescricao,
          img: inputImagem
      
        }
      
        setfunci([...funci, Funcionario])
      }


  return (
    <div>Ad_Dieta</div>
  )
}

export default Ad_Dieta