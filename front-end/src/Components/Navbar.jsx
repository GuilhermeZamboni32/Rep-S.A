import React from 'react';
import './Navbar.css';

function Navbar({ setActivePage }) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item" onClick={() => setActivePage('TelaInicial')}>
                    Início
                </li>
                <li className="navbar-item" onClick={() => setActivePage('Cadastro')}>
                    Cadastro
                </li>
                <li className="navbar-item" onClick={() => setActivePage('Login')}>
                    Login
                </li>
                <li className="navbar-item" onClick={() => setActivePage('TelaPerfil')}>
                    Perfil
                </li>
               
            </ul>
        </nav>
    );
}

export default Navbar;
