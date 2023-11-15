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
    console.log("fun")
    // alert(card.stringfy())
    // setSelectedCard(card);
    // setButtonPopup(true);
    // console.log(selectedCard)
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
                  onClick={() => alert("string")} // Removed unnecessary argument in the onClick function
                  key={card.number}
                >
                  {card.name}
                </button>
              ))}
          </ul>
          <Popup
          selectedCard={selectedCard}
          trigger={buttonPopup}>
            {console.log("string")}
            {/* Your Popup content goes here */}
          </Popup>
        </div>
      )}
    </div>
  );
};

export default TarotCards;