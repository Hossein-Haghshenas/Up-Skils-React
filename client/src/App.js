import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { pages, settings } from "./docs/header.menu.items";
import "./App.css";

function App() {
  return (
    <>
      <Header pages={pages} settings={settings} />
      <HomePage />
      <Footer text="Made with ❤️ by HosseinDeveloper" />
    </>
  );
}

export default App;
