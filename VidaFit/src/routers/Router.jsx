import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import EditPerfil from "../pages/EditPerfil";
import TelaExer from "../pages/TelaExer";
import TelaExerEdit from "../pages/TelaExerEdit";
import Avaliacao from "../pages/Avaliacao";
//import Profissionais from "../pages/Profissionais";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
    {path: "/perfil", element: <Perfil />},
    {path: "/editperfil", element: <EditPerfil />},
    {path: "/telaexer", element: <TelaExer />},
    {path: "/telaexeredit", element: <TelaExerEdit />},
//  {path: "/profissionais", element: <Profissionais />},
    {path: "/avaliacao", element: <Avaliacao />},
])

export default router;