import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import ContainerCo from "./ContainerCo";

function Article({ text, image, direction }) {
  return (
    <section className="article">
      <ContainerCo
        container
        direction={direction}
        justifyContent="space-around"
        alignItems="center"
        spacing={{ xs: 1, sm: 3, md: 6, lg: 8 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
        sx={{ height: "100%", textAlign: { xs: "center", sm: "start" } }}
      >
        <ContainerCo
          item
          xs={1}
          sm={5}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img width="70%" src={image} alt="" />
        </ContainerCo>

        <ContainerCo
          item
          xs={1}
          sm={3}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Text
            variant="h3"
            color={"azure"}
            sx={{ fontSize: { xs: "1.6rem", sm: "2.4rem", md: "3.5rem" } }}
          >
            {text}
          </Text>
        </ContainerCo>
      </ContainerCo>
    </section>
  );
}

Article.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  direction: PropTypes.string,
};

export default Article;
