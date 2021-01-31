import * as React from "react";

import { BornIn, Address, CarCategory } from "components/ModalForm/Inputs";
import { Price } from "components/ModalForm/Price";

interface DriverProps {}

export const Driver: React.FC<DriverProps> = () => (
  <>
    <BornIn />
    <Address title="Адрес Прописки" />
    <CarCategory />
    <Price price={350} />
  </>
);
