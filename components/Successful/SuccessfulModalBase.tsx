import * as React from "react";

import { withStyles } from "@material-ui/styles";
import MuiDialog from "@material-ui/core/Dialog";

import { useSuccessful } from "./";

const Dialog = withStyles({
  root: {
    "& .MuiDialog-paper": {
      margin: "32px 0",
      width: "90%",
      maxWidth: "500px",

      "@media (max-width: 340px)": {
        width: "100%",
      },
    },

    "& .MuiStepper-root": {
      padding: "24px 24px 0",
    },
  },
})(MuiDialog);

interface ModalBaseProps {}

export const SuccessfulModalBase: React.FC<ModalBaseProps> = ({ children }) => {
  const { open, setOpen } = useSuccessful();

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="contact-form"
      open={open}
      scroll="body"
    >
      {children}
    </Dialog>
  );
};
