export type FormType =
  | "Больничный"
  | "Профосмотр"
  | "Флюрография"
  | "Справка в бассейн"
  | "Справка о беременности"
  | "Медкнижка"
  | "Справка в свободной форме"
  | "Освобождение по физкультуре (Форма 095/о)"
  | "Для поступающих в ВУЗ (Форма 086/о)"
  | "Выписка из медкарты (Форма 027/о)"
  | "Справка для водителей (Форма 083/о)"
  | "Сертификат Психиатра"
  | "Сертификат Нарколога";

export interface Form {
  // personal information
  name: string;
  birthday: string;
  phone: string;

  // document type
  type: FormType;

  // optional details
  details: {
    address?: string;
    amount?: number;
    diagnosis?: string;
    diseases?: string;
    from?: string;
    inspectionDate?: string;
    pregnancyWeek?: string;
    sex?: "Мужчина" | "Женщина";
    to?: string;
    toWherePlace?: string;
  };

  // contact information
  shipTo: string;
  comment?: string;
}
