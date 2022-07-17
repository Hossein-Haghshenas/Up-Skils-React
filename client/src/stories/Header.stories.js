import Header from "../components/Header";
import { pages, settings } from "../constants/header.menu.items";

export default {
  title: "Header/header",
  component: Header,
};

export const header = () => <Header pages={pages} settings={settings} />;
