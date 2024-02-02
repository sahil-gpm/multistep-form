import React, { useContext } from "react";
import avatar from "../assets/avatar.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import Button from "../helpers/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Formcontext } from "../context/Formcontext";
import { Link } from "react-router-dom";

const Intoduction = () => {
  const navigate = useNavigate("/"); //use navigate for navigation
  const { setCurrentPage } = useContext(Formcontext); //current form page index

  //content of the page
  return (
    <div className="mt-[12%]">
      {/* if the email is present in local storage then only show the button  */}
      {localStorage.getItem("current") && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="absolute top-5 right-5 flex justify-start gap-2 bg-element px-4 py-2 rounded-md"
        >
          <Button
            text={"View profile"}
            onClick={() => navigate("/current-acc")}
          />
          <div className="w-6 h-6 bg-gradient-to-tr from-red via-blue to-green rounded-full"></div>
        </motion.div>
      )}

      {/* main content of the intro page  */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.25 }}
        className="parent-home-wrapper p-[1px] mx-auto w-[95%] md:w-[55%] bg-gradient-to-br from-red via-green to-blue rounded-lg lg:mt-0 mt-18"
      >
        <div className="sub-wrapper bg-primary p-14 rounded-lg">
          {/* form title  */}
          <div className="head text-3xl md:text-5xl font-semibold text-center md:text-start m-auto tracking-tight">
            Beautiful multi-step form to create your new account 🎉
          </div>

          {/* form description  */}
          <div className="description text-xs text-center lg:text-start lg:text-sm text-tertiary flex md:flex-row flex-col justify-center items-center mx-auto gap-2 lg:mt-2 mt-7">
            <div>
              Hello there! 👋 This is an awesome demo of a multi-step form,
              creating your demo account and securely storing your data. The use
              of React.js {/* image components  */}
              <ImageComponent image={react} /> for the frontend, Node.js{" "}
              <ImageComponent image={node} /> for the backend, and MongoDB{" "}
              <ImageComponent image={mongo} /> for the database is a powerful
              tech stack, hope you like it. Happy Coding!! 🚀
              {/* buttons  */}
              <div className="buttons flex flex-col justify-center xl:justify-start items-center lg:flex-row gap-4 mt-6">
                <Button
                  text={"Create account"}
                  backgroundColor={"white"}
                  textColor={"black"}
                  width={140}
                  padding={9}
                  borderRadius={5}
                  onClick={() => {
                    navigate("/form-page");
                    setCurrentPage(0);
                  }}
                />

                <Link
                  to="https://github.com/sahil-gpm/multistep-form"
                  target="_blank"
                >
                  <Button
                    text={"Github link"}
                    backgroundColor={"black"}
                    textColor={"white"}
                    border={".01px solid grey"}
                    width={140}
                    padding={9}
                    borderRadius={2.5}
                  />
                </Link>
              </div>
            </div>
            <img
              src={avatar}
              className="lg:w-[25%] w-1/2 md:mt-0 mt-4"
              alt=""
            />
          </div>
        </div>
      </motion.div>

      {/* small section for me 🤞 */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mt-20 text-center w-full text-tertiary text-xs font-normal"
      >
        Developed ⚒️ by Sahil Chavan
      </motion.div>
    </div>
  );
};


// function to render image components, this was created because i wanted to add small images as icons and i didn't wanted to add too many img srcs 
const ImageComponent = ({ image }) => {
  return (
    <span>
      <img src={image} className="w-5 inline-block" alt="" />
    </span>
  );
};

export default Intoduction;
