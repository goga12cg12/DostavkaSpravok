import * as React from "react";

import { Link } from "react-scroll";

import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "components";

import MuiMenu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

const MenuItem = withStyles({
  root: {
    width: "220px",
    height: "48px",
    fontSize: "18px",
    color: "#000",
    "& .MuiListItemIcon-root": {
      color: "#3056de",
    },
  },
})(MuiMenuItem);

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img src="images/icons/menu.svg" alt="arrow pointing down" />
      </IconButton>
      <MuiMenu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Link to="catalog" smooth={true}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            Услуги
          </MenuItem>
        </Link>
        <Link to="about" smooth={true}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            О нас
          </MenuItem>
        </Link>
        <Link to="delivery" smooth={true}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MarkunreadMailboxIcon />
            </ListItemIcon>
            Доставка
          </MenuItem>
        </Link>
        <Link to="contacts" smooth={true}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            Контакты
          </MenuItem>
        </Link>
      </MuiMenu>
    </div>
  );
};
