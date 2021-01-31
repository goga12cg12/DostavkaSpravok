import { truncate } from "scripts";

export default async (req, res) => {
  const token = process.env.BOT_TOKEN;
  const chatId = process.env.GROUP_ID;

  const body = req.body;

  const phone = truncate(body?.phone, 20);

  if (!phone) {
    res.status(400).json({ ok: false, message: "Should provide phone" });
    return;
  }

  // create message

  let text = "Новая заявка на обратный звонок!";

  text += `\nТелефон:  <b>${phone}</b>\n`;

  text += `\nТекущий статус\n<b>Ждёт обработки ⚠️</b>`;

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
};
