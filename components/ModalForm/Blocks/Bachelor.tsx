import * as React from "react";

import {
  ToWherePlace,
  Sex,
  InspectionDate,
  Diseases,
  Address,
} from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface BachelorProps {}

export const Bachelor: React.FC<BachelorProps> = () => (
  <>
    <Sex />
    <ToWherePlace placeholder="Институт Поплавского" />
    <Address />
    <InspectionDate />
    <Diseases />

    <Price price={200} />
  </>
);
