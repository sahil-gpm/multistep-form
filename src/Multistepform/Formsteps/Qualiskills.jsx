import React, { useContext } from "react";
import { Formcontext } from "../../context/Formcontext";
import Textfieldcomponent from "../../helpers/Textfield";
import { motion } from "framer-motion";

const Qualiskills = () => {
  //getting the required fields from context
  const {
    link1,
    setLink1,
    link2,
    setLink2,
    link3,
    setLink3,
    education,
    setEducation,
  } = useContext(Formcontext);

  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="mt-10"
    >
      <div className="head text-5xl font-semibold text-start m-auto tracking-tight w-[90%] xl:w-[53%]">
        Qualifications and skills
      </div>

      {/* form for personal details  */}
      <form className="mx-auto w-[90%] xl:w-[53%] mt-5 min-h-[55vh]">
        <textarea
          className="w-full bg-element outline-none resize-y min-h-44 max-h-52 p-5 text-sm text-tertiary rounded-sm"
          placeholder="Add your educational qualifications"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />

        <div className="input-fields mt-5">
          <span className="ml-1 text-sm">
            Add your key projects links for your profile ⚒️
          </span>
          <Textfieldcomponent
            placeholder={"Project 1"}
            value={link1}
            onChange={(e) => setLink1(e.target.value)}
          />
          <Textfieldcomponent
            placeholder={"Project 2"}
            value={link2}
            onChange={(e) => setLink2(e.target.value)}
          />
          <Textfieldcomponent
            placeholder={"Project 3"}
            value={link3}
            onChange={(e) => setLink3(e.target.value)}
          />
        </div>
      </form>
    </motion.div>
  );
};

export default Qualiskills;
