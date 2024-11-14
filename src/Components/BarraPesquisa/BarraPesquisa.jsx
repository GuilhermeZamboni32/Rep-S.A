import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import './BarraPesquisa.css';

function BarraPesquisa() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState({});

  const items = [
    { title: 'Barbeiro', image: 'barbeiro.jpg', description: 'Nome: João, Idade: 38 Anos' },
    { title: 'Enfermeira', image: 'enfermeira.jpg', description: 'Nome: Maria, Idade: 27 Anos' },
    { title: 'Reporter', image: 'reporter.jpg', description: 'Nome: Fabio, Idade: 30 Anos' },
    { title: 'Manicure', image: 'manicure.webp', description: 'Nome: Amanda, Idade: 29 Anos' },
    { title: 'Medico', image: 'medico.jpeg', description: 'Nome: Gustavo, Idade: 36 Anos' },
    { title: 'Professor', image: 'professor.png', description: 'Nome: Thiago, Idade: 42 Anos' },
  ];

  const horariosPadrao = [
    '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00',
  ];

  const formatString = (value) =>
    value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const filteredItems = items.filter((item) => {
    const formattedTitle = formatString(item.title);
    const formattedDescription = formatString(item.description);
    const formattedSearch = formatString(searchTerm);
    return formattedTitle.includes(formattedSearch) || formattedDescription.includes(formattedSearch);
  });

  const handleViewClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);

    // Inicializar os horários disponíveis para o funcionário selecionado se ainda não estiver configurado
    if (!horariosDisponiveis[item.title]) {
      setHorariosDisponiveis((prev) => ({
        ...prev,
        [item.title]: [...horariosPadrao],
      }));
    }
  };

  const closeModal = () => setShowModal(false);

  const handleHorarioClick = (horario) => {
    // Marcar o horário como agendado para o funcionário atual
    setHorariosDisponiveis((prev) => ({
      ...prev,
      [selectedItem.title]: prev[selectedItem.title].map((h) =>
        h === horario ? 'Agendado' : h
      ),
    }));
    alert('Agendamento realizado!');
  };

  return (
    <div id="container">
      <div className="grupo-input">
        <div className="icone-input">
          <FaMagnifyingGlass />
        </div>
        <input
          id="search"
          type="text"
          className="input-pesquisa"
          placeholder="Pesquisar funcionários"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="items">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li className="item" key={index}>
              <div className="item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-content">
                <h2 className="titulo-item">{item.title}</h2>
                <p className="descrição-item">{item.description}</p>
                <button className="botão-ver" onClick={() => handleViewClick(item)}>
                  Ver Perfil
                </button>
              </div>
            </li>
          ))
        ) : (
          <li id="sem-resultado">
            <p>Nenhum resultado encontrado</p>
          </li>
        )}
      </ul>

      {showModal && selectedItem && (
        <div className="posição-modal">
          <div className="container-modal">
            <button className="fecha-modal" onClick={closeModal}>X</button>
            <h2 className="texto-modal">{selectedItem.title}</h2>
            <img src={selectedItem.image} alt={selectedItem.title} className="imagem-modal" />
            <p className="descrição-modal">{selectedItem.description}</p>
            <div className="horarios-container">
              <h3>Horários Disponíveis</h3>
              <div className="grade-horarios">
                {horariosDisponiveis[selectedItem.title]?.map((horario, index) => (
                  <button
                    key={index}
                    className="botao-horario"
                    onClick={() => horario !== 'Agendado' && handleHorarioClick(horario)}
                    disabled={horario === 'Agendado'}
                  >
                    {horario}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BarraPesquisa;
