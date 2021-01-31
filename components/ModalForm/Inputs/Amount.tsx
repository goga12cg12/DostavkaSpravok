import * as React from "react";
import * as yup from "yup";

import { Input } from "components";
import { useDetailsValidation } from "scripts";

export const AmountValidation = yup.object({
  amount: yup
    .number()
    .required("Введите нужное количество мед. книжек")
    .min(1, "Минимальное количество - 1")
    .max(100, "Для заказа больших партий книжек обратитесь в нашу поддержку"),
});

interface AmountProps {}

export const Amount: React.FC<AmountProps> = () => {
  useDetailsValidation("amount");

  return (
    <Input
      title="Количество"
      type="number"
      name="details.amount"
      placeholder="0"
      min="1"
      max="100"
      step="1"
      wide
    />
  );
};
