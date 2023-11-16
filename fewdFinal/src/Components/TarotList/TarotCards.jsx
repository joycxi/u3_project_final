import React, { useState, useEffect } from "react";

import tarot from "./tarot.json";
import Popup from "./Popup";

const TarotCards = (props) => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  console.log("string")


  const handleCardClick = (card) => {

    setSelectedCard(card);
    setButtonPopup(true);
    console.log(card)
    console.log(selectedCard)
  };

  return (
    <div className="accordion">
      <button className="tarot" onClick={toggleExpand}>
        Major Arcana <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && (
        <div className="majorDiv">
          <ul>
            {console.log("string")}
            {tarot.cards
              .filter((card) => card.arcana === "Major Arcana")
              .map((card) => (
                <button className="tarotCards"
                  onClick={() => handleCardClick(card)} 
                  key={card.number}
                >
                  <link rel="icon" type="image/x-icon" href="./yuguioh-icon.jpg/"></link>
                  {card.name}
                  <p>{card.arcana} 
                 </p> {card.suit}
                </button>
              ))}
          </ul>
          <Popup
          selectedCard={selectedCard}
          trigger={buttonPopup}>
            {console.log("string")}
           
          </Popup> 
        </div>
      )}
    </div>
  );
};

export default TarotCards;