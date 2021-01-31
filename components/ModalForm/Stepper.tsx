import * as React from "react";
import styled from "styled-components";

import MuiStepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const steps = ["Введите свои данные", "Создайте справку", "Выберите доставку"];

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;

  & .MuiStepIcon-root.MuiStepIcon-active,
  & .MuiStepIcon-root.MuiStepIcon-completed {
    color: #3056de;
  }
`;

interface StepperProps {
  activeStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ activeStep = 0 }) => (
  <Wrapper>
    <MuiStepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  </Wrapper>
);
