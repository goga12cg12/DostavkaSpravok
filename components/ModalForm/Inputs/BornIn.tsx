import * as React from "react";
import * as yup from "yup";

import { Input } from "components";
import { useDetailsValidation } from "scripts";

export const BornInValidation = yup.object({
  bornIn: yup
    .string()
    .required("Введите своё место рождения")
    .min(3, "Введите полное место рождения")
    .max(200, "Введённое значение слишком длинное"),
});

interface BornInProps {}

export const BornIn: React.FC<BornInProps> = () => {
  useDetailsValidation("bornIn");

  return (
    <Input
      title="Место рождения"
      type="text"
      name="details.bornIn"
      placeholder="Украина, г. Киев"
      wide
    />
  );
};
