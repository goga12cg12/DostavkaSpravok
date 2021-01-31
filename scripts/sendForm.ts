import { Form } from "interfaces/Form";

export const sendForm = async (props: Form) => {
  try {
    if (!props?.name) return { ok: false, message: "Name is invalid" };
    if (!props?.phone) return { ok: false, message: "Phone is invalid" };
    if (!props?.shipTo)
      return { ok: false, message: "Shipping address is missing" };

    const resp = await fetch(`/api/sendForm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(props),
    }).then((resp) => resp.json());

    console.log(resp);

    return resp;
  } catch (e) {
    return { ok: false, message: String(e) };
  }
};
