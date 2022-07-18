<h1 align="center">Jest and testing libraries</h1>

## What's Jest ?

Jest is an open-source testing framework built on JavaScript, designed majorly to work with React and React Native based web applications.
At Facebook, we use Jest to test React applications.

---

## Why should I use Jest ?

It ensures that different tests don't influence each other's results. For Jest, tests are executed in parallel, each running in their own process. This means they can't interfere with other tests, and Jest acts as the orchestrator that collects the results from all the test processes.

also Thanks to its smart parallel testing Jest beats its competition significantly when it comes to test speed – something that is is often important for large projects that require running large test suites in the CI. Jest is very active with its updates and our community agrees has evolved nicely over time.

---

## What can we test using Jest?

jest primarily designed for React-based applications, but is also used with Babel, JavaScript, Node, Angular, and Vue. It can be used to test NestJS, Next. js, and GraphQL, too.

---

## Learn Jest

For learn Jest :

1. you can read documention :

- [Jest Documention](https://jestjs.io/docs/getting-started)
- [Testing Library Documention](https://testing-library.com/docs/react-testing-library/intro/)

2. you can watch training course :

- [Lama Dev](https://youtu.be/Flo268xRpV0)
- [Laith Academy](https://youtu.be/ajiAl5UNzBU)

---

## Instructions

### `How to install that ?`

#### `Setup with Create React App`

If you are using Create React App. It is ready to use and ships with Jest! You will only need to add react-test-renderer for rendering snapshots.

```
npm install --save-dev react-test-renderer
or
yarn add --dev react-test-renderer
```

#### `Setup without Create React App`

If you have an existing application you'll need to install a few packages to make everything work well together. We are using the babel-jest package and the react babel preset to transform our code inside of the test environment.

```
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
or
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

Your package.json should look something like this (where <current-version> is the actual latest version number for the package). Please add the scripts and jest configuration entries:

```javascript
{
  "dependencies": {
    "react": "<current-version>",
    "react-dom": "<current-version>"
  },
  "devDependencies": {
    "@babel/preset-env": "<current-version>",
    "@babel/preset-react": "<current-version>",
    "babel-jest": "<current-version>",
    "jest": "<current-version>",
    "react-test-renderer": "<current-version>"
  },
  "scripts": {
    "test": "jest"
  }
}
```

```
jest.config.js;
_______________

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
```

```
setupTests.js;
_______________

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

```

---

### `How to run that ?`

for run tests you most run this code in the terminal :

```
yarn test
or
jest
```

---

### `types of tests`

We have different type of tests, and here I will introduce the most common ones :

`Unit Tests` : Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input. For React components, this could mean checking that the component renders correctly for the specified props.

`Integration Tests` : By definition, integration tests test the interactions between the various components of an application. For a React application, this means testing. interactions between React components, typically performed via calling prop functions such as <Component onClick={onClickHandler}> manipulation of component state.

`End to End Tests` : End-to-end tests (E2E) simulate actual user actions and are designed to test how a real user would likely use the application. React E2E testing helps ensure that the code you wrote is functional and your app works as intended. It's a way of catching bugs in your code before you go live with your React app.

---

### `Create a simple test`

if you wanna create a simple test with testid you most
at first create data-testid attribute in your target tag like this :

```JSX
<header data-testid="header" ></header>
```

then create your test ( in Header.test.js ) :

```JSX
test("render header", () => {
  render(<App />);
  const footer = screen.getByTestId("header");
  expect(footer).toBeInTheDocument();
});
```

---
