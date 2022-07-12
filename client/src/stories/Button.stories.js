import React from "react";
import ButtonCo from "../components/ButtonCo";

export default {
  title: "Button",
  component: ButtonCo,
};

export const Variant = () => (
  <>
    <ButtonCo variant="outlined" sx={{ margin: "1rem" }}>
      Outlined btn
    </ButtonCo>
    <ButtonCo variant="contained" sx={{ margin: "1rem" }}>
      contained btn
    </ButtonCo>
    <ButtonCo variant="text" sx={{ margin: "1rem" }}>
      Text btn
    </ButtonCo>
  </>
);

export const Color = () => (
  <>
    <ButtonCo variant="outlined" color="error" sx={{ margin: "1rem" }}>
      Error btn
    </ButtonCo>
    <ButtonCo variant="outlined" color="primary" sx={{ margin: "1rem" }}>
      Primary btn
    </ButtonCo>
    <ButtonCo variant="outlined" color="success" sx={{ margin: "1rem" }}>
      success btn
    </ButtonCo>
  </>
);
