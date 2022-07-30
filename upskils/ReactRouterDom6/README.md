<h1 align="center">React-Router-Dom 6</h1>

## What's Ract-Router-Dom ?

React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.

---

## How to install that ?

for install react-router-dom you most run this code

```
 npm i react-router-dom@6
or
 yarn add react-router-dom@6
```

---

## How to Configuring and use that ?

Once your project is set up and React Router is installed as a dependency, open the `src/index.js` in your text editor. Import `BrowserRouter` from `react-router-dom` near the top of your file and wrap your app in a `<BrowserRouter>` :

```JSX
import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

Now you can use React Router anywhere in your app! For a simple example, open `src/App.js` and replace the default markup with some routes:

```JSX
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
```

`notice` : you most always have a route with address `/` thats main route and when site load it will be display
you can use link to open other routes and if you wanna open other route from nav you most use NavLink

```JSX
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
```
