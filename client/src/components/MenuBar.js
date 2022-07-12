import PropTypes from "prop-types";
import { Typography, Menu, MenuItem } from "@mui/material";

function MenuBar({ items, anchorEl, handleClose }) {
  return (
    <>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={
          items[0] === "Home" && {
            display: { xs: "block", md: "none" },
          }
        }
      >
        {items.map((item) => (
          <MenuItem key={item} onClick={() => handleClose(item)}>
            <Typography textAlign="center">{item}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

MenuBar.propTypes = {
  items: PropTypes.array,
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func,
};

export default MenuBar;
