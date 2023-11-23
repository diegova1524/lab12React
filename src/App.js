// src/App.js
import React from 'react';
import './App.css';
import CharacterLoader from './CharacterLoader';
import 'bootstrap/dist/css/bootstrap.min.css'; // Agrega la referencia a Bootstrap CSS

function App() {
  return (
    <div className="App">
      <CharacterLoader />
    </div>
  );
}

export default App;
