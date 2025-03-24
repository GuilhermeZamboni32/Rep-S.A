import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  //const [item, setItem] = useState([]); // Adicionando o estado de items

  return (
    <GlobalContext.Provider value={{ usuarios, setUsuarios, }}>
      {children}
    </GlobalContext.Provider>
  );
};