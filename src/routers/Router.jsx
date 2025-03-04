import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
    {path: "/perfil", element: <Perfil />},
])

export default router;