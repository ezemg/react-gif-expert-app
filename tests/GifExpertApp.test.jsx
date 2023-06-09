import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp.jsx';

describe('Pruebas en <GifExpertApp />', () => {
  const tcArr = ['Succession', 'Marvel', 'Fireball'];

  const TC1 = 'Succession';
  const TC2 = 'Marvel';
  const TC3 = 'Fireball';

  const setup = () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    return {
      input,
      form,
    };
  };

  test('onAddCategory', () => {
    const { input, form } = setup();

    tcArr.forEach((tc) => {
      fireEvent.input(input, { target: { value: tc } });
      fireEvent.submit(form);
    });

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(
      tcArr.length
    );
  });

  test('No agregar categoria si ya existe', () => {
    const { input, form } = setup();

    tcArr.forEach((tc) => {
      fireEvent.input(input, { target: { value: tc } });
      fireEvent.submit(form);
    });

    fireEvent.input(input, { target: { value: TC1 } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
  });

  //   test('Postear formularios', () => {
  //     render(<GifExpertApp />);
  //     screen.debug();
  //   });

  //   test('Volver a mandar categoria', () => {
  //     render(<GifExpertApp />);
  //     screen.debug();
  //   });

  //   test('Mandar categoria diferente', () => {
  //     render(<GifExpertApp />);
  //     screen.debug();
  //   });
});
