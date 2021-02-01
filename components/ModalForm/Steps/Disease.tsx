import * as React from "react";

import { useField } from "formik";

import { FormType } from "interfaces/Form";
import { Select } from "components";

import {
  Activity,
  Bachelor,
  Docket,
  Fluorography,
  FreeForm,
  SickLeave,
  Review,
  MedicalBook,
  Pool,
  Pregnancy,
  Driver,
  Narcology,
  Psychiatrist,
} from "components/ModalForm/Blocks";
import { usePrefferedTypeContext } from "components/ModalForm/PrefferedTypeContext";

interface DiseaseProps {}

export const Disease: React.FC<DiseaseProps> = () => {
  const [field, , helpers] = useField<FormType>("type");
  const { prefferedType } = usePrefferedTypeContext();

  React.useEffect(() => {
    if (prefferedType) {
      helpers.setValue(prefferedType);
    }
  }, [prefferedType]);

  return (
    <>
      <Select
        name="type"
        title="Тип справки"
        type="text"
        placeholder="Выберите тип справки"
        wide
      >
        <option>Больничный</option>
        <option>Профосмотр</option>
        <option>Флюорография</option>
        <option>Справка в бассейн</option>
        <option>Справка о беременности</option>
        <option>Медкнижка</option>
        <option>Справка в свободной форме</option>
        <option>Освобождение по физкультуре (Форма 095/о)</option>
        <option>Для поступающих в ВУЗ (Форма 086/о)</option>
        <option>Выписка из медкарты (Форма 027/о)</option>
        <option>Справка для водителей (Форма 083/о)</option>
        <option>Сертификат Психиатра</option>
        <option>Сертификат Нарколога</option>
      </Select>

      {field.value === "Больничный" && <SickLeave />}
      {field.value === "Профосмотр" && <Review />}
      {field.value === "Флюорография" && <Fluorography />}
      {field.value === "Справка в бассейн" && <Pool />}
      {field.value === "Справка о беременности" && <Pregnancy />}
      {field.value === "Медкнижка" && <MedicalBook />}
      {field.value === "Справка в свободной форме" && <FreeForm />}
      {field.value === "Освобождение по физкультуре (Форма 095/о)" && (
        <Activity />
      )}
      {field.value === "Для поступающих в ВУЗ (Форма 086/о)" && <Bachelor />}
      {field.value === "Выписка из медкарты (Форма 027/о)" && <Docket />}
      {field.value === "Справка для водителей (Форма 083/о)" && <Driver />}
      {field.value === "Сертификат Психиатра" && <Psychiatrist />}
      {field.value === "Сертификат Нарколога" && <Narcology />}
    </>
  );
};
