import { truncate, prettyLocalDate } from "scripts";
import { Form } from "interfaces/Form";

export default async (req, res) => {
  const token = process.env.BOT_TOKEN;
  const chatId = process.env.GROUP_ID;

  const body: Form = req.body;

  try {
    const name = truncate(body?.name, 200);
    const phone = truncate(body?.phone, 20);
    const birthday = truncate(body?.birthday, 100);

    const type = truncate(body?.type, 100);
    const details = Object.fromEntries(
      Object.entries(body?.details).map(([key, value]) => [
        key,
        truncate(String(value), 500),
      ])
    );

    const shipTo = truncate(body?.shipTo, 300);
    const comment = truncate(body?.comment, 500);

    if (!name || !phone) {
      res
        .status(400)
        .json({ ok: false, message: "Should provide name and phone" });
      return;
    }
    if (!shipTo) {
      res
        .status(400)
        .json({ ok: false, message: "Should provide shipment address" });
      return;
    }

    // create message

    let text = "Новая заявка!";

    text += `\n\nИмя:  ${name}`;
    text += `\nТелефон:  <b>${phone}</b>`;
    text += birthday && `\nДата рождения:  ${prettyLocalDate(birthday)}\n\n`;

    switch (type) {
      case "Больничный":
        text += `Тип справки:  <b>Больничный</b>
Период с:  ${prettyLocalDate(details?.from)}
По включительно:  ${prettyLocalDate(details?.to)}
Куда нужна справка:  ${details?.toWherePlace}
Диагноз:  ${details?.diagnosis || "-"}`;
        break;

      case "Профосмотр":
        text += `Тип справки:  <b>Профосмотр</b>
Пол:  ${details?.sex}
Адрес проживания:  ${details?.address}
Дата осмотра:  ${prettyLocalDate(details?.inspectionDate)}`;
        break;

      case "Флюрография":
        text += `Тип справки:  <b>Флюрография</b>
Пол:  ${details?.sex}
Дата осмотра:  ${prettyLocalDate(details?.inspectionDate)}`;
        break;

      case "Справка в бассейн":
        text += `Тип справки:  <b>Справка в бассейн</b>
Дата осмотра:  ${prettyLocalDate(details?.inspectionDate)}`;
        break;

      case "Справка о беременности":
        text += `Тип справки:  <b>Справка о беременности</b>
Дата осмотра:  ${prettyLocalDate(details?.inspectionDate)}
Неделя беременности:  ${details?.pregnancyWeek}`;
        break;

      case "Медкнижка":
        text += `Тип справки:  <b>Медкнижка</b>
Пол:  ${details?.sex}
Количество:  ${details?.amount}`;
        break;

      case "Справка в свободной форме":
        text += `Тип справки:  <b>В свободной форме</b>
Дата осмотра:  ${prettyLocalDate(details?.inspectionDate)}`;
        break;

      case "Освобождение по физкультуре (Форма 095/о)":
        text += `Тип справки:  <b>Освобождение по физкультуре (Форма 095/о)</b>
Период с:  ${prettyLocalDate(details?.from)}
По включительно:  ${prettyLocalDate(details?.to)}
Куда нужна справка:  ${details?.toWherePlace}
Дата осмотра:  ${prettyLocalDate(details?.inspectionDate)}`;
        break;

      case "Для поступающих в ВУЗ (Форма 086/о)":
        text += `Тип справки:  <b>Для поступающих в ВУЗ (Форма 086/о)</b>
Пол:  ${details?.sex}
Куда нужна справка:  ${details?.toWherePlace}
Адрес проживания:  ${details?.address}
Дата осмотра:  ${prettyLocalDate(details?.inspectionDate)}
Перенесённые заболевания:  ${details?.diseases}`;
        break;

      case "Выписка из медкарты (Форма 027/о)":
        text += `Тип справки:  <b>Выписка из медкарты (Форма 027/о)</b>
Место работы, должность:  ${details?.toWherePlace}
Период с:  ${prettyLocalDate(details?.from)}
По включительно:  ${prettyLocalDate(details?.to)}
Адрес проживания:  ${details?.address}
Диагноз:  ${details?.diagnosis}`;
        break;
    }

    text += `\n\nАдрес доставки:  ${shipTo}`;
    if (comment) {
      text += `\nКомментарий:  ${comment}`;
    }

    text += `\n\nТекущий статус\n<b>Ждёт обработки ⚠️</b>`;

    // url setup

    const searchParameters = new URLSearchParams();
    searchParameters.append("chat_id", chatId);
    searchParameters.append("text", text);

    const url = `https://api.telegram.org/bot${token}/sendMessage?parse_mode=html&${searchParameters}`;

    // execute call to bot

    const response = await fetch(url).then((resp) => resp.json());

    // return response

    if (response.ok) {
      res.status(200).json({ ok: true });
    } else {
      res.status(500).json({ ok: false, message: "Unknown error occured" });
    }
  } catch (e) {
    res.status(500).json({ ok: false, message: e });
  }
};
