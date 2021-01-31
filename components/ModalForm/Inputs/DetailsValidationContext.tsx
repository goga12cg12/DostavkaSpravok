import * as React from "react";
import * as yup from "yup";

import { AmountValidation } from "./Amount";
import { AddressValidation } from "./Address";
import { DiagnosisValidation } from "./Diagnosis";
import { DiseasesValidation } from "./Diseases";
import { FromValidation } from "./From";
import { InspectionDateValidation } from "./InspectionDate";
import { PregnancyWeekValidation } from "./PregnancyWeek";
import { SexValidation } from "./Sex";
import { ToValidation } from "./To";
import { ToWherePlaceValidation } from "./ToWherePlace";

export type Detail =
  | "amount"
  | "address"
  | "diagnosis"
  | "diseases"
  | "from"
  | "inspectionDate"
  | "pregnancyWeek"
  | "sex"
  | "to"
  | "toWherePlace";

interface FieldArray {
  field: Detail;
  validation: yup.AnyObjectSchema;
}

const fields: FieldArray[] = [
  { field: "amount", validation: AmountValidation },
  { field: "address", validation: AddressValidation },
  { field: "diagnosis", validation: DiagnosisValidation },
  { field: "diseases", validation: DiseasesValidation },
  { field: "from", validation: FromValidation },
  { field: "inspectionDate", validation: InspectionDateValidation },
  { field: "pregnancyWeek", validation: PregnancyWeekValidation },
  { field: "sex", validation: SexValidation },
  { field: "to", validation: ToValidation },
  { field: "toWherePlace", validation: ToWherePlaceValidation },
];

const initialValidation = {
  address: false,
  amount: false,
  diagnosis: false,
  diseases: false,
  from: false,
  inspectionDate: false,
  pregnancyWeek: false,
  sex: false,
  to: false,
  toWherePlace: false,
};

export const detailsValidationContext = React.createContext<yup.AnyObjectSchema>(
  yup.object()
);
export const detailsValidateContext = React.createContext<
  (field: Detail, status: boolean) => void
>(() => {});

export const WithDetailsValidation: React.FC = ({ children }) => {
  const [validationState, setValidation] = React.useState(initialValidation);
  const validationRef = React.useRef(validationState);

  const updateFieldValidation = (field: Detail, status: boolean) => {
    const newValue = { ...validationRef.current, [field]: status };
    validationRef.current = newValue;
    setValidation(newValue);
  };

  const validation = React.useMemo(
    () =>
      fields.reduce((mergedSchemas, schema) => {
        if (validationState[schema.field]) {
          return mergedSchemas.concat(schema.validation);
        }
        return mergedSchemas;
      }, yup.object()),
    [validationState]
  );

  return (
    <detailsValidationContext.Provider value={validation}>
      <detailsValidateContext.Provider value={updateFieldValidation}>
        {children}
      </detailsValidateContext.Provider>
    </detailsValidationContext.Provider>
  );
};
