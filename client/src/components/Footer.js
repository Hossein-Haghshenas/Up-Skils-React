import React from "react";
import { Grid, Typography } from "@mui/material";

function Footer({ color = "azure" }) {
  return (
    <Grid container justifyContent="center">
      <Typography color={color} sx={{ padding: "2rem 0" }}>
        Created with ❤️ by HosseinDeveloper
      </Typography>
    </Grid>
  );
}

export default Footer;
