import React,  { createContext, useState} from 'react';


export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    
    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')
    
    return (
      <GlobalContext.Provider value={{ user, setUser,    inputNome, setInputNome,    inputDescricao, setInputDescricao,    inputImagem, setInputImagem}}>
        {children}
      </GlobalContext.Provider>
    );
  };