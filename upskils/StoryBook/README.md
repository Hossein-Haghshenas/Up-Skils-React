<h1 align="center">React StoryBook</h1>

## What's react storybook ?

Storybook is a development environment tool that is used as a playground for UI components. It allows us, the developers, to create and test components in isolation. It runs outside of the app, too, so project dependencies won't affect the behaviour of components.

---

## How to install that ?

for install storybook & initialize that you most run this code in terminal :

```
npx storybook init
```

this code install all dependencies and create tow folder

1. client/.storybook
2. client/src/stories

---

## How to run that ?

for run storybook you most run this code in the terminal :

```
yarn storybook

or

npm start storybook
```

---

## Learn storybook

For learn storybook :

1. you can read documention :

- [storybook Documention](https://storybook.js.org/)

2. you can watch training course :

- [Code volution](https://youtu.be/BySFuXgG-ow?list=PLC3y8-rFHvwhC-j3x3t9la8-GQJGViDQk)

---

## Instructions

for create an story you most at first create a file like that : Button.stories.js

notice that the **_ stories.js _** is important section of the file name

### `Create An simple story for Button component`

then this is a example for create an story

```JSX
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

```

### `Create a list with a title`

if you wanna create a title for a list of story you can use this code :

```JSX
export default {
  title: "HomePage/Article",
  component: Article,
};
```

### `Make stories sortable`

if you wanna sort your stories you can use this code in **preview.js** file in the **.storybook** folder :

```JSX
export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
```
