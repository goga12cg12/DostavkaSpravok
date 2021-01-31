import * as React from "react";
import styled from "styled-components";
import * as yup from "yup";

import { useDetailsValidation } from "scripts";

const Fieldset = styled.fieldset`
  border: none;
  box-shadow: none;
  & .grid {
    margin-top: 8px;
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
  }
`;

import { Cell } from "components";
import { useField } from "formik";

export const SexValidation = yup.object({
  sex: yup.string().required("Выберите свой пол"),
});

interface SexProps {}

export const Sex: React.FC<SexProps> = () => {
  const [field, meta, helpers] = useField("details.sex");
  useDetailsValidation("sex");

  return (
    <Fieldset data-wide>
      <legend>Пол</legend>
      <div className="grid">
        <Cell
          id="Мужчина"
          title="Мужчина"
          field={field}
          onChange={() => helpers.setValue("Мужчина")}
        />
        <Cell
          id="Женщина"
          title="Женщина"
          field={field}
          onChange={() => helpers.setValue("Женщина")}
        />
      </div>
    </Fieldset>
  );
};
