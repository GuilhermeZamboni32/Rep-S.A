import React,  { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 

    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')

  
    return (
      <UserContext.Provider value={{ user, setUser,    inputNome, setInputNome,    inputDescricao, setInputDescricao,    inputImagem, setInputImagem}}>
        {children}
      </UserContext.Provider>
    );
  };
  export const useUser = () => {
    return useContext(UserContext);
  };