import React from 'react';
import './styles/collection.css';

function Collection(props) {

  let {cards} = props

  //turn card list into images of cards
  let cardImages = cards.map((card) => {
    return(
      <img src={"images/" + card + ".jpg"} alt={card} />
    )
  });

  return (
    <div className="Collection">
      <div className="grid-container">
        {cardImages}
      </div>
    </div>
  );
}

export default Collection;
