import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Formcontext } from "../context/Formcontext";
import email from "../assets/mail.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/instagram.png";
import Button from "../helpers/Button";
import { Link, useNavigate } from "react-router-dom";

const Prof = () => {
  const [data, setData] = useState({});
  const { toaster } = useContext(Formcontext);
  const navigate = useNavigate("/");

  const getData = useCallback(async () => {
    axios
      .post(process.env.REACT_APP_GET_DATA, {
        email: localStorage.getItem("current"),
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch(() => {
        toaster("Failed data fetching", "🥲");
      });
  }, [toaster]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="wrapper w-[95%] lg:w-3/4 mx-auto mt-[5%]">
      {/* personal details  */}
      <div className="personaldetails">
        <div className="name text-4xl lg:text-6xl capitalize font-semibold flex flex-col items-center gap-2">
          <div className="replica-profile-image bg-gradient-to-br from-red via-blue to-green w-48 h-48 rounded-full" />

          {data?.firstname + " " + data?.lastname}

          <div className="email font-normal normal-case text-sm flex gap-2 mx-1">
            <img src={email} className="w-5" alt="" />
            {data?.email}
          </div>

          <div className="bio font-normal text-xs text-tertiary w-[95%] lg:w-[80%] text-start bg-element py-10 px-10 rounded-md mt-5">
            <div className="text-4xl font-semibold mb-5">Bio ↴</div>
            {data?.bio}
          </div>

          <div className="bio font-normal text-xs text-tertiary w-[95%] lg:w-[80%] text-start bg-element py-10 px-10 rounded-md mt-5">
            <div className="text-4xl font-semibold mb-5">Qualifications ↴</div>
            {data?.education}
          </div>

          <div className="projects text-4xl font-semibold text-tertiary w-[95%] lg:w-[80%] text-start bg-element py-10 px-10 rounded-md mt-5">
            Project links ↴
            <div className="mt-4">
              {data?.projects?.map((proj, i) => {
                return (
                  <div className="text-sm font-normal normal-case my-2 text-blue">
                    <Link to={proj}>{i + 1 + ". " + proj}</Link>{" "}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="projects text-4xl font-semibold text-tertiary w-[95%] lg:w-[80%] text-start bg-element py-10 px-10 rounded-md mt-5">
            Social links ↴
            <div className="mt-4">
              {data?.links?.map((link, i) => {
                return (
                  <div className="text-sm font-normal normal-case my-2 text-blue flex justify-start items-center gap-2">
                    <img
                      src={i === 0 ? github : i === 1 ? linkedin : insta}
                      className="w-5"
                      alt=""
                    />
                    <Link to={link}>{link}</Link>{" "}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-sm my-5 normal-case font-normal">
            Account created on {data?.creation?.substring(0, 10)}
          </div>
        </div>
      </div>

      <div className="button-to-forgot-about-current-account mx-auto text-center">
        <Button
          text={"Forget about current account"}
          backgroundColor={"red"}
          padding={10}
          borderRadius={5}
          onClick={() => {
            localStorage.setItem("current", "");
            navigate("/");
          }}
        />
      </div>

      <div className="personaldetails "></div>
    </div>
  );
};

export default Prof;
