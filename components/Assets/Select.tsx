import * as React from "react";

import { Field } from "formik";

import { InputBase } from "./Input";

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  title: string;
  wide?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  children,
  name,
  title,
  placeholder = "Выберите значение",
  wide = false,
  ...props
}) => (
  <Field name={name}>
    {({ field, meta }) => (
      <InputBase data-wide={wide}>
        {title && <div className="inputTitle">{title}</div>}
        <select placeholder={placeholder} required {...field} {...props}>
          {children}
        </select>
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </InputBase>
    )}
  </Field>
);
