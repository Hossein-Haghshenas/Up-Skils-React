import React from "react";
import { Grid, Typography } from "@mui/material";

function Article({ text, image, direction }) {
  return (
    <section className="article">
      <Grid
        container
        direction={direction}
        justifyContent="space-around"
        alignItems="center"
        spacing={{ xs: 1, sm: 3, md: 6, lg: 8 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
        sx={{ height: "100%", textAlign: { xs: "center", sm: "start" } }}
      >
        <Grid
          item
          xs={1}
          sm={5}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img width="70%" src={image} alt="" />
        </Grid>

        <Grid
          item
          xs={1}
          sm={3}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            variant="h3"
            color={"azure"}
            sx={{ fontSize: { xs: "1.6rem", sm: "2.4rem", md: "3.5rem" } }}
          >
            {text}
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default Article;
