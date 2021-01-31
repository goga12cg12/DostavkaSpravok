import * as React from "react";

import { useRouter } from "next/router";

import { withStyles } from "@material-ui/styles";
import MuiDialog from "@material-ui/core/Dialog";

import { closeModal } from "scripts";

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

export const ModalBase: React.FC<ModalBaseProps> = ({ children }) => {
  const router = useRouter();
  const isOpen = router?.query?.modal === "true";

  const handleClose = () => {
    closeModal();
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="contact-form"
      open={isOpen}
      scroll="body"
      keepMounted
    >
      {children}
    </Dialog>
  );
};
