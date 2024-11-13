import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BarraPesquisa.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';

function BarraPesquisa() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const items = [
    { title: 'barbeiro', image: 'barbeiro.jpg', description: `Nome: João\nIdade: 38 Anos` },
    { title: 'enfermeira', image: 'enfermeira.jpg', description: `Nome: Maria\nIdade: 27 Anos` },
    { title: 'reporter', image: 'reporter.jpg', description: `Nome: Fabio\nIdade: 30 Anos` },
    { title: 'manicure', image: 'manicure.webp', description: `Nome: Amanda\nIdade: 29 Anos` },
    { title: 'medico', image: 'medico.jpeg', description: `Nome: Gustavo\nIdade: 36 Anos` },
    { title: 'professor', image: 'professor.png', description: `Nome: Thiago\nIdade: 42 Anos` }
  ];

  const formatString = (value) => {
    return value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const filteredItems = items.filter((item) => {
    const formattedTitle = formatString(item.title);
    const formattedDescription = formatString(item.description);
    const formattedSearch = formatString(searchTerm);
    return (
      formattedTitle.includes(formattedSearch) ||
      formattedDescription.includes(formattedSearch)
    );
  });

  const handleViewClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div id="container">
      <div className="input-group">
        <div className="input-icon">
          <FaMagnifyingGlass />
        </div>
        <input
          id="search"
          type="text"
          className="input-pesquisa"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="items">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li className="item" key={index}>
              <div className="item-image">
                <img src={item.image} alt={`${item.title} poster`} />
              </div>
              <div className="item-content">
                <h2 className="item-title">{item.title}</h2>
                <p className="item-description">{item.description}</p>
                <button className="view-button" onClick={() => handleViewClick(item)}>
                  Ver
                </button>
              </div>
            </li>
          ))
        ) : (
          <li id="no_results">
            <p>Nenhum resultado encontrado</p>
          </li>
        )}
      </ul>

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="janela-modal abrir">
          <div className="modal">
            <button className="fechar" onClick={closeModal}>X</button>
            <h1>{selectedItem.title}</h1>
            <img src={selectedItem.image} alt={`${selectedItem.title}`} style={{ width: '100%', borderRadius: '10px' }} />
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BarraPesquisa;
