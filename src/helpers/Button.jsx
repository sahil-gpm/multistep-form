import React from "react";

//custom button component
const Button = ({
  text,
  disable,
  textColor,
  backgroundColor,
  borderRadius,
  width,
  padding,
  weight,
  border,
  borderColor,
  onClick,
  opacity,
}) => {

  //content to be returned
  return (
    <button
      className="text-sm font-semibold"
      style={{
        opacity: opacity,
        color: textColor,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        width: width,
        fontWeight: weight,
        padding: padding,
        border: border,
        borderColor: borderColor,
      }}
      disabled={disable}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-2">
        {text}
      </div>
    </button>
  );
};

export default Button;
