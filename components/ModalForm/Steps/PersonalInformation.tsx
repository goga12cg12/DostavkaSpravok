import * as React from "react";

import { date, string, object } from "yup";

import { Input, PhoneInput } from "components";
import { phoneValidation } from "components/Assets/PhoneInput";

import { getDateYearsBack, prettyDate } from "scripts/helpers";
import { useFormValidation } from "scripts/useFormValidation";

export const PersonalInformationValidation = object({
  name: string()
    .required("Введите своё имя")
    .min(5, "Введите своё полное имя")
    .max(200, "Введённое имя слишком длинное"),
  birthday: date()
    .min(getDateYearsBack(100), "Вряд ли вы родились более ста лет назад")
    .max(new Date(), "Вряд ли вы родились в будущем"),
  phone: phoneValidation,
});

interface PersonalInformationProps {}

export const PersonalInformation: React.FC<PersonalInformationProps> = () => {
  useFormValidation("personalInfo");

  return (
    <>
      <Input
        name="name"
        title="Полное имя"
        type="text"
        placeholder="Сорокин Вадим Андреевич"
        minLength={5}
        maxLength={200}
        wide
      />
      <Input
        name="birthday"
        title="Дата рождения"
        type="date"
        placeholder={prettyDate(getDateYearsBack(20))}
        min={prettyDate(getDateYearsBack(100))}
        max={prettyDate(new Date())}
      />
      <PhoneInput
        name="phone"
        title="Телефон"
        type="phone"
        placeholder="+380 (12) 345-67-89"
        minLength={9}
        maxLength={20}
      />
    </>
  );
};
