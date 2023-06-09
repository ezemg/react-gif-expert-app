import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem.jsx';

describe('pruebas en <GifItem />', () => {
  const title = 'Ezequiel';
  const url = 'https://pruebas.com/ezequiel.jpg';

  test('debe hacer match con el snapshot', () => {
    const { container } = render(
      <GifItem
        title={title}
        url={url}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar la imagen con url y alt indicado', () => {
    render(
      <GifItem
        title={title}
        url={url}
      />
    );

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe mostrar el titulo en el componente', () => {
    render(
      <GifItem
        title={title}
        url={url}
      />
    );

    expect(screen.getByText(title)).toBeTruthy();
  });
});
