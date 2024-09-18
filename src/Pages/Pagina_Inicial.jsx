import React from 'react'
import './Pagina_Inicial.css'
import './Cadastro'

const Pagina_Inicial = () => {

  const AcessoCadastrar = () => {
    // Função para redirecionar para a página de cadastro
  };

  const AcessoLogar = () => {
    // Função para redirecionar para a página de login
  };

  const Sobre = () => {
    document.getElementById('sobre').style.display = 'block';
    document.getElementById('servicos').style.display = 'none';
    document.getElementById('agendamento').style.display = 'none';
  };

  const Servicos = () => {
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('servicos').style.display = 'block';
    document.getElementById('agendamento').style.display = 'none';
  };

  const Agendamento = () => {
    document.getElementById('sobre').style.display = 'none';
    document.getElementById('servicos').style.display = 'none';
    document.getElementById('agendamento').style.display = 'block';
  };

  return (
    <div id="container">
      <div id="divtopo">
        <div id="topoesquerda">
          <img id="logo" src="logoOficial.png" alt="Logo Oficial" />
        </div>

        <div id="topodireita">
        <button onClick={() => setPagina(<Cadastro />)}>Cadastro</button>
          
        </div>
      </div>

      <div id="divmeio">
        {/* Conteúdo central da página */}
      </div>

      <div id="divbaixo">
        <button id="botaoSobre" className="meu-botao" onClick={Sobre}>
          Sobre
        </button>
        <button id="botaoServicos" className="meu-botao" onClick={Servicos}>
          Serviços
        </button>
        <button id="botaoAgendamento" className="meu-botao" onClick={Agendamento}>
          Agendamento
        </button>
      </div>

      <div id="texto">
        <label id="sobre" style={{ display: 'block' }}>
          A SUS Consultas é uma plataforma especializada em facilitar o agendamento de consultas em postos de saúde pública. Com um sistema moderno e eficiente, oferecemos uma plataforma intuitiva para que os pacientes possam marcar suas consultas de forma rápida e prática. Nosso objetivo é reduzir o tempo de espera e proporcionar um atendimento de qualidade, contribuindo para a melhoria dos serviços de saúde.
        </label>

        <label id="servicos" style={{ display: 'none' }}>
          Na SUS Consultas, oferecemos uma gama de serviços dedicados a facilitar o acesso aos cuidados de saúde pública. Nosso principal serviço é o agendamento online de consultas em postos de saúde, proporcionando conveniência e eficiência aos pacientes. Nosso portal também permite o acompanhamento de histórico de consultas, proporcionando um controle completo para os pacientes e os profissionais de saúde.
        </label>

        <label id="agendamento" style={{ display: 'none' }}>
          Na SUS Consultas, agendar suas consultas em postos de saúde pública é fácil e rápido. Nosso processo começa com o acesso ao nosso portal online, onde o paciente pode criar uma conta pessoal. Após o cadastro, basta escolher a opção "Agendar Consulta" na página de perfil e escolher o serviço desejado. Após a escolha do serviço, basta selecionar a data disponível no calendário e agendar sua consulta. Lembrando que as datas são disponibilizadas por semanas, sendo que cada dia possui no máximo 10 fichas para atendimento e cada paciente só pode agendar uma única consulta por dia.
        </label>
      </div>
    </div>
  );
};

export default Pagina_Inicial;
