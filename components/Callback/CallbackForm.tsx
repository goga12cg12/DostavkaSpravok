import * as React from "react";
import styled from "styled-components";

import { Formik, Form } from "formik";
import * as yup from "yup";

import { requestCallback } from "scripts";

import { CallbackSubmit } from "components/Callback";
import { PhoneInput, phoneValidation } from "components/Assets/PhoneInput";
import { useSuccessful } from "components/Successful";

const FormWrapper = styled.div`
  & > .error {
    color: red;
    text-align: center;
    position: relative;
    z-index: 2 !important;
  }
  & > form {
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;

    & > label {
      margin: 10px;
      max-width: 320px;
      width: 100%;

      & > .react-tel-input > input {
        background-color: #f2f4f8;
        border-radius: 4px;
        height: 48px;
        outline: none;
        padding: 10px 20px;
        width: 100%;

        transition: var(--transition-ease);

        &:hover {
          box-shadow: 0 0 0 2px var(--color-blue-400);
        }
        &:focus {
          box-shadow: 0 0 0 2px var(--color-blue-500);
        }
      }
    }

    & > button {
      background-color: var(--color-green-400);
      margin: 10px;
      height: 48px;
      width: fit-content;
      padding: 0 20px;
    }

    @media (max-width: 460px) {
      & > label,
      & > button {
        margin: 10px 0;
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;

interface CallbackFormProps {}

const initialValues = {
  phone: "",
};

export const CallbackForm: React.FC<CallbackFormProps> = () => {
  const { setOpen } = useSuccessful();
  const [error, setError] = React.useState("");

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setError("");

        const res = await requestCallback(values.phone);

        if (res.ok) {
          setOpen(true);
          resetForm();
        } else {
          setError(res?.message);
        }

        setSubmitting(false);
      }}
      validationSchema={yup.object({
        phone: phoneValidation,
      })}
    >
      <FormWrapper>
        <Form autoComplete="off">
          <PhoneInput
            name="phone"
            type="phone"
            title={undefined}
            placeholder="+380 (66) 305 04 50"
            minLength={9}
            maxLength={20}
          />
          <CallbackSubmit />
        </Form>
        {error && <div className="error">{error}</div>}
      </FormWrapper>
    </Formik>
  );
};
