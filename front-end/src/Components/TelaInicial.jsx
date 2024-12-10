import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaPerfil.css';


function TelaInicial() {
 

  return (
    <div className='body'>
      <div className='container'>
        <div className='topo'>
        <div className='topo-esquerda-esquerda'></div>
          <div className='topo-esquerda' onClick={() =>  useNavigate('/')}>
            <img src='logo-agenda.png' alt="Logo" className="logo" />
          </div>

          <div className='topo-meio'>
            {/**espaço em branco */}
          </div>

          <div className='topo-direita'>
            {/*     método antigo       
            <button className='botao' onClick={() => useNavigate('/cadastro')}>Cadastro</button>
            <div className='espaco-botao'></div>
            <button className='botao' onClick={() => useNavigate('/login')}>Login</button>
            <div className='espaco'></div> */}
          </div>
        </div>

        <div className='meio'>
          
          <h1 className='meio-h1'>Seja bem-vindo ao nosso site de agendamentos!</h1>

          
        </div>

        <div className='baixo'>
          <div className='quadro'>
            <h3>Filosofia</h3>
            <p>Promover conveniência e organização através de uma plataforma intuitiva, focada no usuário.</p>
          </div>
          <div className='quadro'>
            <h3>Objetivos</h3>
            <p>Simplificar agendamentos, melhorar comunicação, reduzir conflitos e enviar lembretes automáticos.</p>
          </div>
          <div className='quadro'>
            <h3>História</h3>
            <p>Nascido para otimizar compromissos, evoluiu com novas funcionalidades para atender diversos setores.</p>


          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
