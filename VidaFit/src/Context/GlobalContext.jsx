import React,  { createContext, useState} from 'react';


export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    
    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputImagem, setInputImagem] = useState('')

    let nome1 = "Dio e seu Bando"
    
    return (
      <GlobalContext.Provider value={{ nome1,  user, setUser,    inputNome, setInputNome,    inputDescricao, setInputDescricao,    inputImagem, setInputImagem}}>
        {children}
      </GlobalContext.Provider>
    );
  };