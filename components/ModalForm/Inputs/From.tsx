import * as React from "react";
import * as yup from "yup";

import { Input } from "components";
import { getDateYearsBack, prettyDate } from "scripts/helpers";
import { useDetailsValidation } from "scripts";

export const FromValidation = yup.object({
  from: yup
    .date()
    .required("Введите дату начала болезни")
    .min(
      getDateYearsBack(5),
      "Для получения справок, старше пяти лет, обратитесь в нашу поддержку"
    )
    .max(
      getDateYearsBack(-2),
      "Для получения справок на ещё не наступившую дату обратитесь в нашу поддержку"
    ),
});

interface FromProps {}

export const From: React.FC<FromProps> = () => {
  useDetailsValidation("from");

  return (
    <Input
      name="details.from"
      title="Период с"
      type="date"
      placeholder="23.06.2020"
      min={prettyDate(getDateYearsBack(5))}
      max={prettyDate(getDateYearsBack(-2))}
    />
  );
};
