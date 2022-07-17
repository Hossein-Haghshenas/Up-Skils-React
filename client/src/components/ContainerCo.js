import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

function ContainerCo(props) {
  const { children, item, xs, sm, md, sx, bgcolor, ...rest } = props;
  return (
    <Grid bgcolor={bgcolor} item xs={xs} sm={sm} md={md} sx={sx} {...rest}>
      {children}
    </Grid>
  );
}

ContainerCo.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  sx: PropTypes.object,
};

export default ContainerCo;
