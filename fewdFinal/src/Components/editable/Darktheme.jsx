import { useState, useEffect } from "react";


const Darktheme = () => {
  const [color, setColor] = useState("gray");
  const [font, setFont] = useState("black");
  const click = () => {
    setFont((prevFont) => (prevFont === "black" ? "white" : "black"));
    setColor((prevColor) => (prevColor === "gray" ? "black" : "gray"));
  };
  useEffect(() => {
    document.body.style.color = font;
    document.body.style.background = color;
  }, [color]);

  return (
    <div>
      <button className="tarot" onClick={click}>THEME</button>
    </div>
  );
};

export default Darktheme;
