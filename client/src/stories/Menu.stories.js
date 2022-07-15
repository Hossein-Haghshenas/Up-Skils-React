import MenuBar from "../components/MenuBar";
import { pages } from "../docs/header.menu.items";

export default {
  title: "Header/MenuBar",
  component: MenuBar,
};

export const Menu = () => <MenuBar items={pages} />;
