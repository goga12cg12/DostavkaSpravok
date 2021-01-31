import * as React from "react";

import { Button } from "components";

import { useFormikContext } from "formik";

interface ActionsProps {
  isLastStep: boolean;
  getPrevStep: () => void;
  step: number;
}

export const Actions: React.FC<ActionsProps> = ({
  isLastStep,
  step,
  getPrevStep,
}) => {
  const { isSubmitting } = useFormikContext();

  return (
    <div className="actions" data-wide>
      <Button type="submit" disabled={isSubmitting}>
        {isLastStep ? "Отправить" : "Дальше"}
      </Button>
      {step > 0 && (
        <Button type="button" onClick={getPrevStep} className="action-back">
          Назад
        </Button>
      )}
    </div>
  );
};
