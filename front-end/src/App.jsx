import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TelaInicial from './Components/TelaInicial';
import Cadastro from './Components/Cadastro';
import Login from './Components/Login';
import TelaPerfil from './Components/TelaPerfil';
import TelaADM from './Components/TelaADM';
import './App.css';

function App() {
    const [activePage, setActivePage] = useState('TelaInicial');

    const renderPage = () => {
        switch (activePage) {
            case 'TelaInicial':
                return <TelaInicial />;
            case 'Cadastro':
                return <Cadastro />;
            case 'Login':
                return <Login />;
            case 'TelaPerfil':
                return <TelaPerfil />;
            case 'TelaADM':
                return <TelaADM />;
            default:
                return <TelaInicial />;
        }
    };

    return (
        <div className="app">
            <Navbar setActivePage={setActivePage} />
            <div className="content">{renderPage()}</div>
        </div>
    );
}

export default App;
