import * as React from "react";
import * as yup from "yup";

import { Input } from "components";
import { useDetailsValidation } from "scripts";

export const PregnancyWeekValidation = yup.object({
  pregnancyWeek: yup
    .number()
    .required("Введите неделю беременности")
    .min(1, "Значение не может быть меньше одного")
    .max(46, "Значение не должно превышать 46"),
});

interface PregnancyWeekProps {
  wide?: boolean;
}

export const PregnancyWeek: React.FC<PregnancyWeekProps> = ({
  wide = false,
}) => {
  useDetailsValidation("pregnancyWeek");

  return (
    <Input
      name="details.pregnancyWeek"
      title="Неделя беременности"
      type="number"
      placeholder="1 - 46"
      min={1}
      max={46}
      wide={wide}
    />
  );
};
