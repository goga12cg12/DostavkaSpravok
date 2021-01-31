import * as React from "react";
import * as yup from "yup";

import { Input } from "components";
import { useDetailsValidation } from "scripts";

export const DiagnosisValidation = yup.object({
  diagnosis: yup
    .string()
    .required("Введите причину болезни")
    .min(3, "Введите полное название болезни")
    .max(150, "Введённое значение слишком длинное"),
});

interface DiagnosisProps {}

export const Diagnosis: React.FC<DiagnosisProps> = () => {
  useDetailsValidation("diagnosis");

  return (
    <Input
      title="Диагноз"
      type="text"
      name="details.diagnosis"
      placeholder="Простуда"
      wide
    />
  );
};
