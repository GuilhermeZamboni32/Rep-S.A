import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaInicial from './Components/TelaInicial';
import Cadastro from './Components/Cadastro';
import Login from './Components/Login';
import TelaPerfil from './Components/TelaPerfil';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TelaInicial />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/perfil" element={<TelaPerfil />} />
            </Routes>
        </Router>
    );
}

export default App;
