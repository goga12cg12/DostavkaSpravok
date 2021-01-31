import * as React from "react";
import {
  detailsValidateContext,
  Detail,
} from "components/ModalForm/Inputs/DetailsValidationContext";

export const useDetailsValidation = (name: Detail) => {
  const setValidation = React.useContext(detailsValidateContext);

  React.useEffect(() => {
    setValidation(name, true);
    return () => {
      setValidation(name, false);
    };
  }, []);
};
