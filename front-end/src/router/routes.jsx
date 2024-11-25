import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Agua from "../pages/Agua";
import Pagina_Inicial from "../Pages/Pagina_Inicial";
import Cadastro from  "../Pages/Cadastro";


const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/agua", element: <Agua />},
    {path: "/Pagina_Inicial", element: <Pagina_Inicial />},
    {path: "/cadastro", element: <Cadastro />},
])

export default router;
