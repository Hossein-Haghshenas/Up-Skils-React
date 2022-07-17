import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import headerMenuOptions from "./constants/header.menu.items";
import "./App.css";

function App() {
  return (
    <>
      <Header
        pages={headerMenuOptions.pages}
        settings={headerMenuOptions.settings}
      />
      <HomePage />
      <Footer text="Made with ❤️ by HosseinDeveloper" />
    </>
  );
}

export default App;
