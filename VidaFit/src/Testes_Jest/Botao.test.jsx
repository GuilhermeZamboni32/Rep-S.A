// Botao.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Botao } from './Botao';

test('deve renderizar o texto do botão', () => {
  render(<Botao>Click aqui</Botao>);
  expect(screen.getByText('Click aqui')).toBeInTheDocument();
});

test('deve chamar a função ao clicar no botão', () => {
  const handleClick = jest.fn();
  render(<Botao onClick={handleClick}>Clique</Botao>);
  fireEvent.click(screen.getByText('Clique'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
