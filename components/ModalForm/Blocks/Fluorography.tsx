import * as React from "react";

import { InspectionDate, Sex } from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface FluorographyProps {}

export const Fluorography: React.FC<FluorographyProps> = () => (
  <>
    <Sex />
    <InspectionDate />

    <Price price={100} />
  </>
);
