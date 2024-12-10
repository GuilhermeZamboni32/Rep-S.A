// src/Components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    

    return (
        <div className="topo">
            <div className="topo-esquerda-esquerda"></div>
            <div className="topo-esquerda" onClick={() => navigate('/')}>
                <img src="logo-agenda.png" alt="Logo" className="logo" />
            </div>

            <div className="topo-meio">
                {/* Espaço em branco */}
            </div>

            <div className="topo-direita">
                <button className="botao" onClick={() => navigate('/cadastro')}>Cadastro</button>
                <div className="espaco-botao"></div>
                <button className="botao" onClick={() => navigate('/login')}>Login</button>
                <div className="espaco"></div>
            </div>
        </div>
    );
}

export default Navbar;
