import * as React from "react";

import { Amount, Sex } from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface MedicalBookProps {}

export const MedicalBook: React.FC<MedicalBookProps> = () => (
  <>
    <Sex />
    <Amount />

    <Price price={200} />
  </>
);
