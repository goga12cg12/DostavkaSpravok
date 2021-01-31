import * as React from "react";
import { useFormikContext } from "formik";

import { Button } from "components";

interface CallbackSubmitProps {}

export const CallbackSubmit: React.FC<CallbackSubmitProps> = () => {
  const { isSubmitting } = useFormikContext();

  return (
    <Button type="submit" disabled={isSubmitting}>
      Заказать обратный звонок
    </Button>
  );
};
