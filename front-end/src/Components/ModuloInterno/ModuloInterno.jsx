{/**import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const ModuloInternoContext = createContext();

// Provedor do contexto
export const ModuloInternoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    nome: '',
    dataNascimento: '',
    cpf: '',
    endereco: '',
    senha: '',
    confirmarSenha: ''
  });

  return (
    <ModuloInternoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </ModuloInternoContext.Provider>
  );
};

// Hook para usar o contexto em outros componentes
export const useModuloInterno = () => useContext(ModuloInternoContext);










import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModuloInternoProvider } from './ModuloInterno';

ReactDOM.render(
  <ModuloInternoProvider>
    <App />
  </ModuloInternoProvider>,
  document.getElementById('root')
);







import React, { useState } from 'react';
import { useModuloInterno } from './ModuloInterno';

const Cadastro = () => {
  const { setUserInfo } = useModuloInterno();
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = () => {
    setUserInfo({
      nome,
      dataNascimento,
      cpf,
      endereco,
      senha,
      confirmarSenha
    });
    // redirecionar ou realizar outras ações
  };








import React from 'react';
import { useModuloInterno } from './ModuloInterno';

const TelaPerfil = () => {
  const { userInfo } = useModuloInterno();

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p>Nome: {userInfo.nome}</p>
      <p>Data de Nascimento: {userInfo.dataNascimento}</p>
      <p>CPF: {userInfo.cpf}</p>
      <p>Endereço: {userInfo.endereco}</p>
      
      </div>
      );
    };
    
    export default TelaPerfil;
    

*/}
