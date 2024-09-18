
import React, { useState } from 'react';
import './Cadastro.css'; // Inclua os estilos adequados aqui

const PaginaCadastroLogin = () => {
  const [telaAtual, setTelaAtual] = useState('cadastro'); // Alterna entre 'cadastro' e 'login'

  const mudarParaCadastro = () => setTelaAtual('cadastro');
  const mudarParaLogin = () => setTelaAtual('login');

  const Cadastrar = () => {
    // Função de cadastro
  };

  const Login = () => {
    // Função de login
  };

  return (
    <div id="container">
      <div id="cima">
        <div id="logo">
          <img id="idlogo" src="logoOficial.png" alt="Logo Oficial" />
        </div>

        <div id="titulo">
          {telaAtual === 'cadastro' ? (
            <label id="tituloPagina">Sistema de Cadastro</label>
          ) : (
            <label id="tituloPagina">Sistema de Login</label>
          )}
        </div>

        <div id="fimTopo">
          {telaAtual === 'cadastro' ? (
            <label id="labelConta">Já tem uma conta?</label>
          ) : (
            <label id="labelConta">Ainda não tem uma conta?</label>
          )}
          {telaAtual === 'cadastro' ? (
            <button id="botaoTopo" onClick={mudarParaLogin}>
              Logar
            </button>
          ) : (
            <button id="botaoTopo" onClick={mudarParaCadastro}>
              Cadastrar-se
            </button>
          )}
        </div>
      </div>

      <div id="separador"></div>

      <div id="meio">
        <div id="ladoEsquerdo"></div>

        {telaAtual === 'cadastro' ? (
          <div id="cadastro">
            <div id="telaCadastro">
              <div id="parteIdentificacao">
                <label id="idIdentificacao">Identificação</label>

                <label id="nome">Nome</label>
                <input id="nomeUsuario" type="text" className="classeInputs" placeholder="Digite seu nome completo" />

                <label id="genero">Gênero</label>
                <select id="generoUsuario">
                  <option value="0">Selecione uma opção</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </select>

                <label id="cpf">CPF</label>
                <input id="cpfUsuario" type="text" className="classeInputs" placeholder="00000000000" maxLength="11" />

                <label id="nascimento">Nascimento</label>
                <input id="nascimentoUsuario" type="date" className="classeInputs" />
              </div>

              <div id="parteContato">
                <label id="contato">Contato & Endereço</label>

                <label id="email">E-mail</label>
                <input id="emailUsuario" type="email" className="classeInputs" placeholder="exemploemail123@gmail.com" />

                <label id="telefone">Telefone/Celular</label>
                <input id="telefoneUsuario" type="text" className="classeInputs" placeholder="(DDD) XXXXX XXXX" />

                <label id="bairro">Bairro</label>
                <select id="bairroUsuario">
                  <option value="0">Selecione o bairro</option>
                  <option value="Agronômica">Agronômica</option>
                </select>

                <label id="senha">Senha</label>
                <input id="senhaUsuario" type="password" className="classeInputs" placeholder="mínimo seis (6) caracteres" />
              </div>
            </div>

            <div id="botaoCadastrar">
              <button onClick={Cadastrar} id="botaoCadastro">Cadastrar</button>
            </div>
          </div>
        ) : (
          <div id="telaLogin">
            <label id="titulo">LOGIN</label>

            <label id="cpfLogin">CPF</label>
            <input id="username" type="text" className="classeInputs" placeholder="Digite seu cpf, sem pontos" />

            <label id="senhaLogin">Senha</label>
            <input id="password" type="password" className="classeInputs" placeholder="Digite sua senha" />

            <button onClick={Login} id="logar">Logar</button>
          </div>
        )}

        <div id="ladoDireito"></div>
      </div>

      {telaAtual === 'login' && (
        <div id="espacoAbaixo">
          <label>Esqueceu sua senha?</label><label>Clique aqui!</label>
        </div>
      )}
    </div>
  );
};

export default PaginaCadastroLogin;
