import { withStyles } from "@material-ui/core/styles";
import { ButtonBase } from "./ButtonBase";

export const IconButton = withStyles({
  root: {
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    height: "48px",
    width: "48px",

    "& img": {
      width: "24px",
      height: "24px",
    },
  },
})(ButtonBase);
