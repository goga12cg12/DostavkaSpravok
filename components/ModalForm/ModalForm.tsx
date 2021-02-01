import * as React from "react";

import { Form } from "interfaces/Form";

import {
  FormikForm,
  ModalBase,
  PersonalInformation,
  Disease,
  Contact,
} from "./";
import { useSuccessful } from "components/Successful";

import { closeModal } from "scripts";
import { getDateDaysBack, getDateYearsBack, prettyDate } from "scripts/helpers";
import { sendForm } from "scripts/sendForm";

const initialValues: Form = {
  name: "",
  birthday: prettyDate(getDateYearsBack(20)),
  phone: "",

  type: "Больничный",

  details: {
    address: "",
    amount: 1,
    diagnosis: "",
    diseases: "",
    from: prettyDate(getDateDaysBack(4)),
    inspectionDate: prettyDate(new Date()),
    pregnancyWeek: "",
    sex: "Мужчина",
    to: prettyDate(new Date()),
    toWherePlace: "",
    carCategory: "В – Легковые автомобили",
    profession: "",
  },

  shipTo: "",
  comment: "",
};

export const ModalForm: React.FC = () => {
  const { setOpen } = useSuccessful();
  const [error, setError] = React.useState("");

  return (
    <ModalBase>
      <FormikForm
        error={error}
        initialValues={initialValues}
        onSubmit={async (values: Form, { setSubmitting, setStep }) => {
          setSubmitting(true);
          setError("");

          const resp = await sendForm(values);

          if (resp.ok) {
            setOpen(true);
            setStep(0);
            closeModal();
          } else {
            setError(resp?.message);
          }

          setSubmitting(false);
        }}
      >
        <PersonalInformation />
        <Disease />
        <Contact />
      </FormikForm>
    </ModalBase>
  );
};
