import PropTypes from "prop-types";
import { Menu, MenuItem } from "@mui/material";
import Text from "./Text";

const defaultItems = ["item", "item", "item"];

function MenuBar(props) {
  const { items = defaultItems, anchorEl = null, handleClose = true } = props;
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
            <Text textAlign="center">{item}</Text>
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
