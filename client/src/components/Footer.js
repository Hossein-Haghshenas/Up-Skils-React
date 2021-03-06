import React from "react";
import PropTypes from "prop-types";
import ContainerCo from "./ContainerCo";
import Text from "./Text";

function Footer(props) {
  const { text = "footer", color = "azure", bgcolor } = props;
  return (
    <footer>
      <ContainerCo bgcolor={bgcolor} container justifyContent="center">
        <Text color={color} sx={{ padding: "2rem 0" }}>
          {text}
        </Text>
      </ContainerCo>
    </footer>
  );
}

Footer.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Footer;
