import * as React from "react";

import { From, To, ToWherePlace, Diagnosis } from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface SickLeaveProps {}

export const SickLeave: React.FC<SickLeaveProps> = () => (
  <>
    <From />
    <To />

    <ToWherePlace placeholder="Школа №127, ул. Ялтинская 13" />
    <Diagnosis />

    <Price>
      <span>₴ 50</span> / день
      <br />
      <span>₴ 200</span> оформление
    </Price>
  </>
);
