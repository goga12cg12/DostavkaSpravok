import * as React from "react";
import * as yup from "yup";

import { Select } from "components";
import { useDetailsValidation } from "scripts";

export const CarCategoryValidation = yup.object({
  carCategory: yup.string().required("Выберите нужную категорию"),
});

interface CarCategoryProps {}

export const CarCategory: React.FC<CarCategoryProps> = () => {
  useDetailsValidation("carCategory");

  return (
    <Select
      name="details.carCategory"
      title="Категория транспортного средства"
      type="text"
      placeholder="Выберите тип транспортного средства"
      wide
    >
      <option>А1 – Мотоциклы без прицепа</option>
      <option>А – Мотоциклы с прицепом</option>
      <option>В1 – Квадроциклы и трициклы</option>
      <option>В – Легковые автомобили</option>
      <option>С – Грузовые автомобили</option>
      <option>D1 – Автобусы до 16 мест</option>
      <option>D – Автобусы от 16 мест</option>
      <option>Т – Трамваи и троллейбусы</option>
    </Select>
  );
};
