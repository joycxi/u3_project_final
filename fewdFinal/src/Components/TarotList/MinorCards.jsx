import { useState } from "react";
import tarot from "./tarot.json";

const MinorCards = (props) => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);
  console.log(expand);

  return (
    <div className="accordion">
      <button className="tarot" onClick={toggleExpand}>
        Minor Arcana <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && (
        <div className="majorDiv">
          <ul>
            {tarot.cards
              .filter((card) => card.arcana === "Minor Arcana")
              .map((card) => (
                <button className="tarotCards"
                  onClick={() => alert("string")} // Removed unnecessary argument in the onClick function
                  key={card.number}
                >
                  {card.name}
                  <p>{card.arcana} 
                  {card.suit}</p>
                  
                </button>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MinorCards;
