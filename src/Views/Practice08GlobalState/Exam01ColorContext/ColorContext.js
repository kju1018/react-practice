import React, { useState } from "react";

const ColorContext = React.createContext({
  color: "yellow",
  setColor: () =>{}
});
//컴포넌트 아님

export function ColorContextProvider(props) {
  const [color, setColor] = useState("yellow");
  const value = {
    color:color,
    setColor: setColor
  };

  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
}

export default ColorContext;