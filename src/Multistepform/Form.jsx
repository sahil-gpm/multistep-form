import React, { useContext } from "react";
import Stepper from "./Steppercomponent";
import Personalform from "./Formsteps/Personalform";
import Button from "../helpers/Button";
import { Formcontext } from "../context/Formcontext";
import Qualiskills from "./Formsteps/Qualiskills";
import Addprof from "./Formsteps/Addprof";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate("/");
  const {
    currentPage,
    setCurrentPage,
    validateForm1,
    validateForm2,
    validateForm3,
    setLoader,
    firstName,
    lastName,
    email,
    password,
    bio,
    education,
    fact,
    link1,
    link2,
    link3,
    social1,
    social2,
    social3,
    toaster,
  } = useContext(Formcontext);

  const addAcc = async () => {
    axios
      .post(process.env.REACT_APP_ADD_ACC, {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        bio: bio,
        education: education,
        funfact: fact,
        projects: [link1, link2, link3],
        links: [social1, social2, social3],
      })
      .then((response) => {
        if (response.data.success) {
          setLoader(false);
          toaster("New account created", "🙂");
          localStorage.setItem("current", email); //i know we can use session or cookies but for now i am doing it with localstorage
          navigate("/current-acc");
          window.location.reload();
        } else {
          toaster("Account creation failed", "❌");
          setLoader(false);
        }
      })
      .catch((e) => {
        toaster(e.message, "❌");
        setLoader(false);
      });
  };

  return (
    <div>
      <div className="back-home absolute top-5 left-6 hidden lg:block">
        <Button
          text={"Home"}
          backgroundColor={"#1c1c1c"}
          width={80}
          padding={7}
          borderRadius={5}
          onClick={() => navigate("/")}
        />
      </div>

      <Stepper />
      {currentPage === 0 ? (
        <Personalform />
      ) : currentPage === 1 ? (
        <Qualiskills />
      ) : (
        <Addprof />
      )}
      <div className="navigators w-[90%] xl:w-[53%] flex justify-between mx-auto">
        <Button
          text={"Previous"}
          backgroundColor={currentPage > 0 ? "#186ad2" : "#1c1c1c"}
          width={120}
          borderRadius={4}
          padding={10}
          onClick={() => {
            if (currentPage >= 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        />
        <Button
          text={currentPage === 2 ? "Finish" : "Next"}
          backgroundColor={currentPage < 2 ? "#186ad2" : "#1c1c1c"}
          width={120}
          borderRadius={4}
          padding={10}
          onClick={async () => {
            if (currentPage === 0) {
              validateForm1();
              return;
            }
            if (currentPage === 1) {
              validateForm2();
              return;
            }

            const res = validateForm3();
            if (res) {
              addAcc();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Form;
