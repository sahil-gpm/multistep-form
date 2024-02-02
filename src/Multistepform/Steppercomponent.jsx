import { Stepper, Step, StepLabel } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Formcontext } from "../context/Formcontext";

const StepperComponent = () => {

  const {currentPage} = useContext(Formcontext)
  const steps = [
    "Personal Details",
    "Qualifications and Skills",
    "Profile Setup",
  ];

  return (
    <div className="mt-[4%] w-[95%] xl:w-[53%] mx-auto">
      <Stepper activeStep={currentPage} alternativeLabel >
        {steps.map((label) => (
          <Step 
            key={label}
            sx={{
              "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                {
                  color: "grey.500",
                },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "#ffffff",
                },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "black",
              },
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepperComponent;
