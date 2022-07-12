import { Button } from "@mui/material";

const ButtonCo = ({ children, onClick, sx, startIcon, ...rest }) => {
  return (
    <Button onClick={onClick} sx={sx} startIcon={startIcon} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonCo;
