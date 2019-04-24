import React, {useEffect} from 'react';
import './styles/styles.css';

function Pack(props) {

  let {cards} = props

  useEffect(()=>{
    let cardImageElements = document.getElementsByClassName("cardImage")

    Array.from(cardImageElements).forEach((element)=>{
      element.addEventListener("click", function(){
        console.log(element.id)
        element.style.outline = "thick solid red";
      })
    })
  },[])

  //turn card list into images of cards
  let cardImages = cards.map((card, index) => {
    return(
      <img
        className="cardImage"
        src={"images/" + card + ".jpg"}
        alt={card}
        id={card + "-pack-image"}
        key={index}
      />
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
