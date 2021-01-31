import * as React from "react";
import styled from "styled-components";

import { Formik, Form, FormikConfig, FormikValues } from "formik";
import { ObjectSchema } from "yup";

import { Actions, Stepper } from "components";

import { formValidationContext } from "components/ModalForm/FormValidationContext";

export const validationSchemaContext = React.createContext<
  (validationSchema: ObjectSchema) => void
>(() => {});

export interface FormikFormProps extends FormikConfig<FormikValues> {
  error?: string;
}

export const FormikForm: React.FC<FormikFormProps> = ({
  children,
  error,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  const validationSchema = React.useContext(formValidationContext);

  const [step, setStep] = React.useState(0);

  const getNextStep = () => setStep(step + 1);
  const getPrevStep = () => setStep(step - 1);

  const isLastStep = React.useMemo(() => step >= childrenArray.length - 1, [
    step,
    childrenArray.length,
  ]);

  const prevChilds = React.useMemo(() => childrenArray.slice(0, step), [
    childrenArray,
    step,
  ]);
  const currentChild = React.useMemo(() => childrenArray[step], [
    childrenArray,
    step,
  ]);

  return (
    <>
      <Stepper activeStep={step} />
      <Formik
        {...props}
        validationSchema={validationSchema}
        onSubmit={async (values, helpers) => {
          if (isLastStep) {
            await props.onSubmit(values, helpers);
          } else {
            getNextStep();
            helpers.setFieldTouched("details", false);
            helpers.setFieldTouched("shipTo", false);
          }
        }}
      >
        <FormWrapper>
          <Form autoComplete="off">
            <div className="formPrevSteps">{prevChilds}</div>
            {currentChild}
            <Actions
              step={step}
              getPrevStep={getPrevStep}
              isLastStep={isLastStep}
            />
            {error && (
              <div className="error" data-wide>
                {error}
              </div>
            )}
          </Form>
        </FormWrapper>
      </Formik>
    </>
  );
};

const FormWrapper = styled.div`
  margin: 40px auto;
  width: 87.5%;

  & form {
    display: grid;
    gap: 20px;

    @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr;

      & *[data-wide="true"] {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

    & > .error {
      color: red;
    }

    & > label:last-of-type {
      margin-bottom: 14px;
    }

    & .actions {
      margin-top: 14px;
      display: flex;

      & .action-back {
        background: none;
        color: var(--color-gray-5);
        box-shadow: none !important;

        &:hover {
          color: var(--color-gray-8);
        }
        &:disabled {
          opacity: 0;
        }
      }
    }

    & .aside-note {
      color: rgba(0, 0, 0, 0.65);
    }
  }

  & .formPrevSteps {
    display: none;
  }
`;
