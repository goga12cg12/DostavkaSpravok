import * as React from "react";
import * as yup from "yup";

import { Input } from "components";
import { getDateYearsBack, prettyDate } from "scripts/helpers";
import { useDetailsValidation } from "scripts";

export const InspectionDateValidation = yup.object({
  inspectionDate: yup
    .date()
    .required("Введите дату проведения осмотра")
    .min(
      getDateYearsBack(5),
      "Для справок, старше пяти лет, обратитесь в нашу поддержку"
    )
    .max(
      getDateYearsBack(-2),
      "Для справок, выписанных на ещё не наступившую дату, обратитесь в нашу поддержку"
    ),
});

interface InspectionDateProps {
  wide?: boolean;
}

export const InspectionDate: React.FC<InspectionDateProps> = ({
  wide = true,
}) => {
  useDetailsValidation("inspectionDate");

  return (
    <Input
      name="details.inspectionDate"
      title="Дата проведения осмотра"
      type="date"
      placeholder={prettyDate(new Date())}
      min={prettyDate(getDateYearsBack(5))}
      max={prettyDate(getDateYearsBack(-2))}
      wide={wide}
    />
  );
};
