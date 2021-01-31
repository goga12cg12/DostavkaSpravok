import * as React from "react";

import { string, object } from "yup";

import { Input, TextArea } from "components";
import { useFormValidation } from "scripts/useFormValidation";

export const ContactValidation = object({
  shipTo: string()
    .required("Введите адрес доставки или номер отделения Новой Почты")
    .min(10, "Введите полный адрес доставки и номер отделения Новой Почты")
    .max(300, "Введённое значение слишком длинное"),
  comment: string()
    .notRequired()
    .max(500, "Введённое значение слишком длинное"),
});

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  useFormValidation("contact");

  return (
    <>
      <Input
        name="shipTo"
        title="Адрес доставки"
        type="text"
        placeholder="Нова Пошта отделение №57, Киев, ул. Костянтиновская"
        min={10}
        max={300}
        wide
      />
      <TextArea
        name="comment"
        title="Комментарии"
        placeholder="Можете оставить нам дополнительные инструкции в этом поле"
        required={false}
        max={500}
        wide
      />
      <div className="aside-note" data-wide>
        Мы свяжемся с вами по указанному телефону, чтобы уточнить детали заказа
        и точную цену.
      </div>
    </>
  );
};
