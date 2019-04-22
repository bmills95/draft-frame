import React from 'react';
import './styles/pack.css';

function Pack(props) {

  let {cards} = props

  //turn card list into images of cards
  let cardImages = cards.map((card) => {
    return(
      <img src={"images/" + card + ".jpg"} alt={card} />
    )
  });

  return (
    <div className="Pack">
      <div className="grid-container">
        {cardImages}
      </div>
    </div>
  );
}

export default Pack;
