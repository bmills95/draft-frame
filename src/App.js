import React, { useEffect, useState } from 'react';
import Pack from './components/pack.js'
import Collection from './components/collection.js'

import './components/styles/styles.css';

function App() {

  const [card, setCard] = useState('');
  //const [collection, setCollection] = useState([])

  useEffect(() => {
    setCard('Shock');
  });

  console.log('./data/images/' + card + '.jpg')

  return (
    <div className="App">
      <header className="App-header">
        <h1>Draft Frame</h1>
        <h2>Make a Pick!</h2>
      </header>
      <div className="App-body">
        <Pack cards={['Shock', 'Absorb', 'Aven_Sentry', 'Breeding_Pool']}/>
        <Collection cards={['Deeproot_Waters','Deeproot_Waters','Deeproot_Waters']}/>
      </div>
    </div>
  );
}

export default App;
