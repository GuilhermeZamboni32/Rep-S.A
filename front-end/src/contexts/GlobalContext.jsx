import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
//let bairro = 'monte Verde'
const [bairro, setBairro] = useState('Monte verde')


    return(
        <GlobalContext.Provider value={{usuarioLogado, bairro, setBairro}}>
            {children}
        </GlobalContext.Provider>
    )
}

