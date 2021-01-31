import * as React from "react";

import {
  From,
  To,
  ToWherePlace,
  InspectionDate,
} from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface ActivityProps {}

export const Activity: React.FC<ActivityProps> = () => (
  <>
    <From />
    <To />

    <ToWherePlace />
    <InspectionDate />

    <Price price={150} />
  </>
);
