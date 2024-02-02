import React, { useContext } from "react";
import Textfieldcomponent from "../../helpers/Textfield";
import { Formcontext } from "../../context/Formcontext";
import {motion} from 'framer-motion'


const Personalform = () => {
  //getting the required fields from context
  const {
    firstName,
    setFirstname,
    lastName,
    setLastname,
    email,
    setEmail,
    password,
    setPassword,
    confirmPass,
    setConfirmPass,
    bio,
    setBio,
  } = useContext(Formcontext);

  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="mt-10"
    >
      <div className="head text-5xl font-semibold text-start m-auto tracking-tight w-[90%] xl:w-[53%]">
        Fill personal details
      </div>

      {/* form for personal details  */}
      <form className="mx-auto w-[90%] xl:w-[53%] mt-5 min-h-[55vh]">
        <div className="wrapper flex flex-col items-center">
          <div className="input-name w-full flex gap-2">
            <Textfieldcomponent
              value={firstName}
              placeholder={"Firstname"}
              type={"text"}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Textfieldcomponent
              value={lastName}
              placeholder={"Lastname"}
              type={"text"}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div className="email-and-password w-full">
            <Textfieldcomponent
              value={email}
              placeholder={"Email"}
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textfieldcomponent
              value={password}
              placeholder={"Password"}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Textfieldcomponent
              value={confirmPass}
              placeholder={"Confirm password"}
              type={"password"}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>

          <div className="description w-full my-2">
            <textarea
              className="w-full bg-element outline-none resize-y min-h-44 max-h-52 p-5 text-sm text-tertiary rounded-sm"
              placeholder="Add a short bio about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Personalform;
