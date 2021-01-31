import * as React from "react";

import { InspectionDate } from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface PoolProps {}

export const Pool: React.FC<PoolProps> = () => (
  <>
    <InspectionDate />

    <Price price={150} />
  </>
);
