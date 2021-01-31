import * as React from "react";
import * as yup from "yup";

import { TextArea } from "components";
import { useDetailsValidation } from "scripts";

export const DiseasesValidation = yup.object({
  diseases: yup
    .string()
    .notRequired()
    .max(320, "Введённое значение слишком длинное"),
});

interface DiseasesProps {}

export const Diseases: React.FC<DiseasesProps> = () => {
  useDetailsValidation("diseases");

  return (
    <TextArea
      name="details.diseases"
      title="Перечислите перенесённые заболевания через запятую (если были)"
      placeholder="Гайморит (12 Лет), Ветрянка (6 лет)"
      required={false}
      wide
    />
  );
};
