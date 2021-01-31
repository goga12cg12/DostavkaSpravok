import * as React from "react";

import {
  From,
  To,
  ToWherePlace,
  Diagnosis,
  Address,
} from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface DocketProps {}

export const Docket: React.FC<DocketProps> = () => (
  <>
    <ToWherePlace
      title="Место работы, должность"
      placeholder='"Star Ind", помощник менеджера'
    />

    <From />
    <To />

    <Address />
    <Diagnosis />

    <Price price={200} />
  </>
);
