import { getByTitle } from '@testing-library/react';
import { getGifs } from '../../src/helpers/getGifs.js';

describe('Pruebas en getGifs.js', () => {
  const category = 'Ezequiel';

  test('GetGifs debe retornar arreglo de gifs', async () => {
    const gifs = await getGifs(category);
    expect(typeof gifs).toBe(typeof []);

    // expect(Object.keys(gifs[0])).toEqual(['id', 'title', 'url']);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
