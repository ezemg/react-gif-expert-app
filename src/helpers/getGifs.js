export const getGifs = async (category) => {
  const apiKey = `29L7zDp2WKnuW76Dnw6EiBFdYwa27cBd`;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;

  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium?.url,
  }));

  return gifs;
};
