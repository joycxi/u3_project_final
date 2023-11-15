import { useState, useEffect } from "react";

const Darktheme = () => {
  const [color, setColor] = useState("white");
  const [font, setFont] = useState("black");
  const click = () => {
    setFont((prevFont) => (prevFont === "black" ? "white" : "black"));
    setColor((prevColor) => (prevColor === "white" ? "black" : "white"));
  };
  useEffect(() => {
    document.body.style.color = font;
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <button onClick={click}>THEME</button>
    </div>
  );
};

export default Darktheme;
