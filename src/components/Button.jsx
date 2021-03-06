import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { setIsClicked } = useStateContext();

  return (
    <button
      type="button"
      // should be set to this to bring back the app to inintial state
      // onClick={() => setIsClicked(initialState)}

      onClick={() => setIsClicked(true)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
