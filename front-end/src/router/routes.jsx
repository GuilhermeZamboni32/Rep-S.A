import { createBrowserRouter } from "react-router-dom"; 
import TelaInicial from "../Components/TelaInicial";
import Cadastro from "../Components/Cadastro";
import Login from "../Components/Login";
import TelaPerfil from "../Components/TelaPerfil";

const router = createBrowserRouter([
    {path: "/", element: <TelaInicial />},
    {path: "/Cadastro", element: <Cadastro />},
    {path: "/Login", element: <Login />},
    {path: "/TelaPerfil", element: <TelaPerfil />},
])

export default router;