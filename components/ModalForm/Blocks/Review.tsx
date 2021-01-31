import * as React from "react";

import { Sex, Address, InspectionDate } from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface PregnancyProps {}

export const Review: React.FC<PregnancyProps> = () => (
  <>
    <Sex />
    <Address />
    <InspectionDate />

    <Price price={200} />
  </>
);
