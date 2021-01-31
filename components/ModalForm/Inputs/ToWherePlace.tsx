import * as React from "react";
import * as yup from "yup";

import { Input, InputProps } from "components";
import { useDetailsValidation } from "scripts";

export const ToWherePlaceValidation = yup.object({
  toWherePlace: yup
    .string()
    .required("Введите название учреждения, которому нужно написать справку")
    .min(5, "Введите название учреждения, которому нужно написать справку")
    .max(200, "Название слишком длинное"),
});

interface ToWherePlaceProps extends InputProps {}

export const ToWherePlace: React.FC<ToWherePlaceProps> = ({
  name = "details.toWherePlace",
  placeholder = "Школа №127, ул. Ялтинская 13",
  title = "Куда нужна справка",
  ...props
}) => {
  useDetailsValidation("toWherePlace");

  return (
    <Input
      title={title}
      type="text"
      name={name}
      placeholder={placeholder}
      min="5"
      max="200"
      wide
      {...props}
    />
  );
};
