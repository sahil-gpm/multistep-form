import React, { useState } from "react";
import view from "../assets/eye.png";
import unview from "../assets/hidden.png";
const Textfieldcomponent = ({ placeholder, type, height, value, onChange }) => {
  const [inputType, setInputType] = useState(type);

  return (
    <div className="w-full relative">
      <input
        value={value}
        style={{ height: height }}
        type={inputType}
        className="bg-element outline-none px-4 py-2 w-full my-2 rounded-sm"
        placeholder={placeholder}
        onChange={onChange}
      />

      {/* my custom button is not used here as it is too big anns not suitable here */}
      {type === "password" && (
        <button
          onClick={(e) => {
            e.preventDefault();
            if (inputType === "password") {
              setInputType("text");
              return;
            }
            setInputType("password");
          }}
          className="text-xs absolute right-5 top-5"
        >
          {inputType === "password" ? (
            <img className="w-4" src={view} alt="" />
          ) : (
            <img className="w-4" src={unview} alt="" />
          )}
        </button>
      )}
    </div>
  );
};

export default Textfieldcomponent;
