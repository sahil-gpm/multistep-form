import React from "react";
import { MoonLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="absolute top-20 w-[45%] h-[55%] shadow-xl z-10 bg-element left-[30%] flex flex-col justify-center items-center">
      <div className="w-fit rounded-md mx-auto">
        <MoonLoader color="#ffffff" size={50} />
      </div>
      <div className="font-semibold mt-8">Creating your new account 🎉</div>
    </div>
  );
};

export default Loader;
