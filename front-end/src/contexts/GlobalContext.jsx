import { createContext, useState } from "react";
import Login from "../Components/Login";
export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
const [usuarioLogado, setUsuarioLogado] = useState('');
//let bairro = 'monte Verde'



    return(
        <GlobalContext.Provider value={{usuarioLogado, setUsuarioLogado}}>
            {children}
        </GlobalContext.Provider>
    )
}

