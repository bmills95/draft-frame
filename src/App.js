import React, { useEffect, useState } from 'react';
import Pack from './components/pack.js'
import Collection from './components/collection.js'
import Dropzone from 'react-dropzone'

import './components/styles/styles.css';

function App() {

  //const [draft, setDraft] = useState();
  //const [collection, setCollection] = useState([])
  let draft = {
    "pack": ["Enter_the_God-Eternals", "Bloom_Hulk", "Deathsprout", "Makeshift_Battalion", "Gateway_Plaza", "Dreadhorde_Butcher", "Martyr_for_the_Cause", "Samut's_Sprint", "Goblin_Assault_Team", "Davriel's_Shadowfugue", "Return_to_Nature", "Charmed_Stray", "Steady_Aim", "Kasmina's_Transmutation"],
    "pick": "Enter_the_God-Eternals",
    "collection": ["Awakening_of_Vitu-Ghazi", "Tyrant's_Scorn", "Huatli's_Raptor", "Arboreal_Grazer", "Loxodon_Sergeant", "Defiant_Strike", "Devouring_Hellion", "Turret_Ogre", "Vivien's_Grizzly", "Ahn-Crop_Invader", "Goblin_Assailant", "Grim_Initiate", "Kronch_Wrangler", "Forced_Landing"]
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Draft Frame</h1>
        <h2>Make a Pick!</h2>
      </header>
      <div className="App-body">
        <h3>Pack</h3>
        <Pack cards={draft.pack}/>
        <h3>Collection</h3>
        <Collection cards={draft.collection}/>
      </div>
    </div>
  );
}

export default App;
