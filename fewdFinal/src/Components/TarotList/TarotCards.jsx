import React, { useState, useEffect } from "react";

import tarot from "./tarot.json";
import Popup from "./Popup";

const TarotCards = (props) => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");



  const handleCardClick = (card) => {
    setSelectedCard(card);
    setButtonPopup(true);
    console.log(card)
    console.log(selectedCard)
  };

  return (
    <div className="accordion">
      <button className="yourMama" onClick={toggleExpand}>
        Major Arcana <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && (
        <div className="tarotCards">
          <ul>
            {tarot.cards
              .filter((card) => card.arcana === "Major Arcana")
              .map((card) => (
                <button
                  onClick={() => handleCardClick(card)} // Removed unnecessary argument in the onClick function
                  key={card.number}
                >
                  {card.name}
                </button>
              ))}
          </ul>
          <Popup
          selectedCard={selectedCard}
          trigger={buttonPopup}>
            {/* Your Popup content goes here */}
          </Popup>
        </div>
      )}
    </div>
  );
};

export default TarotCards;