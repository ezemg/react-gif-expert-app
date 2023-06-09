import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid.jsx';
import { useFetchGifs } from '../../src/hooks/useFetchGifs.js';

jest.mock('../../src/hooks/useFetchGifs.js');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Succession';

  test('Debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Ezequiel',
        url: 'https://pruebas.com',
      },
      {
        id: 'DEF',
        title: 'Matias',
        url: 'https://pruebas.com/2',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(gifs.length);
  });
});
