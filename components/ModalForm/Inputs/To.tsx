import * as React from "react";
import * as yup from "yup";

import { Input } from "components";
import { getDateYearsBack, prettyDate } from "scripts/helpers";

import { useDetailsValidation } from "scripts";

export const ToValidation = yup.object({
  to: yup
    .date()
    .nullable()
    .notRequired()
    .min(
      getDateYearsBack(5),
      "Для заказа документов по старым формам и датам обратитесь в поддержку"
    )
    .max(
      getDateYearsBack(-2),
      "Конечная дата документа не может быть больше двух лет от сегодняшнего дня"
    ),
});

interface ToProps {}

export const To: React.FC<ToProps> = () => {
  useDetailsValidation("to");

  return (
    <Input
      name="details.to"
      title="По (включительно)"
      type="date"
      placeholder="23.06.2020"
      min={prettyDate(getDateYearsBack(5))}
      max={prettyDate(getDateYearsBack(-2))}
    />
  );
};
