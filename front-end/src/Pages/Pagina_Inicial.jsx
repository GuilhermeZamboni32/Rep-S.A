import React from 'react'
import './Pagina_Inicial.css'

function Pagina_Inicial(){

 
  return (
    <>
    
      <header>
        <div className="container">
          <h1 className="logo">Agenda Online</h1>
        </div>
        <div className="topo-esquerda">
          <nav>
            <ul>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      
      <section className="hero">
        <div className="container">
          <h2>Gerencie seus agendamentos de forma simples e eficiente!</h2>
          <p>Facilite sua gestão de compromissos com uma plataforma moderna e prática.</p>
          <a href="#cadastro" className="btn">Cadastre-se</a>
          <a href="#login" className="btn">Login</a>
        </div>
      </section>

      
      <section id="servicos" className="section">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <div className="cards">
            <div className="card">
              <h3>Agendamentos Simples</h3>
              <p>Organize seus compromissos com facilidade e flexibilidade, sem complicações.</p>
            </div>
            <div className="card">
              <h3>Notificações Inteligentes</h3>
              <p>Receba notificações e lembretes automáticos sobre seus agendamentos.</p>
            </div>
            <div className="card">
              <h3>Histórico Completo</h3>
              <p>Acesse o histórico de todos os seus compromissos sempre que precisar.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="sobre" className="section">
        <div className="container">
          <h2>Sobre Nós</h2>
          <p>O <strong>Agenda Online</strong> foi criado para facilitar o gerenciamento de agendamentos entre clientes e profissionais de diversos setores. Nossa missão é simplificar o processo, eliminando a necessidade de ferramentas manuais e tornando a gestão de compromissos mais eficiente e prática.</p>
          <p><strong>Autores:</strong> Guilherme Zamboni Menegacio, Jonathan Stulp Zoz, Thiago Quadra Arnold, Júlia Cabral Gomes</p>
          <p><strong>Florianópolis, Setembro de 2024</strong></p>
        </div>
      </section>

      
      <section id="contato" className="section">
        <div className="container">
          <h2>Entre em Contato</h2>
          <p>Para dúvidas ou suporte, entre em contato conosco:</p>
          <p><strong>Email:</strong> suporte@agendaonline.com</p>
          <p><strong>Telefone:</strong> (48) 1234-5678</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Agenda Online. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>  
  )
}

export default Pagina_Inicial;
