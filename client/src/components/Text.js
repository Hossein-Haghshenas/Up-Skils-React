import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function Text(props) {
  const { children, variant, color, sx, ...rest } = props;
  return (
    <Typography variant={variant} color={color} sx={sx} {...rest}>
      {children}
    </Typography>
  );
}

Text.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  sx: PropTypes.object,
};

export default Text;
