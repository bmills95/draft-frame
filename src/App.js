import React, { useEffect, useState } from 'react';
import Pack from './components/pack.js'
import Collection from './components/collection.js'

import './App.css';

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
      </header>
      <body className="App-body">
        <Pack cards={['Shock', 'Absorb', 'Aven_Sentry', 'Breeding_Pool']}/>
        <Collection cards={['Deeproot_Waters','Deeproot_Waters','Deeproot_Waters']}/>
      </body>
    </div>
  );
}

export default App;
