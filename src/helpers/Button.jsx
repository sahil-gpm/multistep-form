import React from "react";

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
