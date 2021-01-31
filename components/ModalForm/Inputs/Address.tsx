import * as React from "react";
import * as yup from "yup";

import { Input } from "components";
import { useDetailsValidation } from "scripts";

export const AddressValidation = yup.object({
  address: yup
    .string()
    .required("Введите свой адрес проживания")
    .min(3, "Введите свой полный адрес проживания")
    .max(200, "Введённое значение слишком длинное"),
});

interface AddressProps {
  title?: string;
}

export const Address: React.FC<AddressProps> = ({
  title = "Адрес проживания",
}) => {
  useDetailsValidation("address");

  return (
    <Input
      title={title}
      type="text"
      name="details.address"
      placeholder="Киев, ул. Пушкина 17"
      wide
    />
  );
};
