import MenuBar from "../components/MenuBar";

export default {
  title: "Header/MenuBar",
  component: MenuBar,
};

const pages = ["Home", "Music", "About Us"];

export const Menu = () => (
  <>
    <MenuBar items={pages}>Outlined btn</MenuBar>
  </>
);
