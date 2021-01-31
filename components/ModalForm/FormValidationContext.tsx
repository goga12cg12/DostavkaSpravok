import * as React from "react";
import * as yup from "yup";

import { PersonalInformationValidation } from "./Steps/PersonalInformation";
import { ContactValidation } from "./Steps/Contact";

import { detailsValidationContext } from "components/ModalForm/Inputs/DetailsValidationContext";

export type Step = "personalInfo" | "contact";

interface StepsArray {
  field: Step;
  validation: yup.ObjectSchema<object>;
}

const fields: StepsArray[] = [
  { field: "personalInfo", validation: PersonalInformationValidation },
  { field: "contact", validation: ContactValidation },
];

const initialValidation = {
  personalInfo: null,
  contact: null,
};

export const formValidationContext = React.createContext<Object>({});
export const formValidateContext = React.createContext<
  (step: Step, validation: boolean) => void
>(() => {});

export const WithFormValidation: React.FC = ({ children }) => {
  const detailsValidation = React.useContext(detailsValidationContext);

  const [validationState, setValidation] = React.useState(initialValidation);
  const validationRef = React.useRef(validationState);

  const updateFieldValidation = (step: Step, validation: boolean) => {
    const newValue = { ...validationRef.current, [step]: validation };
    validationRef.current = newValue;
    setValidation(newValue);
  };

  const validation = React.useMemo(
    () =>
      fields.reduce(
        (mergedSchemas, schema) => {
          if (validationState[schema.field]) {
            return mergedSchemas.concat(schema.validation);
          }
          return mergedSchemas;
        },
        yup.object({
          type: yup.string().required(),
          details: detailsValidation,
        })
      ),
    [validationState, detailsValidation]
  );

  return (
    <formValidationContext.Provider value={validation}>
      <formValidateContext.Provider value={updateFieldValidation}>
        {children}
      </formValidateContext.Provider>
    </formValidationContext.Provider>
  );
};
