import React, { useEffect, useState } from 'react';
import './App.css'; // Importa el archivo CSS de estilos

const GifGrid = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingGifs = async () => {
      try {
        const apiKey = 'eIO8GiwNck4vGRhVjtlT0hKzsnaYFDhC';
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;
        const response = await fetch(url);
        const { data } = await response.json();

        if (data && data.length > 0) {
          const gifs = data.map((gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
          }));
          setGifs(gifs);
          setLoading(false);
          setError(null);
        } else {
          setError('No se encontraron GIFs.');
          setLoading(false);
        }
      } catch (error) {
        setError('Error al cargar los GIFs. Inténtalo de nuevo más tarde.');
        setLoading(false);
      }
    };

    getTrendingGifs(); // Llama a la función para obtener los GIFs al cargar el componente
  }, []); // El segundo argumento [] indica que solo se ejecuta una vez al montar el componente

  return (
    <div className="gif-grid">
      <h3>Trending GIFs</h3>
      {loading ? (
        <p>Cargando GIFs...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="gif-container">
          {gifs.map((gif) => (
            <div key={gif.id} className="gif-item">
              <img src={gif.url} alt={gif.title} />
              <p>{gif.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GifGrid;
