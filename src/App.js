import { useState } from 'react';
import React from "react";
import searchBrawler from './api';
import SearchBar from "./component/SearchBar";

function App() {
  const [image, setImages] = useState('');

  const handleFormOnSubmit = async (term) => {
    const results = await searchBrawler(term);

    setImages(results)
  }

  return (
    <div>
      <SearchBar onSubmit={handleFormOnSubmit} />
    </div>
  );
}

export default App;
