import { useState } from "react";

const Accordion = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);
  console.log(expand);

  return (
    <div className="accordion">
      <button className="yourMama" onClick={toggleExpand}>
        About <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && (
        <div className="content">
          <p>
            This project displays information about Tarot. It was created for
            educational purposes only
            <br /> and should not be taken too seriously.
            <br /> i appreciate you taking the time to look around
          </p>
          <h4> with warmth, joy</h4>
        </div>
      )}
    </div>
  );
};

export default Accordion;
