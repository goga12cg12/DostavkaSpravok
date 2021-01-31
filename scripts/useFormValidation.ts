import * as React from "react";
import {
  formValidateContext,
  Step,
} from "components/ModalForm/FormValidationContext";

export const useFormValidation = (name: Step) => {
  const setValidation = React.useContext(formValidateContext);

  React.useEffect(() => {
    setValidation(name, true);
    return () => {
      setValidation(name, false);
    };
  }, []);
};
