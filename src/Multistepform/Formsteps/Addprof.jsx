import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Formcontext } from "../../context/Formcontext";
import Textfieldcomponent from "../../helpers/Textfield";
import Loader from "../../helpers/Loader";

const Addprof = () => {

  //getting the required states from context
  const {
    setSocial1,
    setSocial2,
    setSocial3,
    social1,
    social2,
    social3,
    fact,
    setFact,
    loader
  } = useContext(Formcontext);


  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="mt-10"
    >
      {/* loader component for loading  */}
      {loader && <Loader/>} 

      {/* heading  */}
      <div className="head text-5xl font-semibold text-start m-auto tracking-tight w-[90%] xl:w-[53%]">
        Add your social media links and fun facts about you🤞
      </div>

      {/* text fields and text area  */}
      <div className="wrapper min-h-[48vh] mx-auto w-[90%] xl:w-[53%]">
        <div className="inputs mt-8">
          <Textfieldcomponent
            placeholder={"Github Link"}
            value={social1}
            onChange={(e) => setSocial1(e.target.value)}
          />
          <Textfieldcomponent
            placeholder={"LinkedIn Link"}
            value={social2}
            onChange={(e) => setSocial2(e.target.value)}
          />
          <Textfieldcomponent
            placeholder={"Instagram Link"}
            value={social3}
            onChange={(e) => setSocial3(e.target.value)}
          />
          <textarea
            className="w-full bg-element outline-none resize-y min-h-44 max-h-48 p-5 text-sm text-tertiary rounded-sm mt-2"
            placeholder="Add some fun facts about yourself🙂"
            value={fact}
            onChange={(e) => setFact(e.target.value)}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Addprof;
