import * as React from "react";

import { InspectionDate, PregnancyWeek } from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface PregnancyProps {}

export const Pregnancy: React.FC<PregnancyProps> = () => (
  <>
    <PregnancyWeek />
    <InspectionDate wide={false} />

    <Price price={300} />
  </>
);
