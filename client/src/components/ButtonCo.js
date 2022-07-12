import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ButtonCo = (props) => {
  const { children = "btn", onClick, sx, startIcon, ...rest } = props;
  return (
    <Button onClick={onClick} sx={sx} startIcon={startIcon} {...rest}>
      {children}
    </Button>
  );
};

ButtonCo.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

export default ButtonCo;
