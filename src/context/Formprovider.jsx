import React, { useState } from "react";
import { Formcontext } from "./Formcontext";
import toast from "react-hot-toast";

const Formprovider = ({ children }) => {
  //form 1 states
  const [currentPage, setCurrentPage] = useState(0);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [bio, setBio] = useState("");
  const [qual, setQual] = useState("");

  //form 2 states
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [education, setEducation] = useState("");

  //form 3 state
  const [social1, setSocial1] = useState("");
  const [social2, setSocial2] = useState("");
  const [social3, setSocial3] = useState("");
  const [fact, setFact] = useState("");
  const [loader, setLoader] = useState(false);

  const toaster = (string, emoji) => {
    toast(string, {
      icon: emoji,
      style: {
        borderRadius: "10px",
        background: "#1c1c1c",
        color: "#fff",
      },
    });
  };

  const outliner = () => {
    const inputs = document.getElementsByTagName("input");
    const areas = document.getElementsByTagName("textarea");
    Array.from(inputs).forEach((input) => {
      if (!input.value) {
        input.style.border = ".1px solid #ef4444";
      } else {
        input.style.border = ".1px solid #38bdf8";
      }
    });
    Array.from(areas).forEach((input) => {
      if (!input.value) {
        input.style.border = ".1px solid #ef4444";
      } else {
        input.style.border = ".1px solid #38bdf8";
      }
    });
  };

  const validateForm1 = () => {
    outliner();
    //checking for empty fields
    if (!firstName || !lastName || !email || !password || !bio) {
      toaster("Fill the required fields", "👏");
      return;
    }
    if (password.length < 6) {
      toaster("Password too short", "👏");
    } else {
      if (currentPage < 1) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  const validateForm2 = () => {
    outliner();
    //checking for empty fields
    if (!link1 || !link2 || !link3) {
      toaster("Mention the project links", "🔗");
      return;
    }
    if (!education) {
      toaster("Add educational qualification", "📚");
      return;
    }
    if (education.trim().length < 40) {
      toaster("Educational details too short", "😕");
      return;
    } else {
      if (currentPage <= 1) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  const validateForm3 = () => {
    outliner();
    //checking for empty fields
    if (!social1 || !social2 || !social3) {
      toaster("Mention the social media links", "🔗");
      return false;
    }
    if (!fact || fact.length < 10) {
      toaster("Add a proper fun fact about you", "👀");
      return false;
    }
    return true;
  };

  return (
    <Formcontext.Provider
      value={{
        currentPage,
        setCurrentPage,
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
        qual,
        setQual,
        validateForm1,
        validateForm2,
        link1,
        setLink1,
        link2,
        setLink2,
        link3,
        setLink3,
        education,
        setEducation,
        social1,
        social2,
        social3,
        setSocial1,
        setSocial2,
        setSocial3,
        fact,
        setFact,
        validateForm3,
        loader,
        setLoader,
        toaster,
      }}
    >
      {children}
    </Formcontext.Provider>
  );
};

export default Formprovider;
