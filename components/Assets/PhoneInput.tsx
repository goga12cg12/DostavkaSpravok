import * as React from "react";
import Input from "react-phone-input-2";
import ru from "react-phone-input-2/lang/ru.json";

import { Field } from "formik";
import * as yup from "yup";

import { InputBase } from "./Input";

const phone380 = /^(\+380).*/gm;
const vendor = /^(\+380) (\(\d{2}\)).*/gm;
const anyEnding = /^(\+380) (\(\d{2}\)).{10}/gm;
const ukrainePhones = /^(\+380) (\(\d{2}\)) \d{3} \d{2} \d{2}/gm;

export const phoneValidation = yup
  .string()
  .required("Введите номер вашего телефона")
  .matches(phone380, "Телефон должен начинаться с +380")
  .matches(vendor, "Введите номер вашего оператора в скобках")
  .matches(anyEnding, "Введённый номер слишком короткий")
  .matches(ukrainePhones, "Введённый телефон не соответствует шаблону");

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  wide?: boolean;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  name,
  title,
  placeholder = "Write your text here",
  wide = false,
  ...props
}) => (
  <Field name={name}>
    {({ field: { onChange, ...fieldProps }, meta }) => (
      <InputBase data-wide={wide}>
        {title && <div className="inputTitle">{title}</div>}
        <Input
          localization={ru}
          disableDropdown={true}
          country="ua"
          placeholder={placeholder}
          inputProps={{
            name,
            "data-error": !!(meta.touched && meta.error),
            required: true,
            ...props,
          }}
          {...fieldProps}
          onChange={(_value, _data, e) => onChange(e)}
        />
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </InputBase>
    )}
  </Field>
);
