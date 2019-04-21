import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const baseAPI = "https://api.scryfall.com"

  const [card, setCard] = useState({});
  const [image, setImage] = useState('');

  useEffect(() =>{
    getNewCard()
    }, []);

  function getNewCard() {
    fetch(baseAPI + '/cards/random')
      .then(response => response.json())
      .then(data => {
        setCard(data);
        setImage(data.image_uris.normal)
      })
      .catch(error => console.log(error));
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
    Look at a random card
        </p>
      <button onClick ={getNewCard}>
        Get a new card!
      </button>
    <img src = {image} alt = 'Loading...'/>
    <p>{card.name} </p>

      </header>
    </div>
  );
}

export default App;
