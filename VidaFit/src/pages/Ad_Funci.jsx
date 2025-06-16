import { useState , useEffect} from 'react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Ad_Funci.css'
//import Funcionario from './Funcionario'
//import Navbar from '../Components/Navbar'
//import { Link } from 'react-router-dom'

function Ad_Funci({ filter, searchTerm }) {

    

    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')
    const [inputProfi, setInputProfi] = useState('')
    const [inputemail, setInputEmail] = useState('')
    const [inputGenero, setInputGenero] = useState('');


    const [funci, setfunci] = useState([
      {
        id: Date.now(),
        nome: "Sauvino da Silva",
        genero: "Masculino",
        email: 'sauvino34@gmail.com',
        descricao: "Coach de saúde focado em performance e bem-estar, integrando estratégias de treino funcional e nutrição personalizada.",
        img: "./fisica-2.jpg",
        profi: "Coach de saúde"
      },
      {
        id: Date.now() + 1,
        nome: "Maria Machado",
        genero: "Feminino",
        email: 'maria76@gmail.com',
        descricao: "Nutricionista especializada em reeducação alimentar e dietas balanceadas para otimizar a saúde e o rendimento físico.",
        img: "./nutri-0.jpg",
        profi: "Nutricionista"
      },
      {
        id: Date.now() + 2,
        nome: "Manuela Gomes",
        genero: "Feminino",
        email: 'manuela98@gmail.com',
        descricao: "Personal Trainer com foco em condicionamento físico, emagrecimento e fortalecimento muscular.",
        img: "./fisica-11.jpg",
        profi: "Personal Trainer"
      },
      {
        id: Date.now() + 3,
        nome: "Victor das Neves",
        genero: "Masculino",
        email: 'victor.neves@gmail.com',
        descricao: "Nutricionista esportivo, trabalha com dietas específicas para atletas e praticantes de atividade física.",
        img: "./nutri-6.jpg",
        profi: "Nutricionista"
      },
      {
        id: Date.now() + 4,
        nome: "Gustavo Garcia",
        genero: "Masculino",
        email: 'gustavo.garcia@gmail.com',
        descricao: "Coach de saúde com abordagem holística, combinando exercícios, hábitos saudáveis e motivação diária.",
        img: "./fisica-0.jpg",
        profi: "Coach de saúde"
      },
      {
        id: Date.now() + 5,
        nome: "Julia Machado",
        genero: "Feminino",
        email: 'julia.machado@gmail.com',
        descricao: "Especialista em bem-estar físico, unindo conhecimento em treinamento funcional e alimentação consciente.",
        img: "./fisica-4.jpg",
        profi: "Coach de saúde"
      },
      {
        id: Date.now() + 6,
        nome: "Miguel Duarte",
        genero: "Masculino",
        email: 'miguel.duarte@gmail.com',
        descricao: "Personal Trainer dedicado à transformação corporal por meio de treinos personalizados e acompanhamento constante.",
        img: "fisica-5.jpeg",
        profi: "Personal Trainer"
      },
      {
        id: Date.now() + 7,
        nome: "Enzo Carvalho",
        genero: "Masculino",
        email: 'enzo.carvalho@gmail.com',
        descricao: "Nutricionista com foco em dietas adaptadas a diferentes estilos de vida e objetivos físicos.",
        img: "nutri-1.jpg",
        profi: "Nutricionista"
      },
      {
        id: Date.now() + 8,
        nome: "Lucas Almeida",
        genero: "Masculino",
        email: 'lucas.almeida@gmail.com',
        descricao: "Coach motivacional de saúde, especialista em promover equilíbrio entre mente, corpo e alimentação.",
        img: "fisica-1.jpg",
        profi: "Coach de saúde"
      },
      {
        id: Date.now() + 9,
        nome: "Lara Monteir",
        genero: "Feminino",
        email: 'lara.monteir@gmail.com',
        descricao: "Nutricionista clínica com foco em alimentação funcional e prevenção de doenças crônicas.",
        img: "nutri-2.png",
        profi: "Nutricionista"
      },
      {
        id: Date.now() + 10,
        nome: "Valentina Costa",
        genero: "Feminino",
        email: 'valentina.costa@gmail.com',
        descricao: "Nutricionista apaixonada por transformar hábitos alimentares em estilo de vida saudável e sustentável.",
        img: "nutri-3.jpg",
        profi: "Nutricionista"
      },
      {
        id: Date.now() + 11,
        nome: "Bianca Souza",
        genero: "Feminino",
        email: 'bianca.souza@gmail.com',
        descricao: "Personal Trainer com experiência em musculação, HIIT e treinos para fortalecimento feminino.",
        img: "fisica-3.jpg",
        profi: "Personal Trainer"
      },
      {
        id: Date.now() + 12,
        nome: "Isadora Lima",
        genero: "Feminino",
        email: 'isadora.lima1@gmail.com',
        descricao: "Nutricionista focada em performance esportiva, com planos alimentares para cada fase do treino.",
        img: "nutri-4.jpg",
        profi: "Nutricionista"
      },
      {
        id: Date.now() + 13,
        nome: "Rafael Barros",
        genero: "Masculino",
        email: 'rafael.barros@gmail.com',
        descricao: "Coach de saúde voltado para desenvolvimento físico e mental, incentivando a disciplina e foco.",
        img: "fisica-6.jpg",
        profi: "Coach de saúde"
      },
      {
        id: Date.now() + 14,
        nome: "Arthur Nogueira",
        genero: "Masculino",
        email: 'arthur.nogueira@gmail.com',
        descricao: "Consultor de saúde e bem-estar, especialista em orientar rotinas alimentares e físicas eficazes.",
        img: "nutri-5.jpg",
        profi: "Nutricionista"
      },
      {
        id: Date.now() + 15,
        nome: "Pedro Gonçalves",
        genero: "Masculino",
        email: 'pedro.goncalves@gmail.com',
        descricao: "Coach integrativo que alia nutrição esportiva e treino de alta performance para resultados reais.",
        img: "nutri-7.webp",
        profi: "Coach de saúde"
      },
      {
        id: Date.now() + 16,
        nome: "Caio Antunes",
        genero: "Masculino",
        email: 'caio.antunes@gmail.com',
        descricao: "Personal Trainer com foco em treinos personalizados para emagrecimento, hipertrofia e resistência.",
        img: "fisica-7.jpg",
        profi: "Personal Trainer"
      },
      {
        id: Date.now() + 17,
        nome: "Felipe Moreira",
        genero: "Masculino",
        email: 'felipe.moreira@gmail.com',
        descricao: "Nutricionista especializado em alimentação natural, detox e dietas anti-inflamatórias.",
        img: "nutri-8.jpeg",
        profi: "Nutricionista"
      },
      {
        id: Date.now() + 18,
        nome: "Isadora Lima",
        genero: "Feminino",
        email: 'isadora.lima2@gmail.com',
        descricao: "Coach de saúde com foco em nutrição comportamental e evolução contínua do bem-estar físico.",
        img: "fisica-8.jpg",
        profi: "Coach de saúde"
      },
      {
        id: Date.now() + 19,
        nome: "Marina Silveira",
        genero: "Feminino",
        email: 'marina.silveira@gmail.com',
        descricao: "Consultora de saúde integrativa, une práticas alimentares equilibradas com treinos adaptativos.",
        img: "nutri-9.avif",
        profi: "Nutricionista"
      },
      {
        id: Date.now() + 20,
        nome: "Elisa Freitas",
        genero: "Feminino",
        email: 'elisa.freitas@gmail.com',
        descricao: "Nutricionista funcional voltada para qualidade de vida, controle de peso e energia diária.",
        img: "nutri-10.avif",
        profi: "Nutricionista"
      },
      {
        id: Date.now() + 21,
        nome: "Manuela Rocha",
        genero: "Feminino",
        email: 'manuela.rocha@gmail.com',
        descricao: "Personal Trainer focada em treinos para iniciantes, recuperação física e longevidade ativa.",
        img: "fisica-9.webp",
        profi: "Personal Trainer"
      },
      {
        id: Date.now() + 22,
        nome: "Tainá Vasconcelos",
        genero: "Feminino",
        email: 'taina.vasconcelos@gmail.com',
        descricao: "Instrutora de treinamento funcional com ênfase em saúde da mulher e condicionamento físico.",
        img: "fisica-10.jpg",
        profi: "Personal Trainer"
      }
    ])
    

    const filterfunci = funci.filter(funcionario => {
      const genero = funcionario.genero.toLowerCase();
      const profi = funcionario.profi.toLowerCase();
      const filtro = (filter || '').toLowerCase();
      const busca = (searchTerm || '').toLowerCase();
    
      const matchesFilter =
        !filtro ||
        (filtro === 'nutricionista' && profi === 'nutricionista') ||
        (filtro === 'educacao_fisica' && profi === 'personal trainer') ||
        (filtro === 'fitness' && profi === 'coach de saúde') ||
        (filtro === 'masculino' && genero === 'masculino') ||
        (filtro === 'feminino' && genero === 'feminino');
    
      const matchesSearch =
        !busca || funcionario.nome.toLowerCase().includes(busca);
    
      return matchesFilter && matchesSearch;
    });

    function Funcionario({ img, nome, descricao, profi, genero, email }) {
  const [shadow, setShadow] = useState('container-produtos');
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate()

  //function perfil(){
  //  navigate('/perfil');
  //}

  useEffect(() => {
    if (profi === 'Coach de saúde') {
      setShadow('container-produtos box-ef');
    } else if (profi === 'Nutricionista') {
      setShadow('container-produtos box-nut');
    } else if (profi === 'Personal Trainer') {
      setShadow('container-produtos box-amb');
    }
  }, [profi]);

  function ProfessionalSelecionado(profissional) {
    console.log('Profissional selecionado:', profissional); 
    localStorage.setItem('profissionalSelecionado', JSON.stringify(profissional)); 
    navigate('/perfil'); 
  }

  function AbreModal() {
    setIsModalOpen(true); 
  }

  function FechaModal() {
    setIsModalOpen(false); 
  }

  return (
    <>
      <div className={shadow} onClick={AbreModal}>
        <div className="modal-test">
          <h2>{nome}</h2>
          <img src={img} className="img-produto" />
          {profi === 'Coach de saúde' && (
            <div className="emoji">
              <img src="./Icons/folha-2.png" className="icones" />
              <img src="./Icons/halter-1.png" className="icones" />
            </div>
          )}
          {profi === 'Nutricionista' && (
            <div className="emoji">
              <img src="./Icons/folha-1.png" className="icones" />
              <img src="./Icons/halter-2.png" className="icones" />
            </div>
          )}
          {profi === 'Personal Trainer' && (
            <div className="emoji">
              <img src="./Icons/folha-1.png" className="icones" />
              <img src="./Icons/halter-1.png" className="icones" />
            </div>
          )}
          <p>{descricao}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
          <button className="fecha-modal" onClick={FechaModal}>
              <img src="./Icons/icone-X.png"  className='iconemodal' alt="" />
            </button>
            <h2>{nome}</h2>
            <img src={img} className="img-produto" />
            <p><strong>Profissão:</strong> {profi}</p>
            {/*<p><strong>Gênero:</strong> {genero}</p>*/}
            <p>{descricao}</p>
            <button className='seleciona-profissional' onClick={() => ProfessionalSelecionado({ nome, descricao, profi, genero, email })}>
              Selecionar Profissional
            </button>
          </div>
        </div>
      )}
    </>
  );
}
    

   /* const filteredFunci = funci.filter((f) => {
      const matchesFilter =! filter || f.profi.toLowerCase().includes(filter.toLowerCase()) || f.genero === filter;
      const matchesSearchTerm =! searchTerm || f.nome.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearchTerm;
    });*/
    

   /* const resultadosFiltrados = funci.filter(funcionario => {
      const filtroLower = filter.toLowerCase()
      const pesquisaLower = searchTerm.toLowerCase()
    
      const combinaFiltroProfissao = 
        filtroLower === '' ||
        funcionario.profi.toLowerCase().includes(filtroLower)
    
      const combinaFiltroGenero = 
        filtroLower === '' ||
        funcionario.genero.toLowerCase().includes(filtroLower)
    
      const combinaPesquisa = 
      funcionario.nome.toLowerCase().includes(pesquisaLower) ||
        funcionario.descricao.toLowerCase().includes(pesquisaLower)
    
      return (combinaFiltroProfissao || combinaFiltroGenero) && combinaPesquisa
    })*/

      /*function CadastrarFuncionario(){
        const Funcionario = {
      
          id: Date.now(),
          nome: inputNome,
          descricao: inputDescricao,
          img: inputImagem,
          profi: inputProfi,
          genero: inputGenero
      
        }
      
        setfunci([...funci, Funcionario])
      }
*/

     
     

  return (
    
    
    <div className='container-corpo'>



 <div className='lista-cards'>
   {filterfunci.map((f) => (
         <Funcionario 
         key={f.id} 
         nome={f.nome} 
         profi={f.profi} 
         descricao={f.descricao} 
         img={f.img} 
         genero={f.genero}
         email={f.email}/>

   ))}
 </div>

{/*
 <div className='formCadastro'>
     <div className="input-contaner">
        <label htmlFor="">Nome:</label>
        <input type="text" 
        value={inputNome}
        onChange={(Event) => setInputNome(Event.target.value)}
        />
     </div>

     <div className="input-contaner">
          <label htmlFor="">Gênero:</label>
          <select value={inputGenero} onChange={(e) => setInputGenero(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
      </div>

     <div className="input-contaner">
         <label htmlFor="">tipo:</label>
         <input type="text" 
        value={inputProfi}
        onChange={(Event) => setInputImagem(Event.target.value)}
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
*/}


 </div>
  )
}

export default Ad_Funci