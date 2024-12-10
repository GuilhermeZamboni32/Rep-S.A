import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaPerfil.css';

function TelaInicial() {
  const navigate = useNavigate(); // Inicializar a função navigate

  return (
    <div className="body">
      <div className="container">
        <div className="topo">
          <div className="topo-esquerda-esquerda"></div>
          <div className="topo-esquerda">
            <img src="logo-agenda.png" alt="Logo" className="logo" />
          </div>

          <div className="topo-meio">
            {/* espaço em branco */}
          </div>

          <div className="topo-direita">
            <button className="botao" onClick={() => navigate('/cadastro')}>Cadastro</button>
            <div className="espaco-botao"></div>
            <button className="botao" onClick={() => navigate('/login')}>Login</button>
          </div>
        </div>

        <div className="meio">
          <h1>Seja bem-vindo ao nosso site de agendamentos!</h1>
        </div>

        <div className="baixo">
          <div className="quadro">
            <h3>Filosofia</h3>
            <p>Facilitar o acesso e a organização de serviços...</p>
          </div>
          <div className="quadro">
            <h3>Objetivos</h3>
            <p>Oferecer uma experiência de agendamento sem complicações...</p>
          </div>
          <div className="quadro">
            <h3>História</h3>
            <p>Criado para atender a uma demanda crescente...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
