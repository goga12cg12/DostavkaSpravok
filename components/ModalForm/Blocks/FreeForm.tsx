import * as React from "react";

import { InspectionDate } from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface FreeFormProps {}

export const FreeForm: React.FC<FreeFormProps> = () => (
  <>
    <InspectionDate />
    <Price price={200} />
  </>
);
