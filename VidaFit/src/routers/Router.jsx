import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import EditPerfil from "../pages/EditPerfil";
import TelaExer from "../pages/TelaExer";
import TelaExerEdit from "../pages/TelaExerEdit";
import Avaliacao from "../pages/Avaliacao";
import TelaDieta from "../pages/TelaDieta";
import TelaDietaEdit from "../pages/TelaDietaEdit";
import Ad_Funci from "../pages/Ad_Funci";
import PerfilProfissional from "../pages/PerfilProfissional";
import ProfissionalAluno from "../pages/ProfissionalAluno";
//import Profissionais from "../pages/Profissionais";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
    {path: "/perfil", element: <Perfil />},
    {path: "/editperfil", element: <EditPerfil />},
    {path: "/telaexer", element: <TelaExer />},
    {path: "/telaexeredit", element: <TelaExerEdit />},
    {path: "/teladieta", element: <TelaDieta />},
    {path: "/teladietaedit", element: <TelaDietaEdit />},
//  {path: "/profissionais", element: <Profissionais />},
    {path: "/avaliacao", element: <Avaliacao />},
    {path: "/ad_funci", element: <Ad_Funci />},
    {path: "/perfilprofissional", element: <PerfilProfissional />},
    {path: "/profissionalaluno", element: <ProfissionalAluno />},
])

export default router;