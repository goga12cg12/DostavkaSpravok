import * as React from "react";
import * as yup from "yup";

import { Input } from "components";
import { useDetailsValidation } from "scripts";

export const AddressValidation = yup.object({
  address: yup
    .string()
    .required("Введите свой адрес проживания")
    .min(3, "Введите совй полный адрес проживания")
    .max(200, "Введённое значение слишком длинное"),
});

interface AddressProps {}

export const Address: React.FC<AddressProps> = () => {
  useDetailsValidation("address");

  return (
    <Input
      title="Адрес проживания"
      type="text"
      name="details.address"
      placeholder="Киев, ул. Пушкина 17"
      wide
    />
  );
};
