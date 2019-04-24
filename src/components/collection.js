import React from 'react';
import './styles/styles.css';

function Collection(props) {

  let {cards} = props

  //turn card list into images of cards
  let cardImages = cards.map((card,index) => {
    return(
      <img
        src={"images/" + card + ".jpg"}
        alt={card}
        key={index}
      />
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
