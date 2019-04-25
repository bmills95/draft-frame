import React, {useState} from 'react';
import './styles/styles.css';

function CardImage(props) {

  let {card} = props;

  let [clicked, setClicked] = useState(false);

  function highlight(){
    let nextState = !clicked
    if(nextState){
      document.getElementById(card + "-pack-image")
      .style.outline = "thick solid red";
    }
    else{
      document.getElementById(card + "-pack-image")
      .style.outline = "none";
    }
    setClicked(nextState)
    console.log(clicked)
  }

  return(
    <img
      className="cardImage"
      src={"images/" + card + ".jpg"}
      alt={card}
      id={card + "-pack-image"}
      onClick={highlight}
    />
  )
}

export default CardImage
