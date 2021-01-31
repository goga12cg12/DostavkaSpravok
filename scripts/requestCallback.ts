export const requestCallback = async (phone: string) => {
  try {
    if (!phone) return { ok: false, message: "Phone is invalid" };

    const resp = await fetch("/api/requestCallback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ phone }),
    }).then((resp) => resp.json());

    return resp;
  } catch (e) {
    return { ok: false, message: String(e) };
  }
};
