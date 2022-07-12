<h1 align="center">Reusable Component</h1>

## What does reusable components mean?

In React, a reuseable component is a piece of UI that can be used in various parts of an application to build more than one UI instance. For Example, we can have a Button component that displays different texts on different pages.

---

## My understand from that

Reuseable component is an component we can use on some places and we pass data to that with props.
<br/> for example its a reuseable btn component :

```

const Button = (props) => {
  const { children = "btn", onClick, color, background , ...rest } = props;
  return (
    <Button onClick={onClick} color={color} background={background} {...rest}>
      {children}
    </Button>
  );
};

export default Button;

```

and we can use that in a lot places like that :

```

<Button onClick={handleClick} color="dark" background="red"> close </Button>

or

<Button onClick={handleClick} color="white" background="green"> start </Button>

```

---

## Tips

question : if we use MUI in our project that have reuseable component. what we most do ? we most use a reuseable component in other reuseable component and finaly use that in our component ?

answer : yes because if you do that you can use propType checker and make sure this component work right

for example :

```
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ButtonCo = (props) => {
  const { children = "btn", onClick, color, background , ...rest } = props;
  return (
    <Button onClick={onClick} color={color} background={background} {...rest}>
      {children}
    </Button>
  );
};

ButtonCo.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  background: PropTypes.string,
};

export default ButtonCo;

```
