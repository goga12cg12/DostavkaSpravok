import * as React from "react";
import * as yup from "yup";

import { Input } from "components";
import { useDetailsValidation } from "scripts";

export const ProfessionValidation = yup.object({
  profession: yup
    .string()
    .required("Введите свою профессию")
    .min(3, "Введите полное название")
    .max(200, "Введённое значение слишком длинное"),
});

interface ProfessionProps {
  title?: string;
}

export const Profession: React.FC<ProfessionProps> = ({
  title = "Ваша Профессия",
}) => {
  useDetailsValidation("profession");

  return (
    <Input
      title={title}
      type="text"
      name="details.profession"
      placeholder="Лётчик"
      wide
    />
  );
};
