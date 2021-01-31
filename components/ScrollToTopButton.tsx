import * as React from "react";

import { animateScroll as scroll } from "react-scroll";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { withStyles } from "@material-ui/core/styles";

import { IconButton } from "components/Assets/IconButton";

const Button = withStyles({
  root: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 2,
    boxShadow: "0 5px 4px 0 rgba(0, 0, 0, 0.26)",

    "&:disabled": {
      opacity: 0,
    },
  },
})(IconButton);

interface ScrollToTopButtonProps {}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = () => {
  const [hidden, setHidden] = React.useState(true);

  useScrollPosition(({ currPos }) => {
    setHidden(currPos.y > -400);
  });

  return (
    <Button
      disabled={hidden}
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <img src="images/icons/arrow-up.svg" alt="arrow up" />
    </Button>
  );
};
