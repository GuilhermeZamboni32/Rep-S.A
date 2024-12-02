import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaPerfil.css';


function TelaInicial() {
  const navigate = useNavigate();

  return (
    <div className='body'>
      <div className='container'>
        <div className='topo'>
        <div className='topo-esquerda-esquerda'></div>
          <div className='topo-esquerda' onClick={() => navigate('/')}>
            <img src='logo-agenda.png' alt="Logo" className="logo" />
          </div>

          <div className='topo-meio'>
            {/**espaço em branco */}
          </div>

          <div className='topo-direita'>
            <button className='botao' onClick={() => navigate('/cadastro')}>Cadastro</button>
            <div className='espaco-botao'></div>
            <button className='botao' onClick={() => navigate('/login')}>Login</button>
            <div className='espaco'></div>
          </div>
        </div>

        <div className='meio'>
          <h1>Seja bem-vindo ao nosso site de agendamentos!</h1>

          
        </div>

        <div className='baixo'>
          <div className='quadro'>
            <h3>Filosofia</h3>
            <p>Facilitar o acesso e a organização de serviços através de uma plataforma intuitiva,
              promovendo a conveniência para usuários e prestadores de serviço. Acreditamos 
              na importância de simplificar o processo de agendamento, colocando o usuário no centro de 
              nossas decisões.</p>
          </div>
          <div className='quadro'>
            <h3>Objetivos</h3>
            <p>Oferecer uma experiência de agendamento sem complicações, melhorando a comunicação entre 
              clientes e profissionais; reduzir o tempo de espera e minimizar conflitos de horários; 
              e implementar notificações automáticas para lembrar os clientes dos compromissos agendados.</p>
          </div>
          <div className='quadro'>
            <h3>História</h3>
            <p>Criado para atender a uma demanda crescente por soluções digitais, o site de agendamentos 
              surgiu com o propósito de otimizar o gerenciamento de compromissos. Ao longo do tempo, 
              evoluiu para integrar funcionalidades como notificações, perfis de usuários e uma interface 
              mais amigável, tornando-se uma ferramenta essencial para diversos setores.</p>


          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
