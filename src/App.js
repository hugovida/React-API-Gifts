import React, { useState } from 'react';
import './App.css';
import GifGrid from './GifGrid';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setCategory(searchTerm);
    }
  };

  return (
    <div className="App">
      <h1>Gif Search App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GIF title"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {category && <GifGrid category={category} />}
    </div>
  );
};

export default App;
